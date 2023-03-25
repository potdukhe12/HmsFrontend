import hosimg from "../../img/doctors.avif"
import { useLocation, useNavigate } from "react-router-dom";
import { Navig } from "../common/Navig";

export let Doctor = (props) => {

    const navigate = useNavigate();

    const location = useLocation();
    const doc = location.state || {};
    console.log("hello world!");
    console.log(doc);
    console.log(doc["doc"]["user"]);

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
                                            <h4 class="card-title" style={{ textAlign: "left" }}>Doctor:</h4>
                                            <h5 class="card-title" style={{ textAlign: "left" }}>{doc["doc"]["dname"]}</h5>
                                            <p class="card-text" style={{ textAlign: "left" }}>Doctor ID: {doc["doc"]["did"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Degree: </strong>{doc["doc"]["degree"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Specialization: </strong>{doc["doc"]["specialization"]}</p>
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>Hospital: </strong>{doc["doc"]["hospital"]["hname"]}</p>
                                            <hr />
                                            <p class="card-text" style={{ textAlign: "left" }}><strong>E-Mail: </strong>{doc["doc"]["user"]["email"]}</p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={() => { navigate(-1) }}>Back</button>
            </div>
        </div>
    );

}