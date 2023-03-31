import { useEffect, useState } from "react";
import axios from "axios";

export let Login = () => {

    const [users , setUsers] = useState([]);
    useEffect(() => {
        // console.log("Connected!");
        getUsers();
    },[]);

    const getUsers = async () => {
        const result = await axios.get("http://192.168.1.96:8080/getAll");
        console.log(result.data);
        setUsers(result.data);
        // setUser(result);
    }

    return (
        <div>
            <div class="table-responsive">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr class="">
                                    <td scope="row" key={index}>{index + 1}</td>
                                    <td>{user.uname}</td>
                                    <td>{user.pwd}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}