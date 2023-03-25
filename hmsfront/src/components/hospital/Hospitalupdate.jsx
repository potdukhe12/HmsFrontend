import { useState } from "react";
import { BsSave } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export let Hospitalupdate = (props) => {

    const navigate = useNavigate();

    const userdata = props.hdata;
    console.log(userdata);
    const useruser = userdata["user"]
    console.log("Trying!");
    console.log("user");
    console.log(useruser);

    const [hemail, setHemail] = useState(userdata["user"]["email"]);
    const [hmobno, setHmobno] = useState(userdata["mobno"]);
    const [haddress, setHaddress] = useState(userdata["user"]["address"]);


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
                                    <input type="text" className="form-control" name="mobno" id="mobno" aria-describedby="mobhelp" placeholder="10 digit mobile number" onChange={(v) => { setHmobno(v.target.value); userdata["teleno"] = hmobno}} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p>E-Mail:</p>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailhelp" placeholder="eg. abc@mail.com" onChange={(v) => { setHemail(v.target.value); useruser["email"] = hemail}} />
                        </div>
                    </div>
                </div>
                <br />
                <h6 style={{ textAlign: "left" }}>Address Details:</h6>
                <hr className="mt-1" />
                <div style={{ textAlign: "left" }}>
                    <div className="row">
                        <div className="col">
                            <textarea className="form-control" name="address" id="address" rows="2" placeholder="Enter your full address with city and pincode." style={{ resize: "none" }} onChange={(v) => { setHaddress(v.target.value); useruser["address"] = haddress }}></textarea>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-dark mt-4 p-2" onClick={async () => {

                    await axios.post(props.p + `/saveUser`, useruser).then(console.log("user updation successful!")).catch(console.log("user failure"));
                    await axios.put(props.p + `/updateHospital`, userdata).then(alert("please re-login")).then(navigate(-1)).catch(console.log("Sorry!"));
                }}><BsSave></BsSave>&ensp;Save</button>
            </div>
        </div>
    );
}