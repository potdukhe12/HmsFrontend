import { useLocation } from "react-router-dom";
import { Navig } from "../common/Navig";

import timg from "../../img/treatment.jpg"
import { useNavigate } from "react-router-dom";


let count = 0;
export let Treatmentcontrol = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const treat = location.state || {};

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


                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-3">

                    </div>
                </div>
                    <button type="button" class="btn btn-primary mt-3" onClick={() => {navigate(-1)}}>Back</button>
            </div>
        </div>
    )
}