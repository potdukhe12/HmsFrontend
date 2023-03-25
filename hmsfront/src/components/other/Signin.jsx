import { useEffect, useState } from "react";
import axios from "axios";

export let Signin = () => {
    const [user, setUser] = useState({
        uname: "Patient@1",
        pwd: "Patient@1"
    });

    const { uname, pwd} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSub = async (e) => {
        e.preventDefault();
        await axios.post("http://192.168.1.105:8080/checkLogin",user).then(console.log(user));
    }

    return (
        <div>
            <form onSubmit={(e) => {onSub(e)}}>
                <input type="text" placeholder="Enter User ID: " onChange={(e) => {onInputChange(e)}}/>
                <button type="submit">Submit</button>
                <p>{user}</p>
            </form>
        </div>
    );
}