import hosimg from "../../img/hospital.jpg"
import { useLocation, useNavigate } from "react-router-dom";
import { Navig } from "../common/Navig";
import { useState } from "react";
import { TreatmentsOfHospital } from "./Treatments";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { DoctorsOfHospital } from "./Doctors";
// import PropTypes from 'prop-types';

export let Hospital = (props) => {

    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const [visible, setVisible] = useState("collapse");

    const [page, setPage] = useState();

    const [isopen, setIsopen] = useState("close");


    // const navigate = useNavigate();
    const location = useLocation();
    const hos = location.state || {};
    console.log(hos);






    return (
        <div>
            <Navig></Navig>
            <div class="container-fluid mt-5">
                <div class="row mb-3">
                    <div class="col-3">

                    </div>
                    <div class="col-6">
                        <div class="card border-primary">
                            <div class="card-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-6" style={{ backgroundImage: `url(${hosimg})`, height: "auto", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                                        </div>
                                        <div class="col-6" style={{ paddingLeft: "50px" }}>
                                            <h4 class="card-title" style={{ textAlign: "left" }}>Hospital:</h4>
                                            <h5 class="card-title" style={{ textAlign: "left" }}>{hos["hospital"]["hname"]}</h5>
                                            <p class="card-text" style={{ textAlign: "left" }}>Hospital ID: {hos["hospital"]["hid"]}</p>
                                            <hr />
                                            {/* <p class="card-text" style={{textAlign: "left"}}><strong>Hospital Name: </strong>{treat["treat"]["doctor"]["dname"]}</p> */}
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Contact No.: </strong>{hos["hospital"]["teleno"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>E-Mail: </strong>{hos["hospital"]["user"]["email"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Address: </strong>{hos["hospital"]["user"]["address"]}</p>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex">
                                                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="end">
                                                    <DropdownToggle caret color="primary">View facilities</DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Hospital facilities</DropdownItem>
                                                        <DropdownItem onClick={() => { setVisible(""); setPage(<DoctorsOfHospital p={props.p} hid={hos["hospital"]["hid"]}></DoctorsOfHospital>) }}>Doctors</DropdownItem>
                                                        <DropdownItem onClick={() => { setVisible(""); setPage(<TreatmentsOfHospital p={props.p} pid={hos["pid"]} hid={hos["hospital"]["hid"]}></TreatmentsOfHospital>) }}>Treatments</DropdownItem>
                                                        {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
                                                        <DropdownItem divider />
                                                        <DropdownItem>Medical Services</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                <button type="button" class="btn btn-primary mb-3" onClick={() => { navigate(-1) }}>Back</button>
                <div className={visible}>
                    {page}
                </div>
            </div>
        </div>
    );

}