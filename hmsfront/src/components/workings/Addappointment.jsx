import axios from "axios";
import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export let Addappointment = (props) => {
    
    useEffect(() => {
        postApmt()
        console.log("I'm here");
        console.log(props.ds);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const postApmt = () => {
        // event.preventDefault();
        axios.post(props.p + "/saveApmt", props.ds).then((response) => {
            if (response.data){
                console.log(response.data);
            }
            else{
                console.log("something went wrong!");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <p>Saving the appointment...</p>
        </div>
    );

}