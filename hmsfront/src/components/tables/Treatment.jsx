import { useLocation } from "react-router-dom";
import { Navig } from "../common/Navig";

import axios from "axios";

import timg from "../../img/treatment.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Addappointment } from "../workings/Addappointment";
// import { Addappointment } from "../workings/Addappointment";

let count = 0;
export let Treatment = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const treat = location.state || {};

    const [datetime, setDateTime] = useState();
    // console.log(treat);
    // console.log(treat["treat"]["tname"]);
    const [togval, setTogval] = useState("collapse");
    const [togdiv, setTogdiv] = useState("d-grid gap-2");
    const [dataset, setDataset] = useState();
    const [page, setPage] = useState();

    const toggleSection = () => {
        if (count % 2 === 0) {
            setTogval("");
            count++;
        }
        else {
            setTogval("row collapse");
            count--;
        }
    }

    return (
        <div>
            <Navig></Navig>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-3">

                    </div>
                    <div class="col-6">
                        <div class="card border-primary">
                            <div class="card-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-4" style={{ backgroundImage: `url(${timg})`, height: "auto", backgroundRepeat: "no-repeat", backgroundSize: "contain", textAlign: "center" }}>
                                        </div>
                                        <div class="col-8">
                                            <h4 class="card-title" style={{ textAlign: "left" }}>Treatment: {treat["treat"]["tname"]}</h4>
                                            <p class="card-text" style={{ textAlign: "left" }}>Treatment ID: {treat["treat"]["treatid"]}</p>
                                            <hr />
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Hospital Name: </strong>{treat["treat"]["doctor"]["dname"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Contact No.: </strong>{treat["treat"]["doctor"]["mobno"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>E-Mail: </strong>{treat["treat"]["doctor"]["user"]["email"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Address: </strong>{treat["treat"]["doctor"]["user"]["address"]}</p>
                                        </div>
                                    </div>
                                    <form className={togval}>
                                        <div className="row">
                                            <div class=" col mt-3" style={{ textAlign: "left" }}>
                                                <label for="apmtdttm" class="form-label"><strong>Select Appointment Date:</strong></label>
                                                <input type="datetime-local" class="form-control" name="apmtdttm" id="apmtdttm" onChange={(v) => { setDateTime(v.target.value) }} />
                                            </div>
                                        </div>
                                        <div className=""><button type="button" class="btn btn-primary mt-3" onClick={async () => {
                                            setDataset({
                                                status: false,
                                                datetime: datetime + ":00.000+05:30",
                                                treatment: {treatid: treat["treat"]["treatid"]},
                                                doctor: {did: treat["treat"]["doctor"]["did"]},
                                                patient: {pid: treat["pid"]},
                                                hospital: {hid: treat["treat"]["doctor"]["hospital"]["hid"]}
                                            });

                                            console.log("inside this");
                                            console.log(dataset);
                                            await axios.post(props.p + "/saveApmt", dataset).then((response) => {
                                                if (response.data) {
                                                    console.log(response.data);
                                                    alert("The appointment is successfully booked!")
                                                }
                                                else {
                                                    console.log("something went wrong!");
                                                }
                                            }).catch((error) => {
                                                console.log("something went wrong!");
                                                
                                                console.log(error);
                                            });
                                        }}>Submit</button></div>
                                    </form>
                                    <div><div class={togdiv}>
                                        <hr />
                                        <button type="button" name="bkapmt" id="bkapmt" class="btn btn-primary" onClick={() => { toggleSection(); setTogdiv("d-grid gap-2 collapse") }}>Take Appointment</button>
                                    </div></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                <button type="button" class="btn btn-primary mt-3" onClick={() => {navigate(-1)}}>Back</button>
                <div>
                    {page}
                </div>
            </div>
        </div>
    )
}