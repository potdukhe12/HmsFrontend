import axios from "axios";
import bgimg from "../../img/bg6.jpg";
import userdpmale from "../../img/doctordp.jpg"
import userdpfemale from "../../img/doctordp2.jpg"
import { Navig } from "../common/Navig";
import { BsFillPencilFill, BsCalendarEvent, BsEnvelope, BsPhone, BsXSquare } from "react-icons/bs";

import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import { Doctorupdate } from "./Doctorupdate";

import { useLocation } from "react-router-dom";
import { History } from "../patient/History";
import { Patient } from "../tables/Patient";


export let Doctorhome = (props) => {

    const location = useLocation();
    const uid = location.state || {};

    var ageDifMs = Date.now() - Date.parse(uid["did"]["dob"]);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const [prof, setProf] = useState("col-md-8");
    const [updt, setUpdt] = useState("collapse");
    const [icon, setIcon] = useState(<BsFillPencilFill></BsFillPencilFill>);

    const [docapmt, setDocapmt] = useState([]);
    const [page, setPage] = useState();
    const [page2, setPage2] = useState();
    const [pageForm, setPageForm] = useState(false);

    const line1Ref = useRef(null);
    
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    const convDate = (d) => {
        const dt1 = Date.parse(d);
        const dt2 = new Date(dt1);
        const date = dt2.getDate() + "/" + (dt2.getMonth()+1) + "/" + dt2.getFullYear();
        return date;
    }

    const convTime = (d) => {
        const tm1 = Date.parse(d);
        const tm2 = new Date(tm1);
        const time = tm2.getHours() + ":" + tm2.getMinutes();
        return time;
    }

    useEffect(() => {
        getTreat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTreat = async () => {

        const result = await axios.get(props.p + `/getApmtByDid?did=${uid["did"]["did"]}`);
        console.log(result.data);

        if (result.data !== null) {
            setDocapmt(result.data);
        }
    }

    const status = uid["did"]["status"];

    return (
        <div>
            <Navig></Navig>
            <div style={{ 
                backgroundImage: `url(${bgimg})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover",
                position: "relative"
                }}>
                <div 
                    style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // adjust opacity here
                    }} 
                >

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-6" style={{padding:"0 3% 0 3%"}}>
                            <form action="" method="get">
                                <div className="card mt-5">

                                    <div className="container-fluid">
                                        <div className="row shadow">
                                            <div className="col-md-4">
                                                <div className="mt-3">
                                                    <img src={uid["did"]["gender"] === "Male" ? userdpmale : userdpfemale} className="img-fluid rounded-top bg-light" alt="userdp" />
                                                    <h3 className="mt-3 text-dark">{uid["did"]["dname"]}</h3>
                                                    <h5 className="text-muted">Doctor</h5>
                                                    <br />

                                                    <button type="button" className="btn btn-outline-dark pb-2 mb-5" onClick={() => {
                                                        if (prof === "col-md-8") {
                                                            setIcon(<BsXSquare></BsXSquare>); setProf("collapse"); setUpdt("col-md-8");
                                                        }
                                                        else {
                                                            setIcon(<BsFillPencilFill></BsFillPencilFill>); setProf("col-md-8"); setUpdt("collapse");
                                                        }
                                                    }}>{icon}</button>

                                                </div>

                                            </div>
                                            <div className={prof}>
                                                <div className="card-body">
                                                    <h4 className="card-title"><strong>Profile</strong></h4>
                                                    <div className="text-left">
                                                        <h6 style={{ textAlign: "left" }}>Personal Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p>Age:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{age}</em></strong></p>
                                                                </div>
                                                                <div className="col">
                                                                    <p>Gender:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["did"]["gender"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h6 style={{ textAlign: "left" }}>Proffesional Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p>Degree:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["did"]["degree"]}</em></strong></p>
                                                                </div>
                                                                <div className="col">
                                                                    <p>Experience:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["did"]["experience"]} Yrs</em></strong></p>
                                                                </div>
                                                                <div className="col-5">
                                                                    <p>Specialization:</p>
                                                                </div>
                                                                <div className="col-4">
                                                                    <p><strong><em>{uid["did"]["specialization"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <h6 style={{ textAlign: "left" }}>Contact Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p><BsPhone></BsPhone>&ensp;Mobile No.:</p>
                                                                    <p><BsEnvelope></BsEnvelope>&ensp;E-Mail:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["did"]["mobno"]}</em></strong></p>
                                                                    <p><strong><em>{uid["did"]["user"]["email"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <br /> */}
                                                        <h6 style={{ textAlign: "left" }}>Address Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p>Address:</p>
                                                                </div>
                                                                <div className="col-8">
                                                                    <p><strong><em>{uid["did"]["user"]["address"]}</em></strong></p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={updt}>
                                                <Doctorupdate p={props.p} ddata={uid["did"]}></Doctorupdate>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="col-md-4" style={{padding:"0 1% 0 1%"}}>
                          <div className="rounded bg-white mt-5 shadow">
                            <div className="mt-3">
                                <div className="card mb-3" >
                                    {!status && (
                                                <span class="mt-2" style={{ color: "red" }}><strong>
                                                    You are Deactivated.<br/>
                                                    Please contact your Hospital.
                                                </strong>
                                                <hr/>
                                                </span>
                                            )}
                                    <div className="card-body" >
                                        <h4 className="card-title">Current Appointments <BsCalendarEvent></BsCalendarEvent></h4>
                                    </div>
                                    <ul className="list-group list-group-flush" style={{ maxHeight: "380px", overflowY: "scroll" }}>

                                        { docapmt ? (<>
                                            {docapmt.map((a) => (
                                                <li className="list-group-item">
                                                    <p className="mb-1"><strong>Appointment by: {a["patient"]["pname"]}</strong></p>
                                                    <p className="text-muted mb-1">Treatment: {a["treatment"]["tname"]}</p>
                                                    <p className="text-muted mb-1">Date: {convDate(a["datetime"])} Time: {convTime(a["datetime"])}</p>
                                                    <div class="d-grid gap-2">
                                                        <button type="button" name="" id="" class="btn btn-light border" 
                                                            onClick={() => { 
                                                                setPageForm(true);
                                                                setPage2(<Patient p={props.p} ptt={a["patient"]}></Patient>);
                                                                setPage(<History p={props.p} u={a["patient"]["user"]}></History>);
                                                                scrollToRef(line1Ref);
                                                             }}>
                                                                View Patient History
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </>) : (<>
                                        <div>
                                            <h2 class="text-primary" style={{padding:"20%", textAlign:"left"}}>No <br/>Appointments <br/>Scheduled</h2>
                                        </div>
                                        </>)
                                        }
                                    </ul>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />


    { !pageForm ? (
        <>
        </>
    ) : (
        <>
            <div style={{ height: "700px", padding:"0 2% 0px 2%"}}>
                {page2}
                <br></br><br></br>
                {page}
            </div>
        </>
    )}
                    <div  ref={line1Ref}>
                    </div>
                </div>
            </div>
        </div>
    );
}