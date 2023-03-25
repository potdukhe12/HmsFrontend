import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let Treatments = (props) => {

    const navigate = useNavigate();
    const [treat , setTreat] = useState([]);
    // const [pat , setPat] = useState();
    useEffect(() => {
        // getPatient();
        getTreat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const val = props.u;
    // console.log(val);

    // const getPatient = async () => {
    // }
    
    const getTreat = async () => {
        
        // const temp = await axios.get(`http://192.168.1.101:8080/getPatient?uid=${val["uid"]}`);
        // setPat(temp.data["pid"]);
        // console.log("pat id" + temp.data["pid"]);
        // console.log(pat);
        const result = await axios.get(props.p + `/getAllTreatment`);
        console.log(result.data);
        // console.log("His = " + val)
        // console.log(pat)
        // console.log(result.data);
        setTreat(result.data);
        
    }


    return (
        <div>
            <h1><strong>Treatments</strong></h1>
            <div className="p-3">
                <div className="table-hover rounded shadow">
                    <table className="table table-light border">
                        <thead>
                            <tr>
                                {/* <th className="col-1" scope="col">Treatment ID</th> */}
                                <th className="col-3" scope="col">Treatment</th>
                                <th className="col-3" scope="col">Doctor</th>
                                <th className="col-3" scope="col">Hospital</th>
                                <th className="col-3" scope="col"></th>
                                {/* <th className="col-1" scope="col">Datetime</th> */}
                                {/* <th className="col-1" scope="col">Time</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                treat.map((t) => (
                                    <tr>
                                        {/* <td key={index}>{index + 1}</td> */}
                                        {/* <td>{t["treatid"]}</td> */}
                                        <td>{t["tname"]}</td>
                                        <td>{t["doctor"]["dname"]}</td>
                                        <td>{t["doctor"]["hospital"]["hname"]}</td>
                                        <td><button type="button" class="btn btn-primary" onClick={() => {navigate("../treatment",{state:{treat:t,pid:props.pid}})}}>View Treatment</button></td>
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

export let TreatmentsOfHospital = (props) => {

    const navigate = useNavigate();
    const [treat , setTreat] = useState([]);
    // const [pat , setPat] = useState();
    useEffect(() => {
        // getPatient();
        getTreat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const val = props.u;
    // console.log(val);

    // const getPatient = async () => {
    // }
    
    const getTreat = async () => {
        
        // const temp = await axios.get(`http://192.168.1.101:8080/getPatient?uid=${val["uid"]}`);
        // setPat(temp.data["pid"]);
        // console.log("pat id" + temp.data["pid"]);
        // console.log(pat);
        const result = await axios.get(props.p + `/getTreatmentByHid?hid=${props.hid}`);
        console.log(result.data);
        // console.log("His = " + val)
        // console.log(pat)
        // console.log(result.data);
        setTreat(result.data);
        
    }


    return (
        <div>
            <h1><strong>Search Treatments</strong></h1>
            <div className="p-3">
                <div className="table-hover rounded shadow">
                    <table className="table table-light border">
                        <thead>
                            <tr>
                                {/* <th className="col-1" scope="col">Treatment ID</th> */}
                                <th className="col-3" scope="col">Treatment</th>
                                <th className="col-3" scope="col">Doctor</th>
                                <th className="col-3" scope="col"></th>
                                {/* <th className="col-1" scope="col">Datetime</th> */}
                                {/* <th className="col-1" scope="col">Time</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                treat.map((t) => (
                                    <tr>
                                        {/* <td key={index}>{index + 1}</td> */}
                                        {/* <td>{t["treatid"]}</td> */}
                                        <td>{t["tname"]}</td>     
                                        <td>{t["doctor"]["dname"]}</td>
                                        <td><button type="button" class="btn btn-primary" onClick={() => {navigate("../treatment",{state:{treat:t,pid:props.pid}})}}>View Treatment</button></td>
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