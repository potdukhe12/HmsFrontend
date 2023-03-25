import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let Hospitals = (props) => {

    const navigate = useNavigate();
    const [hos , setHos] = useState([]);


    useEffect(() => {
        getHos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const getHos = async () => {
        
        const result = await axios.get(props.p + `/getAllHospital`);
        console.log(result.data);

        setHos(result.data);
        
    }



    return(
        <div>
            <h1><strong>Hospitals</strong></h1>
            <div className="p-3">
                <div className="table-hover rounded shadow">
                    <table className="table table-light border">
                        <thead>
                            <tr>
                                <th className="col-1" scope="col" >Hospital ID</th>
                                {/* <th className="col-3" scope="col">Treatment</th> */}
                                <th className="col-3" scope="col">Hospital</th>
                                <th className="col-3" scope="col"></th>
                                {/* <th className="col-1" scope="col">Datetime</th> */}
                                {/* <th className="col-1" scope="col">Time</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hos.map((h) => (
                                    <tr>
                                        {/* <td key={index}>{index + 1}</td> */}
                                        <td>{h["hid"]}</td>
                                        <td>{h["hname"]}</td>
                                        {/* <td>{hos[index]["doctor"]["dname"]}</td> */}
                                        <td><button type="button" class="btn btn-primary" onClick={() => {navigate("../hospital" , {state: {hospital: h, pid:props.pid}})}}>View Hospital</button></td>
                                        {/* <td>{treat.appointment.doctor.dname}</td>
                                        <td>{treat.appointment.datetime}</td> */}
                                        {/* <td>10:15 AM</td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}