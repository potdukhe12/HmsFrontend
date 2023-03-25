import bgimg from "../../img/bg7.jpg";
import userdp from "../../img/admin.jpg"
import { Navig } from "../common/Navig";
import { BsFillPencilFill, BsSave, BsEnvelope, BsPhone, BsXSquare } from "react-icons/bs";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import axios from "axios";

import { useState } from "react";
import { Adminupdate } from "./Adminupdate";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export let Adminhome = (props) => {
    // Admin Profile useStates

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const location = useLocation();
    const admin = location.state || {};
    // console.log("logging");
    // console.log(admin["uid"]);
    // console.log(admin["aid"]);
    const [prof, setProf] = useState("col-7");
    const [updt, setUpdt] = useState("collapse");
    const [but, setBut] = useState("button");
    const [icon, setIcon] = useState(<BsFillPencilFill></BsFillPencilFill>);
    const st1 = "btn btn-outline-dark btn-lg mt-3 mb-3";
    const st2 = "btn btn-dark btn-lg mt-3 mb-3";
    const [buthold, setButhold] = useState(st1)
    const [page, setPage] = useState();
    const [hosp, setHosp] = useState({});

    const [vis, setVis] = useState("collapse");

    const navigate = useNavigate();
    const [hos, setHos] = useState([]);
    console.log(hos);

    const [disval, setDisval] = useState("");
    const [butval, setButval] = useState("");


    useEffect(() => {
        getHos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getHos = async () => {

        const result = await axios.get(props.p + `/getAllHospital`);

        setHos(result.data);

    }


    return (
        <div>
            <Navig></Navig>
            <div style={{ backgroundImage: `url(${bgimg})`, height: "78vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-6" style={{padding:"0 50px 0 0"}}>
                            <form action="" method="get">
                                <div className="card mt-5 bg-light-gradient shadow">

                                    <div className="container-fluid">
                                        <div className="row shadow">
                                            <div className="col-5">
                                                    <img src={userdp} className="img-fluid rounded-top bg-light" alt="userdp" />
                                                    <h3 className="text-dark">{admin["aid"]["aname"]}</h3>
                                                    <h5 className="text-muted">Admin</h5>
                                                    {/* <br /> */}
                                                    <button type="button" className="btn btn-outline-dark pb-2 mb-4" onClick={() => {
                                                        if (prof === "col-7") {
                                                            setIcon(<BsXSquare></BsXSquare>); setProf("collapse"); setUpdt("col-7");


                                                        }
                                                        else {
                                                            setIcon(<BsFillPencilFill></BsFillPencilFill>); setProf("col-7"); setUpdt("collapse");
                                                        }
                                                    }}>{icon}</button>

                                            </div>
                                            <div className={prof}>
                                                <div className="card-body">
                                                    <h4 className="card-title" style={{padding:"10px 0 5px 0"}}><strong>Profile</strong></h4>
                                                    <div className="text-left">
                                                        <h6 style={{ textAlign: "left" }}>Contact Details:</h6>
                                                        <hr className="mt-1" />
                                                        <div style={{ textAlign: "left" }}>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p><BsPhone></BsPhone>&ensp;Mob. No.:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{admin["aid"]["mobno"]}</em></strong></p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p><BsEnvelope></BsEnvelope>&ensp;E-Mail:</p>
                                                                </div>
                                                                <div className="col">
                                                                    <p><strong><em>{admin["aid"]["user"]["email"]}</em></strong></p>
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
                                                                <div className="col">
                                                                    <p><strong><em>{admin["aid"]["user"]["address"]}</em></strong></p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={updt}>
                                                <Adminupdate p={props.p} adata={admin["aid"]}></Adminupdate>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div className="col-4">
                            <div className="rounded bg-white mt-5 shadow" style={{ minHeight: "410px"}}>
                                <h1 style={{padding:"10px 0 0 0"}}>Hospitals</h1>
                                <hr />
                                <div className="d-flex m-3">
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="end">
                                        <DropdownToggle caret color="primary">View Hospitals</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Hospitals</DropdownItem>
                                            <DropdownItem divider />

                                            {
                                                hos.map((h) => (
                                                    <DropdownItem onClick={() => {
                                                        setHosp(h);
                                                        setVis("m-3");
                                                        h["status"] === true ? setDisval("btn btn-warning container") : setDisval("btn btn-success container");
                                                        h["status"] === true ? setButval("Disable") : setButval("Enable");

                                                    }}>{h["hname"]}</DropdownItem>
                                                ))
                                            }

                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div className={vis}>
                                    <hr />
                                    <div class="card border-dark m-3">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col" style={{ paddingLeft: "50px" }}>
                                                        <h4 class="card-title" style={{ textAlign: "left" }}>Hospital:</h4>
                                                        <h5 class="card-title" style={{ textAlign: "left" }}>{hosp["hname"]}</h5>
                                                        <p class="card-text" style={{ textAlign: "left" }}>Hospital ID: {hosp["hid"]}</p>
                                                        <hr />
                                                        <p class="card-text" style={{ textAlign: "left" }}><strong>Contact No.: </strong>{hosp["teleno"]}</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button type="button" class="btn btn-primary container" onClick={() => { navigate("../hospital-control", { state: { hospital: hosp } }) }}>View</button>
                                        </div>
                                        <div className="col">
                                            <button type="button" class={disval} onClick={async () => {
                                                await axios.get(props.p + `/updateHosStatus?hid=${hosp["hid"]}`).then(alert("Status updated successfully!")).then((navigate(0)));
                                            }}>{butval}</button>
                                        </div>
                                        <div className="col">
                                            <button type="button" class="btn btn-danger container" onClick={async () => {
                                                await axios.delete(props.p + `/deleteUser?uid=${hosp["user"]["uid"]}`).then(alert("Hospital has been deleted successfully!")).then(navigate(0));
                                            }}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">

                            </div>
                        </div>
                    </div>
                    <br />


                    <div className="row pt-3">
                        <div>
                            {page}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}