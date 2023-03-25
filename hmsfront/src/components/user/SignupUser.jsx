import bgimg from "../../img/bg2.jpg";
import Footer from "../common/Footer";
import { Navig } from "../common/Navig";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export let SignupUser = (props) => {
      const [user, setUser] = useState({
        uname: '',
        pwd: '',
        confirmpwd: '',
        email: '',
        address: '',
        role: '1'
      });
      
      const [patientForm, setPatientForm] = useState(false);
      const [doctorForm, setDoctorForm] = useState(false);
      const [hospitalForm, setHospitalForm] = useState(false);
      const [adminForm, setAdminForm] = useState(false);
      const [uid, setUid] = useState();
      const [invalid, setInvalid] = useState(false);
    
      const navigate = useNavigate();
    
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
    status: 'false'
  });

  const handleChange4 = (event) => {
    const { name, value } = event.target;
    setHospital((prevHospital) => ({
      ...prevHospital,
      [name]: value,
    }));
  };

  const handleHospitalSubmit = (event) => {
    event.preventDefault();
    const { hname, teleno, status } = hospital;
    console.log(user);
    console.log(hospital);
    console.log(uid);

    user["uid"] = uid;
    axios
      .post(props.p + `/saveHospital`, {
        hname, 
        teleno, 
        status,
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

const [hid, setHid] = useState();
const [doctor, setDoctor] = useState({
    dname: '',
    dob: '',
    mobno: '',
    gender: 'Male',
    degree: '',
    experience: '0',
    specialization: '',
    status: 'false'
  });

  const handleChange3 = (event) => {
    const { name, value } = event.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

//   const handleChange3_2 = (event) => {
//     const { name, value } = event.target;
//     setHid((prevHid) => ({
//         prevHid,
//         [name]: value,
//       }));
//   };


  const handleDoctorSubmit = (event) => {
    event.preventDefault();
    const { dname, dob, mobno, gender, 
        degree, experience, specialization, 
        status} = doctor;
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
            <Navig></Navig>
            <div style={{backgroundImage: `url(${bgimg})`, height: "95vh", backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>

            <br />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6 border border-primary rounded bg-white" style={{widows:"70vh"}}>
                            
                            <h1 className="text-primary" style={{margin: "10px"}}><strong>Sign Up</strong></h1>
                            <hr style={{color: "green"}}/>


{patientForm ? (
    <>
        <form onSubmit={handlePatientSubmit}>
          <div className="row">
            <div className="col-7">
              <h2>Patient Form</h2>
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
                        <option>Select &ensp;&ensp;</option>
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
              <h2>Doctor Form</h2>
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
                        <option>Select &ensp;&ensp;</option>
                        <option value="Male">Male &ensp;&ensp;</option>
                        <option value="Female">Female &ensp;&ensp;</option>
                    </select>
                </div>
                
                <div className="col-2">
                    <label htmlFor="role" >&ensp;Status:</label>
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
                    <input type="text" class="form-control" 
                        id="hid"
                        name="hid"
                        value={hid}
                        onChange={(v) => {setHid(v.target.value)}}
                        placeholder="Enter Your Hospital ID"
                        required
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
              <h2>Hospital Form</h2>
            </div>
            <div className="col-5">
                <h4>UID: {uid}</h4>
            </div>
        </div>
          <br/>
            <div className="row">
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
            <div className="col-7">
              <h2>Admin Form</h2>
            </div>
            <div className="col-5">
                <h4>UID: {uid}</h4>
            </div>
        </div>
          <br/>
            <div className="row">
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
            <h2>Registration Form</h2>
            <br/>
            {invalid && <p>Username or password already in use!</p>} 
                <div className="row">
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
                    <div className="col-2">
                            <label htmlFor="role" >&ensp;Role:</label>
                    </div>
                    <div className="col-4">
                            <select id="role" name="role" style={{textAlign:"center"}} class="form-control form-select" value={user.role} onChange={handleChange}>
                                <option>Select &ensp;&ensp;</option>
                                <option value="1">Patient &ensp;&ensp;</option>
                                <option value="2">Doctor &ensp;&ensp;</option>
                                <option value="3">Hospital &ensp;&ensp;</option>
                                <option value="4">Admin &ensp;&ensp;</option>
                            </select>
                    </div>
                  <div className="mb-3">
                  </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="col">
                        <input type="password" class="form-control" 
                            id="pwd"
                            name="pwd"
                            value={user.pwd}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            required
                        />
                        </div>
                    </div>
                    <div className="col">
                        <input
                            type="password" class="form-control"
                            id="confirmpwd"
                            name="confirmpwd"
                            value={user.confirmpwd}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                </div>
                
                <div className="mb-3">
                  </div>
                <div className="row">
                    <div className="col">
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
                  <button type="submit" className="btn btn-primary mb-3" style={{padding: "7px 40px 7px 40px"}}>Submit</button>
                    </div>
                  <div className="col" style={{textAlign:"center"}}>
                  <button type="reset" className="btn btn-primary mb-3" style={{padding: "7px 50px 7px 50px"}}>Clear</button>
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