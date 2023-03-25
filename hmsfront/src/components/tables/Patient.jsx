import hosimg from "../../img/doctors.avif"
import { useLocation, useNavigate } from "react-router-dom";
import { Navig } from "../common/Navig";

export let Patient = (props) => {

    const navigate = useNavigate();

    const location = useLocation();
    const pat = props.ptt;

    console.log("hello patient!");
    console.log(pat);

    var ageDifMs = Date.now() - Date.parse(pat["dob"]);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const convDate = (d) => {
        const dt1 = Date.parse(d);
        const dt2 = new Date(dt1);
        const date = dt2.getDate() + "/" + (dt2.getMonth()+1) + "/" + dt2.getFullYear();
        return date;
    }

    return (
        <div>
            <div class="container-fluid mt-5">
                <div class="row mb-3">
                    <div class="col-2">
                    </div>
                    <div class="col-8">
                        <div class="card border-primary">
                            <div class="card-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-6" style={{ backgroundImage: `url(${hosimg})`, height: "auto", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                                        </div>
                                        <div class="col-6" style={{ paddingLeft: "50px" }}>
                                             <h4 class="card-title" style={{ textAlign: "left" }}>Patient Name: {pat["pname"]}</h4><br/>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Patient ID:</strong> {pat["pid"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>D.O.B.: </strong>{convDate(pat["dob"])} &emsp; <strong>Age:</strong> {age}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Gender: </strong>{pat["gender"]}</p>
                                            <hr />
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>E-Mail: </strong>{pat["user"]["email"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Mob.No.: </strong>{pat["mobno"]}</p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-2">

                    </div>
                </div>
            </div>
        </div>
    );

}