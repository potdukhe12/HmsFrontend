import React, { useState, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navig } from "../common/Navig";
import bgimg from "../../img/bg2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useDispatch } from "react-redux";

export let Login = (props) => {
  // const [uname, setUsername] = useState("");
  // const [pwd, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newpwd, setNewPassword] = useState("");
  const [cnfpwd, setCnfPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const navigate = useNavigate();

/* Using Reducer to store login information */

const init = {
  uname: "",
  pwd: ""
}

const reducer = ( state, action ) => {
  switch ( action.type )
  {
    case 'update':
        return { ...state, [action.fld] : action.val }
    case 'reset':
        return init;
  }
}

const [info, dispatch] = useReducer( reducer, init );
const reduxAction = useDispatch();

const sendData = (e) => {
  e.preventDefault();
  const reqOptions = {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(info)
  }
  fetch( props.p + "/checkLogin", reqOptions )
  .then( response => { if( response.ok )
                            return response.text();
                       else
                            throw new Error("Server Error");
                     })
  .then( text => text.length ? JSON.parse(text) : {} )
  .then( async (obj) => {
        if( Object.keys(obj).length === 0 )
        {
            setErrorMsg("Invalid username or password");
        }
        else
        {
            // reduxAction(login());
             
            // if( obj.status === false)
            // {
            //     alert("New registration request is pending!");
            // }

            if( obj.role === "1" )
            {
                const response1 = await axios.get(props.p + `/getPatient?uid=${obj.uid}`);
                console.log(response1.data);
                navigate("/patient-home", { state: { uid: obj, pid: response1.data } });
            }
            else if( obj.role === "2" )
            {
                const response2 = await axios.get(props.p + `/getDoctor?uid=${obj.uid}`);
                console.log(response2.data);
                navigate("/doctor-home", { state: { uid: obj, did: response2.data } });
            }
            else if( obj.role === "3" )
            {
                const response3 = await axios.get(props.p + `/getHospital?uid=${obj.uid}`);
                console.log(response3.data);
                navigate("/hospital-home", { state: { uid: obj, hid: response3.data } });
            }
            else if( obj.role === "4" )
            {
                const response4 = await axios.get(props.p + `/getAdmin?uid=${obj.uid}`);
                  console.log(response4.data);
                  navigate("/admin-home", { state: { uid: obj, aid: response4.data } });
            }

        }
  })
  .catch((error) => {
      console.log(error);
      alert("Server error! Try after some time.")
  });

};


/* Using Axios request & response method */

  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   await axios
  //     .post(props.p + "/checkLogin", { 
  //       uname, 
  //       pwd 
  //     })
  //     .then(async (response) => {
  //     if( response.data )
  //     {
  //       const role = response.data.role;
  //       console.log(response.data);
  //       if (role === "4") 
  //       {
  //         const reserve4 = await axios.get(props.p + `/getAdminID?uid=${response.data.uid}`)
  //         navigate("/admin-home", { state: { uid : response.data.uid, aid : reserve4.data } });
  //       }
  //       else if (role === "2") 
  //       {
  //         const reserve2 = await axios.get(props.p + `/getDoctor?uid=${response.data.uid}`)
  //         navigate("/doctor-home", { state: { uid : response.data.uid, did : reserve2.data } });
  //       }
  //       else if (role === "3") 
  //       {
  //         const reserve3 = await axios.get(props.p + `/getHospitalByUid?uid=${response.data.uid}`)
  //         navigate("/hospital-home", { state: { uid : response.data.uid, hid : reserve3.data } });
  //       }
  //       else if (role === "1") 
  //       {
  //         const reserve1 = await axios.get(props.p + `/getPatient?uid=${response.data.uid}`)
  //         navigate("/patient-home", { state: { uid : response.data, pid : reserve1.data } });
  //       }
  //      } 
  //      else 
  //      {
  //       setErrorMsg("Invalid username or password");
  //      }
  //     })
  //     .catch((error) => {
  //       setErrorMsg("Server Error");
  //       console.log(error);
  //     });
  // };


  const [login, setLogin] = useState("");
  const [fpass, setFpass] = useState("collapse");
  const [fpMSG, setFpMSG] = useState("Forgot/Change Password");

  const handleSubmitFP = async(e) => {
    e.preventDefault();
    if( newpwd === cnfpwd )
    {
      await axios
      .get(props.p + "/updatePassword?email="+email+"&pwd="+newpwd)
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
        <div style={{backgroundImage: `url(${bgimg})`,backgroundPosition: "center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div className="row">
                <div className="col-md-7"></div>
                
                <div className="col-5">
                <div class="login-box">
                  <div className={login}>  
                        <h2>Login</h2>
                        { errorMsg && 
                                ( <span>
                                    {errorMsg}</span>
                                )}
                        <br/>
                        {/* <form onSubmit={handleSubmit}> */}
                        <form>
                        <div class="user-box">
                            <input type="text" name="uname" id="uname"
                                    placeholder="."
                                    value={info.uname}
                                    onChange={(e) => {  
                                          // setUsername(e.target.value);
                                          dispatch({ type:'update', fld: 'uname', val: e.target.value })  }}/>
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                          <div className="row">
                            <div className="col-9">
                                <input type={showPassword ? "text" : "password"} 
                                        name="pwd" id="pwd"
                                        value={info.pwd}
                                        placeholder="."
                                        onChange={(e) => {  
                                              // setPassword(e.target.value);
                                              dispatch({ type:'update', fld: 'pwd', val: e.target.value })  }}/>
                                <label>Password</label>
                            </div>
                            <div className="col-2">
                                <button type="button" className="btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ height: "50%"}}>
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEyeSlash : faEye}
                                            style={{ width: "20px", color: "#fff" }}/>
                                </button>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn_css" 
                                onClick={ (e) => { sendData(e); 
                                                  //  handleSubmit(e) 
                                                 }}>
                            Submit
                        </button>
                        </form>
                        {/* <p>{JSON.stringify(info)}</p> */}
                  </div>


      {/* ///////////////// */}


                <div className={fpass}>  
                        <h2>Change Password</h2>
                        { errorMsg && 
                                ( <span>
                                    {errorMsg}</span>
                                )}
                        <form onSubmit={handleSubmitFP}>
                        <div class="user-box">
                            <input type="text" name="email" id="email"
                                    placeholder="."
                                    onChange={(e) => setEmail(e.target.value)}/>
                            <label>Enter Your Email</label>
                        </div>
                        <div class="user-box">
                            <div className="row">
                                <div className="col-9">
                                    <input type={showPassword ? "text" : "password"} 
                                            name="newpwd" id="newpwd"
                                            placeholder="."
                                            onChange={(e) => setNewPassword(e.target.value)}/>
                                    <label>New Password</label>
                                </div>
                                <div className="col-2">
                                    <button type="button"  className="btn btn-outline-light"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ height: "50%"}}>
                                            <FontAwesomeIcon
                                                icon={showPassword ? faEyeSlash : faEye}
                                                style={{ width: "20px" }}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="user-box">
                            <div className="row">
                                <div className="col-9">
                                    <input type={showPassword ? "text" : "password"} 
                                            name="cnfpwd" id="cnfpwd"
                                            placeholder="."
                                            onChange={(e) => setCnfPassword(e.target.value)}/>
                                    <label>Confirm Password</label>
                                </div>
                                <div className="col-2">
                                    <button type="button"  className="btn btn-outline-light"
                                        onClick={() => setShowPassword2(!showPassword2)}
                                        style={{ height: "50%"}}>
                                            <FontAwesomeIcon
                                                icon={showPassword2 ? faEyeSlash : faEye}
                                                style={{ width: "20px" }}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn_css">CONFIRM</button>
                      </form>
                  </div>

      {/* /////////////////////// */}

                    <div>
                        <button type="button" className="btn btn-outline-light pb-2 mb-2 mt-5" 
                          onClick={() => {
                            if (login === "") {
                                setFpMSG("Go back to LOGIN"); 
                                setLogin("collapse"); 
                                setFpass("");
                                setErrorMsg("");
                            }
                            else {
                                setFpMSG("Forgot/Change Password"); 
                                setLogin(""); 
                                setFpass("collapse");
                                setErrorMsg("");
                            }
                          }}>{fpMSG}
                        </button>
                    </div>
                    <div className="mb-3">
                        <a href="/signup" style={{textUnderlineOffset:"3px"}}>Don't have an account? Sign Up</a>
                    </div>
                  
                  </div> 
                </div>
            </div>
        </div>
    </div>
);
};