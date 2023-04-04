import axios from "axios";
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import bgimg from "../../img/bg5.jpg";
import userdp from "../../img/hospital-avatar.png"
import { Navig } from "../common/Navig";
import { BsFillPencilFill, BsEnvelope, BsPhone, BsXSquare, BsPlusCircle, BsFileEarmarkMedical } from "react-icons/bs";

import { useEffect, useState } from "react";
import { Hospitalupdate } from "./Hospitalupdate";

import { useLocation, useNavigate } from "react-router-dom";

export let Hospitalhome = (props) => {
    const navigate = useNavigate()
    const location = useLocation();
    const uid = location.state || {};

    const hid = uid["hid"]["hid"];

    const [prof, setProf] = useState("col-md-8");
    const [updt, setUpdt] = useState("collapse");
    const [icon, setIcon] = useState(<BsFillPencilFill></BsFillPencilFill>);

    const [doc, setDoc] = useState([]);
    const [apmt, setApmt] = useState([]);

    const convDate = (d) => {
        const dt1 = Date.parse(d);
        const dt2 = new Date(dt1);
        const date = dt2.getDate() + "/" + (dt2.getMonth() + 1) + "/" + dt2.getFullYear();
        return date;
    }

    const convTime = (d) => {
        const tm1 = Date.parse(d);
        const tm2 = new Date(tm1);
        const time = tm2.getHours() + ":" + tm2.getMinutes();
        return time;
    }

    useEffect(() => {
        getDoc();
        getApmt();
    }, []);

    const getDoc = async () => {
        const result = await axios.get(props.p + `/getDoctorByHid?hid=${uid["hid"]["hid"]}`);
        console.log("result1"+result.data);
        if(result.data !== null)
            setDoc(result.data);
    }
    const getApmt = async () => {
        const result2 = await axios.get(props.p + `/getApmtByHid?hid=${uid["hid"]["hid"]}`);
        console.log("result2"+result2.data);
        if(result2.data !== null)
            setApmt(result2.data);
    }

    const status = uid["hid"]["status"]
    console.log("Hii : " + status );

    return (
        <div>
            <Navig></Navig>
            <div style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative"  }}>
                <div className="container-fluid" >{/* style={{width:"1500px", overflowX: "scroll"}} */}
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-6" style={{padding:"0 5% 0 5%"}}>
                            <form action="" method="get">
                                <div className="card mt-5">
                                    <div className="container-fluid">
                                        <div className="row shadow">
                                            <div className="col-md-4">
                                                <div className="mt-3">
                                                    <img src={userdp} className="img-fluid rounded-top bg-light" alt="userdp" />
                                                    <h3 className="mt-3 text-dark">{uid["hid"]["hname"]}</h3>
                                                    <h5 className="text-muted">Hospital</h5>
                                                    <br />
                                                    <button type="button" className="btn btn-outline-dark pb-2 mb-4" onClick={() => {
                                                        if (prof === "col-md-8") {
                                                            setIcon(<BsXSquare></BsXSquare>); setProf("collapse"); setUpdt("col-md-8");
                                                        }
                                                        else {
                                                            setIcon(<BsFillPencilFill></BsFillPencilFill>); setProf("col-md-8"); setUpdt("collapse");
                                                        }
                                                    }}>{icon}</button>
                                                </div>
                                            </div>
                                            <div className={prof}  style={{padding:"15px 0 5px 10px"}}>
                                                <div className="card-body">
                                                    <h4 className="card-title"><strong>Profile&ensp;&ensp;</strong></h4>
                                                    <div className="text-left">
                                                        <h6 style={{ textAlign: "left" }}>Contact Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p><BsPhone></BsPhone>&ensp;Contact No.:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["hid"]["teleno"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p><BsEnvelope></BsEnvelope>&ensp;E-Mail:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["hid"]["user"]["email"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="mt-3" style={{ textAlign: "left" }}>Address Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <p>Address:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{uid["hid"]["user"]["address"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="mt-3" style={{ textAlign: "left" }}>Admin Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-5">
                                                                    <p>Admin Name:</p>
                                                                </div>
                                                                <div className="col-7">
                                                                    <p><strong><em>{uid["hid"]["admin"]["aname"]}</em></strong></p>
                                                                </div>
                                                                <div className="col-5">
                                                                    <p>Admin Contact:</p>
                                                                </div>
                                                                <div className="col-7">
                                                                    <p><strong><em>{uid["hid"]["admin"]["user"]["email"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={updt}>
                                                <Hospitalupdate p={props.p} hdata={uid["hid"]}></Hospitalupdate>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4" style={{padding:"0 3% 0 3%"}}>
                          <div className="rounded bg-white shadow" >
                                <div className="card mt-5" >
                                    <div className="card-body">
                                        <h4 className="card-title">Working Doctors <BsFileEarmarkMedical></BsFileEarmarkMedical></h4>
                                    </div>
                                    <div style={{ maxHeight: "357px", overflowY: "scroll" }}>
                                        <ListGroup className="m-2">
                                        { doc ? (<>
                                            { doc.map((d) => (
                                                <ListGroupItem>
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="col-8" style={{ textAlign: "left" }}>
                                                                <button type="button" class="btn btn-light" style={{ minWidth: "5cm" }} 
                                                                    onClick={() => { navigate("../doc", { state: { did: d } }) }}>
                                                                        {d["dname"]}
                                                                </button>
                                                            </div>
                                                            <div class="col-4">
                                                                <button type="button" class={d["status"]===true?"btn btn-warning":"btn btn-success"} 
                                                                    onClick={async () => {
                                                                        const activeApmt = await axios.get(props.p + `/getDocActiveApmt?did=${d["did"]}`)
                                                                        console.log(activeApmt.data)
                                                                        if(activeApmt.data && d["status"]===true)
                                                                        {
                                                                            alert(`Please address ongoing ${activeApmt.data} appointments first!`)
                                                                        }
                                                                        else
                                                                        {
                                                                            await axios.get(props.p + `/updateDocStatus?did=${d["did"]}`)
                                                                            .then(alert("Status updated successfully!"))
                                                                            .then((navigate(0)));
                                                                        }
                                                                }}>{d["status"]===true?"Disable":"Enable"}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                            ))}
                                            </>) : (<>
                                                <div>
                                                    <h2 class="text-primary" style={{padding:"5% 10% 10% 20%", textAlign:"left"}}>No <br/>Doctors <br/>Added</h2>
                                                </div>
                                            </>)
                                            }
                                            <ListGroupItem active tag="button" action 
                                                disabled={status === false}
                                                onClick={() => { navigate("../signup", { state: { arole:"2", hhid:hid } }) }}>
                                                    <strong><BsPlusCircle></BsPlusCircle> Add a doctor</strong>
                                            </ListGroupItem>
                                        </ListGroup>
                                            {!status && (
                                                <div style={{paddingBottom:"10px", color: "red" }}><strong>
                                                    Not allowed!<br/>
                                                    You are Deactivated.<br/>
                                                    Please contact your ADMIN.<br/>
                                                    </strong></div>
                                            )}
                                    </div>
                                </div>
                          </div>
                        </div>
                        <div className="col-md-1">

                        </div>
                    </div>
                    <br /><br /><br />

                { apmt ? (<>
                    <div className="row" style={{padding:"0 5% 10% 5%",maxHeight:"820px"}}>
                        <div>
                            <h1 className="text-light" style={{ textAlign: "left", marginLeft: "7%" }}><strong>List of Appointments</strong></h1>
                            <hr className="border-light border" />
                            <div>
                                <div class="table-responsive rounded">
                                    <table class="table table-striped
                                            table-hover	
                                            table-borderless
                                            table-primary
                                            align-middle">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>Appointment ID</th>
                                                <th>Treatment ID</th>
                                                <th>Treatment Name</th>
                                                <th>Doctor ID</th>
                                                <th>Doctor Name</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            {
                                                apmt.map((a) => (
                                                    <tr class="table-light" >
                                                        <td>{a["apmtid"]}</td>
                                                        <td>{a["treatment"]["treatid"]}</td>
                                                        <td>{a["treatment"]["tname"]}</td>
                                                        <td>{a["doctor"]["did"]}</td>
                                                        <td>{a["doctor"]["dname"]}</td>
                                                        <td>{convDate(a["datetime"])}</td>
                                                        <td>{convTime(a["datetime"])}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        <tfoot>

                                        </tfoot>
                                        {/* <br/> */}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  </>) : (<>
                    <span>
                      <h1 style={{color:"white"}}>No Appointments To Show</h1>
                      <br/>
                    </span>
                  </>)}
                </div>
            </div>
        </div>
    );
}