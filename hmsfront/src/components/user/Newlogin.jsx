import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navig } from "../common/Navig";
import bgimg from "../../img/bg2.jpg";
import Footer from "../common/Footer";

export let Login = (props) => {
  const [uname, setUsername] = useState("");
  const [pwd, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(props.p + "/checkLogin", { 
        uname, 
        pwd 
      })
      .then(async (response) => {
      if( response.data )
      {
        const role = response.data.role;
        console.log(response.data);
        if (role === "4") 
        {
          const reserve4 = await axios.get(props.p + `/getAdminID?uid=${response.data.uid}`)
          navigate("/admin-home", { state: { uid : response.data.uid, aid : reserve4.data } });
        }
        else if (role === "2") 
        {
          const reserve2 = await axios.get(props.p + `/getDoctor?uid=${response.data.uid}`)
          navigate("/doctor-home", { state: { uid : response.data.uid, did : reserve2.data } });
        }
        else if (role === "3") 
        {
          const reserve3 = await axios.get(props.p + `/getHospitalByUid?uid=${response.data.uid}`)
          navigate("/hospital-home", { state: { uid : response.data.uid, hid : reserve3.data } });
        }
        else
        {
          const reserve1 = await axios.get(props.p + `/getPatient?uid=${response.data.uid}`)
          navigate("/patient-home", { state: { uid : response.data, pid : reserve1.data } });
        }
       } 
      })
      .catch((error) => {
        setErrorMsg("Invalid username or password");
        console.log(error);
      });
  };


  return (
    <div>
        <Navig></Navig>
        <div style={{backgroundImage: `url(${bgimg})`, height: "80vh", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <br />
        <br />
        <br />
            <div className="container">
                <div className="row">
                    <div className="col-8">
                    </div>
                    <div className="col-4 border border-primary rounded bg-white shadow" style={{width:"420px"}}>
    
                        <h1 className="text-primary" style={{padding:"8px 0 0 0"}}><strong>Login</strong></h1>
                        <hr style={{color: "green"}}/>
                        
                        <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label for="uname" className="form-label"><strong>User Name</strong></label>
                            <input type="text" className="form-control" name="uname" id="uname" placeholder="Enter your User Name" onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label"><strong>Password</strong></label>
                            <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Enter your Password" onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Login</button>
                        &nbsp;
                        <button type="reset" className="btn btn-primary mb-3">Clear</button>
                        </form>
                        <div className="mb-3">
                            <a href="/signup" style={{textUnderlineOffset:"3px"}}>Don't have an account? Sign Up</a>
                        </div>
                        {errorMsg && <div className="text-danger mb-3">{errorMsg}</div>}
                    </div>
                    {/* <div className="col-1">
                    </div> */}
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
);
};
