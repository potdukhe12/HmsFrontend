import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navig } from "../common/Navig";
import bgimg from "../../img/bg2.jpg";
import Footer from "../common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Newlogin.css";

export let Login = (props) => {
  const [uname, setUsername] = useState("");
  const [pwd, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cnfpwd, setCnfPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    await axios
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
        else if (role === "1") 
        {
          const reserve1 = await axios.get(props.p + `/getPatient?uid=${response.data.uid}`)
          navigate("/patient-home", { state: { uid : response.data, pid : reserve1.data } });
        }
       } 
       else 
       {
        setErrorMsg("Invalid username or password");
       }
      })
      .catch((error) => {
        setErrorMsg("Server Error");
        console.log(error);
      });
  };

  const [login, setLogin] = useState("");
  const [fpass, setFpass] = useState("collapse");
  const [fpMSG, setFpMSG] = useState("Forgot Password/Change Password");

  const handleSubmitFP = async(event) => {
    event.preventDefault();
    if( pwd === cnfpwd )
    {
      await axios
      .get(props.p + "/updatePassword?email="+email+"&pwd="+pwd)
      .then(async (response) => {
        if( response.data )
        {
          alert("Your Password is changed successfully!!!");
          setErrorMsg("");
        }
        else
        {
          setErrorMsg("Invalid Email!");
        }
      })
      .then(() => {navigate("/login")})
      .catch((error) => {
        setErrorMsg("Server Error");
        console.log(error);
      })
    }
    else
    {
      setErrorMsg("Passwords do not match!");
    }
    

    };

  return (
    <div>
        <Navig isLogin={true}></Navig>
        <div style={{backgroundImage: `url(${bgimg})`, height: "80vh", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    </div>
                    <div className="col-md-4 border border-primary rounded bg-white shadow" style={{width:"350px",margin:"0 5% 0 5%",padding:"0 2% 0 2%"}}>
                      <div  className={login}>
                        <h1 className="text-primary" style={{padding:"10px 0 0 0"}}><strong>Login</strong></h1>
                        <hr style={{color: "green"}}/>
                        
                        {errorMsg && (
                          <span style={{ color: "red" }}>{errorMsg}</span>
                        )}
                        <form onSubmit={handleSubmit}>

                          <div className="mb-4">
                            <strong>User Name</strong>
                            <input type="text" className="form-control mt-2" name="uname" id="uname" placeholder="Enter your User Name" onChange={(event) => setUsername(event.target.value)}/>
                          </div>

                          <div className="mb-4">
                                <strong>Password</strong>
                            <div  className="row">  
                              <div  className="col-10 mt-2 input-group">
                                <input type={showPassword ? "text" : "password"} 
                                      className="form-control" name="pwd" id="pwd" 
                                      placeholder="Enter your Password" 
                                      onChange={(event) => setPassword(event.target.value)}/>
                                <button type="button"  className="btn btn-outline-secondary"
                                  onClick={() => setShowPassword(!showPassword)}
                                  style={{ height: "100%", display: "flex", alignItems: "center" }}>
                                      <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        style={{ width: "20px" }}/>
                                </button>
                              </div>
                            </div>
                          </div>
                        <button type="submit" className="btn btn-primary mb-3" style={{width:"120px"}}>Login</button>
                        &ensp;&emsp;
                        <button type="reset" className="btn btn-primary mb-3" style={{width:"120px"}} onClick={()=>{setErrorMsg("")}}>Clear</button>
                        </form>

                      </div>
{/* **************************************************************************************************************************** */}
                      <div className={fpass}>
                      <h2 className="text-primary" style={{padding:"10px 0 0 0"}}><strong>Forgot Password</strong></h2>
                        <hr/>
                        
                        {errorMsg && (
                          <span style={{ color: "red" }}>{errorMsg}</span>
                        )}

                        <form onSubmit={handleSubmitFP}>

                            <div className="mb-3">
                                <strong>Enter Your Email</strong>
                                <input type="text" className="form-control" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>

                            <div className="mb-3">
                                  <strong>New Password</strong>
                              <div  className="row">
                                <div  className="col-10 input-group">
                                  <input type={showPassword ? "text" : "password"} 
                                        className="form-control" name="pwd" id="pwd" value={pwd} 
                                        onChange={(event) => setPassword(event.target.value)}/>
                                  <button type="button"  className="btn btn-outline-secondary"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ height: "100%", display: "flex", alignItems: "center" }}>
                                        <FontAwesomeIcon
                                          icon={showPassword ? faEyeSlash : faEye}
                                          style={{ width: "20px" }}/>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="mb-4">
                                  <strong>Confirm Password</strong>
                              <div  className="row">
                                <div  className="col-10 input-group">
                                  <input type={showPassword2 ? "text" : "password"} 
                                        className="form-control" name="cnfpwd" id="cnfpwd" value={cnfpwd} 
                                        onChange={(event) => setCnfPassword(event.target.value)}/>             
                                  <button type="button"  className="btn btn-outline-secondary"
                                    onClick={() => setShowPassword2(!showPassword2)}
                                    style={{ height: "100%", display: "flex", alignItems: "center" }}>
                                        <FontAwesomeIcon
                                          icon={showPassword2 ? faEyeSlash : faEye}
                                          style={{ width: "20px" }}/>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <button type="submit" className="btn btn-primary mb-4" style={{width:"220px"}}>Submit</button>
                        
                        </form>

                      </div>
{/* **************************************************************************************************************************** */}
                      <div>
                          <button type="button" className="btn btn-outline-secondary pb-2 mb-2 mt-3" 
                                  onClick={() => {
                                                    if (login === "") {
                                                      setFpMSG("Go back to LOGIN"); 
                                                      setLogin("collapse"); 
                                                      setFpass("");
                                                      setErrorMsg("");
                                                    }
                                                    else {
                                                      setFpMSG("Forgot Password/Change Password"); 
                                                      setLogin(""); 
                                                      setFpass("collapse");
                                                      setErrorMsg("");
                                                    }
                                                  }}>{fpMSG}</button>
                        </div>
                        <div className="mb-3">
                            <a href="/signup" style={{textUnderlineOffset:"3px"}}>Don't have an account? Sign Up</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
);
};
