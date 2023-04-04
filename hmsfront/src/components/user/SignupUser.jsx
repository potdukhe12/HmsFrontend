import bgimg from "../../img/bg2.jpg";
import Footer from "../common/Footer";
import { Navig } from "../common/Navig";
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export let SignupUser = (props) => {
    
    const location = useLocation();

      const [user, setUser] = useState({
        uname: '',
        pwd: '',
        confirmpwd: '',
        email: '',
        address: '',
        role: location.state && location.state.arole ? location.state.arole : '',
      });
      
      const [patientForm, setPatientForm] = useState(false);
      const [doctorForm, setDoctorForm] = useState(false);
      const [hospitalForm, setHospitalForm] = useState(false);
      const [adminForm, setAdminForm] = useState(false);
      const [uid, setUid] = useState();
      const [invalid, setInvalid] = useState(false);
      const [showPassword, setShowPassword] = useState(false);
      const [showPassword2, setShowPassword2] = useState(false);
    
      const navigate = useNavigate();
      
    //   user["role"] = location.state && location.state.arole ? location.state.arole : "";
      console.log("ROLE : " + user["role"]);
      const aid = location.state && location.state.aaid ? location.state.aaid : "";
      console.log("AID : " + aid);
      const hid = location.state && location.state.hhid ? location.state.hhid : "";
      console.log("HID : " + hid);

      const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
    
      const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const { uname, pwd, confirmpwd, email, address, role } = user;
        if (pwd !== confirmpwd) {
          setInvalid(true);
          return;
        }
        axios
          .post(props.p + '/saveUser', {
            uname,
            pwd,
            email,
            address,
            role
          })
        .then((response) => {
            setInvalid(false);
            setUid(response.data.uid);
            console.log(response.data);
            console.log(response.data.uid);
            if( response.data.role === "4" )
            {
                setAdminForm(true);
            }
            else if( response.data.role === "2" )
            {
                setDoctorForm(true);
            }
            else if( response.data.role === "3" )
            {
                setHospitalForm(true);
            }
            else
            {
                setPatientForm(true);
            }
          })
          .catch(() => {
            setInvalid(true);
          });
      };
    

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


      const [patient, setPatient] = useState({
        pname: '',
        dob: '',
        mobno: '',
        gender: 'Male'
      });

      const handleChange2 = (event) => {
        const { name, value } = event.target;
        setPatient((prevPatient) => ({
          ...prevPatient,
          [name]: value,
        }));
      };

      const handlePatientSubmit = (event) => {
        event.preventDefault();
        const { pname, dob, mobno, gender } = patient;
        console.log(user);
        console.log(patient);
        console.log(uid);

        user["uid"] = uid;
        axios
          .post(props.p + `/savePatient`, {
            pname,
            dob,
            mobno,
            gender,
            user
          })
          .then(() => {
            navigate('/login');
          })
          .catch(() => {
            setInvalid(true);
          });
      };

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const [hospital, setHospital] = useState({
    hname: '',
    teleno: '',
    status: 'false',
    aid: aid
  });
  
//   hospital["aid"] = aid;

  const handleChange4 = (event) => {
    const { name, value } = event.target;
    setHospital((prevHospital) => ({
      ...prevHospital,
      [name]: value,
    }));
  };

  
  const handleHospitalSubmit = (event) => {
    event.preventDefault();
    const { hname, teleno, status, aid } = hospital;
    console.log(user);
    console.log(hospital);
    console.log(uid);
    admin["aid"] = aid;
    user["uid"] = uid;
    axios
      .post(props.p + `/saveHospital`, {
        hname, 
        teleno, 
        status,
        admin,
        user
      })
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        setInvalid(true);
      });
  };
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const [doctor, setDoctor] = useState({
    dname: '',
    dob: '',
    mobno: '',
    gender: 'Male',
    degree: '',
    experience: '0',
    specialization: '',
    status: 'false',
    hid
  });

  const handleChange3 = (event) => {
    const { name, value } = event.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };


  const handleDoctorSubmit = (event) => {
    event.preventDefault();
    const { dname, dob, mobno, gender, 
        degree, experience, specialization, 
        status, hid} = doctor;
    console.log(user);
    console.log(doctor);
    console.log(uid);
    console.log(hid);

    user["uid"] = uid;
    hospital["hid"] = hid;
    axios
      .post(props.p + `/saveDoctor`, {
        dname, dob, mobno, gender, user,
        degree, experience, specialization, 
        status, hospital
        
      })
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        setInvalid(true);
      });
  };


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


const [admin, setAdmin] = useState({
    aname: '',
    mobno: '',
  });

  const handleChange5 = (event) => {
    const { name, value } = event.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  const handleAdminSubmit = (event) => {
    event.preventDefault();
    const { aname, mobno } = admin;
    console.log(user);
    console.log(admin);
    console.log(uid);

    user["uid"] = uid;
    axios
      .post(props.p + `/saveAdmin`, {
        aname,
        mobno,
        user
      })
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        setInvalid(true);
      });
  };



