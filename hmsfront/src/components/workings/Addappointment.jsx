import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export let Addappointment = (props) => {

    const navigate = useNavigate();
    
    useEffect(() => {
        console.log("I'm here");
        console.log(props.ds);
        postApmt();
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