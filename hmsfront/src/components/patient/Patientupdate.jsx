import { useState } from "react";
import { BsSave } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export let Patientupdate = (props) => {

    const navigate = useNavigate();

    const userdata = props.pdata;
    const useruser = userdata["user"]
    console.log("Trying!");
    console.log(userdata);
    console.log("user");
    console.log(useruser);

    const [pemail, setPemail] = useState(userdata["user"]["email"]);
    const [pmobno, setPmobno] = useState(userdata["mobno"]);
    const [paddress, setPaddress] = useState(userdata["user"]["address"]);



    return (
        <div className="p-3">
            <h4 className="card-title"><strong>Profile</strong></h4>
            <div className="text-left">



                <h6 style={{ textAlign: "left" }}>Contact Details:</h6>
                <hr className="mt-1" />
                <div style={{ textAlign: "left" }}>
                    <div className="row">
                        <div className="col">
                            <p>Mobile No.:</p>
                            <div>
                                <div className="mb-3">
                                    {/* <label for="mobno" className="form-label">Mobile Number</label> */}
                                    <input type="text" className="form-control" name="mobno" id="mobno" aria-describedby="mobhelp" placeholder="10 digit mobile number" onChange={(v) => { setPmobno(v.target.value); userdata["mobno"] = pmobno}} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p>E-Mail:</p>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailhelp" placeholder="eg. abc@mail.com" onChange={(v) => { setPemail(v.target.value); useruser["email"] = pemail}} />
                        </div>
                    </div>
                </div>
                <br />
                <h6 style={{ textAlign: "left" }}>Address Details:</h6>
                <hr className="mt-1" />
                <div style={{ textAlign: "left" }}>
                    <div className="row">
                        <div className="col">
                            <textarea className="form-control" name="address" id="address" rows="2" placeholder="Enter your full address with city and pincode." style={{ resize: "none" }} onChange={(v) => { setPaddress(v.target.value); useruser["address"] = paddress }}></textarea>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-dark mt-4 p-2" onClick={async () => {

                    await axios.post(props.p + `/saveUser`, useruser).then(console.log("user updation successful!")).catch(console.log("user failure"));
                    await axios.put(props.p + `/updatePatient`, userdata).then(alert("please re-login")).then(navigate(-1)).catch(console.log("Sorry!"));
                }}><BsSave></BsSave>&ensp;Save</button>


            </div>
        </div>
    );
}