//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
            <Navig isSignup={true}></Navig>
            <div style={{backgroundImage: `url(${bgimg})`, height: "95vh", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

            <br /><br />
                <div className="container flex">
                    <div className="row">
                        <div className="col-md-7">
                        </div>
                        <div className="col-md-5 border border-primary rounded bg-white"
                                style={{
                                    // width:"365px", 
                                    // margin:"0 2% 0 2%",
                                    padding:"0 2% 0 2%"
                                }}
                        >
                            
                            <h1 className="text-primary" style={{margin: "10px"}}><strong>Sign Up</strong></h1>
                            <hr style={{color: "green"}}/>


{patientForm ? (
    <>
        <form onSubmit={handlePatientSubmit}>
          <div className="row">
            <div className="col-7">
              <h4>Patient Details</h4>
            </div>
            <div className="col-5">
                <h4>UID: {uid}</h4>
            </div>
          </div>
          <br/>
            <div className="row">
                <div className="col">
                    <div className="col">
                    <input type="text" class="form-control" 
                        id="pname"
                        name="pname"
                        value={patient.pname}
                        onChange={handleChange2}
                        placeholder="Enter Your Full Name"
                        required
                    />
                    </div>
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col">
                    <div className="col">
                    <input type="tel" class="form-control" 
                        id="mobno"
                        name="mobno"
                        value={patient.mobno}
                        onChange={handleChange2}
                        placeholder="Enter Mobile No."
                        pattern="[0-9]{7,10}"
                        required
                    />
                    </div>
                </div>
                <div className="col">
                    <input
                        type="date" class="form-control"
                        id="dob"
                        name="dob"
                        value={patient.dob}
                        onChange={handleChange2}
                        placeholder="D.O.B. : dd-mm-yyyy" 
                        max="2023-03-15"
                        required
                    />
                </div>
            </div>
                
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col-2">
                    <label htmlFor="role" >&ensp;Gender:</label>
                </div>
                <div className="col-4">
                    <select id="gender" name="gender" 
                                style={{textAlign:"center"}} class="form-control form-select" 
                                value={patient.gender} 
                                onChange={handleChange2}>
                        <option value="Male">Male &ensp;&ensp;</option>
                        <option value="Female">Female &ensp;&ensp;</option>
                    </select>
                </div>
                <div className="col-6">
                    
                </div>
            </div>
            <div className="mb-3">
                    </div>
            <div className="row">
                <div className="col" style={{textAlign:"center"}}>
                    <button type="submit" className="btn btn-primary mb-3" style={{padding: "7px 40px 7px 40px"}}>Submit</button>
                </div>
                <div className="col" style={{textAlign:"center"}}>
                    <button type="reset" className="btn btn-primary mb-3" style={{padding: "7px 50px 7px 50px"}}>Clear</button>
                </div>
            </div>

        </form>


</>


)   :   (
        
    
<>


{   doctorForm  ?  (


<>
    <form onSubmit={handleDoctorSubmit}>
        <div className="row">
            <div className="col-7">
              <h4>Doctor Details</h4>
            </div>
            <div className="col-5">
                <h4>UID: {uid}</h4>
            </div>
        </div>
          <br/>
            <div className="row">
                <div className="col">
                    <input type="text" class="form-control" 
                        id="dname"
                        name="dname"
                        value={doctor.dname}
                        onChange={handleChange3}
                        placeholder="Enter Your Full Name"
                        required
                    />
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col-2">
                    <label htmlFor="degree" >&ensp;Degree:</label>
                </div>
                <div className="col-4">
                    <input type="text" class="form-control" 
                        id="degree"
                        name="degree"
                        value={doctor.degree}
                        onChange={handleChange3}
                        placeholder="Enter Your Degree"
                        required
                    />
                </div>
                <div className="col-6">
                    <input type="text" class="form-control" 
                        id="specialization"
                        name="specialization"
                        value={doctor.specialization}
                        onChange={handleChange3}
                        placeholder="Enter Your specialization"
                        required
                    />
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col">
                    <input type="tel" class="form-control" 
                        id="mobno"
                        name="mobno"
                        value={doctor.mobno}
                        onChange={handleChange3}
                        placeholder="Enter Mobile No. ( 7 - 10 digits )"
                        pattern="[0-9]{7,10}"
                        required
                    />
                </div>
                <div className="col">
                    <input
                        type="date" class="form-control"
                        id="dob"
                        name="dob"
                        value={doctor.dob}
                        onChange={handleChange3}
                        placeholder="Enter D.O.B.: dd-mm-yyyy" 
                        max="2023-03-15"
                        required
                    />
                </div>
            </div>
                
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col-2">
                    <label htmlFor="role" >&ensp;Gender:</label>
                </div>
                <div className="col-4">
                    <select id="gender" name="gender" 
                                style={{textAlign:"center"}} class="form-control form-select" 
                                value={doctor.gender} 
                                onChange={handleChange3}>
                        <option value="Male">Male &ensp;&ensp;</option>
                        <option value="Female">Female &ensp;&ensp;</option>
                    </select>
                </div>
                
                <div className="col-2">
                    <label htmlFor="status" >&ensp;Status:</label>
                </div>
                <div className="col-4">
                    <select id="status" name="status" 
                                style={{textAlign:"center"}} class="form-control form-select" 
                                value={doctor.status} 
                                onChange={handleChange3} disabled>
                        <option value="false" style={{color:"red"}}>Inactive &ensp;&ensp;</option>
                        <option value="true" style={{color:"green"}}>Active &ensp;&ensp;</option>
                    </select>
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="hid" >Hospital ID:</label>
                </div>
                <div className="col">
                    <input type="text" class="form-control" 
                        id="hid"
                        name="hid"
                        value={doctor.hid}
                        onChange={handleChange3}
                        placeholder="Enter Your Hospital ID"
                        disabled
                    />
                    {/* <select value={hid} onChange={handleSelectChange}>
                        <option value="">Select a hospital</option>
                            {hospitals.map((hospital) => (
                        <option value={hospital.hid}>
                            {hospital.hname}
                        </option>
                            ))}
                    </select> */}
                </div>
                <div className="col">
                    <label htmlFor="experience" >Experience:</label>
                </div>
                <div className="col">
                    <input type="int" class="form-control" 
                        id="experience"
                        name="experience"
                        value={doctor.experience}
                        onChange={handleChange3}
                        placeholder="Enter Your Experience"
                        required
                    />
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col" style={{textAlign:"center"}}>
                    <button type="submit" className="btn btn-primary mb-3" style={{padding: "7px 40px 7px 40px"}}>Submit</button>
                </div>
                <div className="col" style={{textAlign:"center"}}>
                    <button type="reset" className="btn btn-primary mb-3" style={{padding: "7px 50px 7px 50px"}}>Clear</button>
                </div>
            </div>

        </form>


</>


)   :   (


<>


{ hospitalForm ? (


<>


<form onSubmit={handleHospitalSubmit}>
        <div className="row">
            <div className="col-7">
              <h4>Hospital Details</h4>
            </div>
            <div className="col-5">
                <h4>UID: {uid}</h4>
            </div>
        </div>
          <br/>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="hname" >Name:</label>
                </div>
                <div className="col">
                    <input type="text" class="form-control" 
                        id="hname"
                        name="hname"
                        value={hospital.hname}
                        onChange={handleChange4}
                        placeholder="Enter Your Full Name"
                        required
                    />
                </div>
            </div>
                <div className="mb-3">
                </div>
            
            <div className="row">
                <div className="col">
                    <input type="tel" class="form-control" 
                        id="teleno"
                        name="teleno"
                        value={hospital.teleno}
                        onChange={handleChange4}
                        placeholder="Enter Mobile No. ( 10 digits )"
                        pattern="[0-9]{7,10}"
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="status" >Status:</label>
                    <select id="status" name="status" 
                                style={{textAlign:"center"}} class="form-control form-select" 
                                value={hospital.status} 
                                onChange={handleChange4} disabled>
                        <option value="0" style={{color:"red"}}>Inactive &ensp;&ensp;</option>
                        <option value="1" style={{color:"green"}}>Active &ensp;&ensp;</option>
                    </select>
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="aid" >Admin ID:</label>
                </div>
                <div className="col">
                    <input type="text" class="form-control" 
                        id="aid"
                        name="aid"
                        value={hospital.aid}
                        onChange={handleChange4}
                        placeholder="Enter Your Admin ID"
                        disabled
                    />
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col" style={{textAlign:"center"}}>
                    <button type="submit" className="btn btn-primary mb-3" style={{padding: "7px 40px 7px 40px"}}>Submit</button>
                </div>
                <div className="col" style={{textAlign:"center"}}>
                    <button type="reset" className="btn btn-primary mb-3" style={{padding: "7px 50px 7px 50px"}}>Clear</button>
                </div>
            </div>

        </form>
            
</>
    
    
)   :   (


<>


{ adminForm ? (

<>

<form onSubmit={handleAdminSubmit}>
        <div className="row">
            <div className="col">
              <h4>Admin Details</h4>
            </div>
            {/* <div className="col-5">
                <h4>UID: {uid}</h4>
            </div> */}
        </div>
          <br/>
            <div className="row">
                <div className="col-3 text-start">
                    <h5>Name:</h5>
                </div>
                <div className="col">
                    <input type="text" class="form-control" 
                        id="aname"
                        name="aname"
                        value={admin.aname}
                        onChange={handleChange5}
                        placeholder="Enter Your Full Name"
                        required
                    />
                </div>
            </div>
                <div className="mb-3">
                </div>
            
            <div className="row">
                <div className="col-3 text-start">
                    <h5>Mob.No.:</h5>
                </div>
                <div className="col">
                    <input type="tel" class="form-control" 
                        id="mobno"
                        name="mobno"
                        value={admin.mobno}
                        onChange={handleChange5}
                        placeholder="Enter Mobile No. ( 10 digits )"
                        pattern="[0-9]{7,10}"
                        required
                    />
                </div>
            </div>
                <div className="mb-3">
                </div>
            <div className="row">
                <div className="col" style={{textAlign:"center"}}>
                    <button type="submit" className="btn btn-primary mb-3" style={{padding: "7px 40px 7px 40px"}}>Submit</button>
                </div>
                <div className="col" style={{textAlign:"center"}}>
                    <button type="reset" className="btn btn-primary mb-3" style={{padding: "7px 50px 7px 50px"}}>Clear</button>
                </div>
            </div>

        </form>
       
</>
    
    
    ) : (
    <>

        <form onSubmit={handleRegisterSubmit}>
            <h4>User details</h4>
            {invalid && <p>Username or password already in use!</p>} 
                <div className="row mb-2 mt-3">
                    <div className="col-6">
                        <input type="text"
                            class="form-control" id="uname"
                            name="uname"
                            value={user.uname}
                            onChange={handleChange}
                            required 
                            placeholder="Enter Unique UserName"
                        />
                    </div>
                    <div class="col-2 text-start my-auto">
                        <strong>Role:</strong>
                    </div>
                    <div className="col-4">
                        <select id="role" name="role" style={{textAlign:"center"}} class="form-control form-select" value={user.role} onChange={handleChange}>
                            <option value="1">
                                Patient &ensp;&ensp;</option>
                            <option value="2" disabled title="Only HOSPITAL MANAGEMENT can add doctors. Please contact your HOSPITAL.">
                                Doctor &ensp;&ensp;</option>
                            <option value="3" disabled title="Only ADMIN can add HOSPITAL. Please contact your ADMIN.">
                                Hospital &ensp;&ensp;</option>
                            <option value="4">
                                Admin &ensp;&ensp;</option>
                        </select>
                    </div>
                  <div className="mb-3">
                  </div>
                </div>
                <div className="row">
                    <div class="col-5 text-start my-auto">
                        <strong>&ensp;Password :</strong>
                    </div>
                    <div className="col-6">
                        <input type={showPassword ? "text" : "password"} 
                            class="form-control" 
                            id="pwd"
                            name="pwd"
                            value={user.pwd}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <div class="col-1 text-start my-auto">
                        <span>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}
                                onClick={() => setShowPassword(!showPassword)} />
                        </span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div class="col-5 text-start my-auto">
                        <strong>&ensp;Confirm Password :</strong>
                    </div>
                    <div className="col-6">
                        <input
                            type={showPassword2 ? "text" : "password"} 
                            class="form-control"
                            id="confirmpwd"
                            name="confirmpwd"
                            value={user.confirmpwd}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <div class="col-1 text-start my-auto">
                        <span>
                            <FontAwesomeIcon icon={showPassword2 ? faEyeSlash : faEye}
                                onClick={() => setShowPassword2(!showPassword2)} />
                        </span>
                    </div>
                </div>
                
                <div className="mb-3">
                  </div>
                <div className="row">
                    <div class="col-5 text-start my-auto">
                        <strong>&ensp;Email :</strong>
                    </div>
                    <div className="col-6">
                        <input
                            type="email" class="form-control" 
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Enter Email ID"
                            required
                        />
                    </div>
                    <div className="col">
                        
                    </div>
                </div> 
                  <div className="mb-3">
                  </div> 
                <div className="row">
                    <div className="col">
                        <div class="mb-3">
                            <textarea class="form-control" id="address" name="address" rows="3" 
                                value={user.address}
                                onChange={handleChange}
                                placeholder="Enter Address"
                                required>
                            </textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"center"}}>
                  <button type="submit" className="btn btn-primary mb-3" style={{padding: "7px 40px 7px 40px"}}>Next</button>
                    </div>
                  <div className="col" style={{textAlign:"center"}}>
                  <button type="reset" className="btn btn-primary mb-3" onClick={()=>{setInvalid("")}} style={{padding: "7px 50px 7px 50px"}}>Clear</button>
                    </div>
                </div>
          </form>


                        </>
                        )}
                </>
                )}
        </>
        )}
</>
)}


                    </div>
                  </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}