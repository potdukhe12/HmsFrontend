import bgimg from "../../img/bg4.jpg";
import userdpmale from "../../img/userdp.jpg"
import userdpfemale from "../../img/userdp2.jpg"
import { Navig } from "../common/Navig";
import axios from "axios";
import React, { useRef } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BsFillPencilFill, BsCalendarEvent, BsClockHistory, BsEnvelope, BsPhone, BsXSquare } from "react-icons/bs";

import { useEffect, useState } from "react";
import { Patientupdate } from "./Patientupdate";
import { History } from "./History";

import { useLocation, useNavigate } from "react-router-dom";
import { Treatments } from "../tables/Treatments";
import { Hospitals } from "../tables/Hospitals";
import { Doctors } from "../tables/Doctors";
import { Medservs } from "../tables/Medservs";


export let Patienthome = (props) => {
    
    const line1Ref = useRef(null);
    
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

    const [doc, setDoc] = useState([]);
    console.log(doc);

    useEffect(() => {
        getDoc();
    }, []);

    const getDoc = async () => {
        const result = await axios.get(props.p + `/getAllDoctor`);
        setDoc(result.data);
    }

    const navigate = useNavigate();

    const location = useLocation();
    const uid = location.state || {};

    var ageDifMs = Date.now() - Date.parse(uid["pid"]["dob"]);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const [prof, setProf] = useState("col-8");
    const [updt, setUpdt] = useState("collapse");
    const [icon, setIcon] = useState(<BsFillPencilFill></BsFillPencilFill>);
    const st1 = "btn btn-outline-dark btn-lg mt-3 mb-3";
    const st2 = "btn btn-dark btn-lg mt-3 mb-3";
    const [buthold, setButhold] = useState(st1)
    const [page, setPage] = useState(<History u={uid["uid"]} p={props.p}></History>);

    const [apmt, setApmt] = useState([]);
    const [doctor, setDoctor] = useState([]);

    const togglebut = () => {
        setPage();
        setButhold(st2);
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
        getApmt();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getApmt = async () => {

        const result = await axios.get(props.p + `/getApmtByPid?pid=${uid["pid"]["pid"]}`);
        console.log(result.data);

        setApmt(result.data);
    }
    const getDoctor = async (did) => {
        console.log("did is " + did);
        const result = await axios.get(props.p + `/getDoctorByDid?did=${did}`);
        console.log(result.data);
        setDoctor(result.data);
    }



    return (
        <div>
            <Navig></Navig>
            <div style={{ backgroundImage: `url(${bgimg})`, height: "72vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-6" style={{padding:"0 50px 0 50px"}}>
                            <form action="" method="get">
                                <div className="card mt-5">
                                    <div className="container-fluid">
                                        <div className="row shadow">
                                            <div className="col-4">
                                                <div className="mt-3">
                                                    <img src={uid["pid"]["gender"] === "Male" ? userdpmale : userdpfemale} className="img-fluid rounded-top bg-light" alt="userdp" />
                                                    <h3 className="mt-3 text-dark">{uid["pid"]["pname"]}</h3>
                                                    <h5 className="text-muted">Patient</h5>
                                                    <br />
                                                    <button type="button" className="btn btn-outline-dark pb-2 mb-5" onClick={() => {
                                                        if (prof === "col-8") {
                                                            setIcon(<BsXSquare></BsXSquare>); setProf("collapse"); setUpdt("col-8");
                                                        }
                                                        else {
                                                            setIcon(<BsFillPencilFill></BsFillPencilFill>); setProf("col-8"); setUpdt("collapse");
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
                                                                    <p><strong><em>{uid["pid"]["gender"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <h6 style={{ textAlign: "left" }}>Contact Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p><BsPhone></BsPhone>&ensp;Mobile No.:</p>
                                                                    <p style={{ textAlign: "center" }}><strong><em>{uid["pid"]["mobno"]}</em></strong></p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><BsEnvelope></BsEnvelope>&ensp;E-Mail:</p>
                                                                    <p style={{ textAlign: "center" }}><strong><em>{uid["uid"]["email"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <h6 style={{ textAlign: "left" }}>Address Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p>Address:</p>
                                                                </div>
                                                                <div className="col-8">
                                                                    <p><strong><em>{uid["uid"]["address"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={updt}>
                                                <Patientupdate p={props.p} pdata={uid["pid"]}></Patientupdate>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 rounded bg-white mt-5 shadow" >
                            <div className="mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Current Appointments <BsCalendarEvent></BsCalendarEvent></h4>
                                    </div>
                                    <ul className="list-group list-group-flush" style={{ maxHeight: "330px", overflowY: "scroll" }}>
                                        {
                                            apmt.map((a) => (
                                                <li className="list-group-item">
                                                    <p className="mb-1"><strong>Appointment for: {a["doctor"]["dname"]}</strong></p>
                                                    <p className="text-muted mb-1">Hospital: {a["hospital"]["hname"]}</p>
                                                    <p className="text-muted mb-1">Treatment: {a["treatment"]["tname"]}</p>
                                                    <p className="text-muted mb-1">Date: {convDate(a["datetime"])} Time: {convTime(a["datetime"])}</p>
                                                    <div class="d-grid gap-2">
                                                        <button type="button" class="btn btn-light border" onClick={() => {
                                                            getDoctor(a["doctor"]["did"]);
                                                            console.log(a["doctor"]);
                                                            navigate("../doctor", { state: { doc: a["doctor"] } })
                                                        }}>View Doctor</button>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-1">
                            </div>
                            <div className="col-2 mt-1">
                                <button type="button" className={buthold} onClick={() => { buthold === st1 ? setPage(<History u={uid["uid"]} p={props.p}></History>) : togglebut(); scrollToRef(line1Ref) }}><strong>History&ensp;<BsClockHistory></BsClockHistory></strong></button>
                            </div>
                            <div className="col-2 mt-2">
                                <div className="col-6 mt-2">
                                </div>
                            </div>
                            <div className="col-6 mt-1">
                                <div>
                                <Dropdown isOpen={dropdownOpen1} toggle={toggle1} direction="end">
                                        <span ><strong>Search by :&emsp; </strong></span>
                                        <DropdownToggle caret color="outline-dark btn-lg mt-3 mb-3"><strong>Doctors</strong></DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Select a Specialization</DropdownItem>
                                            <DropdownItem divider />
                                                <DropdownItem onClick={() => {
                                                        setPage(<Doctors p={props.p} pid={uid["pid"]["pid"]} spec={"all"} ></Doctors>);
                                                        scrollToRef(line1Ref);
                                                    }}>All Doctors
                                                </DropdownItem>
                                            {
                                                doc.map((d) => (
                                                    <DropdownItem onClick={() => {
                                                        setPage(<Doctors p={props.p} pid={uid["pid"]["pid"]} spec={d["specialization"]} ></Doctors>);
                                                        scrollToRef(line1Ref);
                                                    }}>{d["specialization"]}
                                                    </DropdownItem>
                                                ))
                                            }
                                        </DropdownMenu>
                                        &nbsp;
                                    {/* <button type="button" className={buthold} onClick={() => { buthold === st1 ? setPage(<Doctors p={props.p} pid={uid["pid"]["pid"]}></Doctors>) : togglebut(); scrollToRef(line1Ref) }}><strong>Doctors</strong></button>
                                    &nbsp; */}
                                    <button type="button" className={buthold} onClick={() => { buthold === st1 ? setPage(<Treatments p={props.p} pid={uid["pid"]["pid"]}></Treatments>) : togglebut(); scrollToRef(line1Ref)  }}><strong>Treatments</strong></button>
                                    &nbsp;
                                    <button type="button" className={buthold} onClick={() => { buthold === st1 ? setPage(<Hospitals p={props.p} pid={uid["pid"]["pid"]}></Hospitals>) : togglebut(); scrollToRef(line1Ref)  }}><strong>Hospitals</strong></button>
                                    &nbsp;
                                    <button type="button" className={buthold} onClick={() => { buthold === st1 ? setPage(<Medservs p={props.p} pid={uid["pid"]["pid"]}></Medservs>) : togglebut(); scrollToRef(line1Ref)  }}><strong>Medical Services</strong></button>
                                </Dropdown>
                                </div>
                            </div>
                            <hr className="mt-1" />
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div style={{ height: "600px", overflowY: "scroll", padding:"0 100px 0px 100px" }}>
                            {page}
                        </div>
                    </div>
                    <div  ref={line1Ref}>
                    </div>
                </div>
            </div>
        </div >
    );
}