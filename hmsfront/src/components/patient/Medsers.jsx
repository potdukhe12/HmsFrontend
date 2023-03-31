import axios from "axios";
import { useEffect, useState } from "react";

export let Medservs = (props) => {

    const [ms , setMs] = useState([]);
    // const [pat , setPat] = useState();
    useEffect(() => {
        // getPatient();
        getMs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const val = props.u;
    // console.log(val);

    // const getPatient = async () => {
    // }
    
    const getMs = async () => {
        
        // const temp = await axios.get(`http://192.168.1.101:8080/getPatient?uid=${val["uid"]}`);
        // setPat(temp.data["pid"]);
        // console.log("pat id" + temp.data["pid"]);
        // console.log(pat);
        const result = await axios.get(`http://192.168.1.96:8080/getAllTreatment`);
        console.log(result.data);
        // console.log("His = " + val)
        // console.log(pat)
        // console.log(result.data);
        setMs(result.data);
        
    }


    return (
        <div>
            <h1><strong>Search Medical Services</strong></h1>
            <div className="p-3">
                <div className="table-hover rounded shadow">
                    <table className="table table-light border">
                        <thead>
                            <tr>
                                <th className="col-1" scope="col">Hospital ID</th>
                                {/* <th className="col-3" scope="col">Treatment</th> */}
                                <th className="col-3" scope="col">Hospital</th>
                                <th className="col-3" scope="col"></th>
                                {/* <th className="col-1" scope="col">Datetime</th> */}
                                {/* <th className="col-1" scope="col">Time</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hos.map((his, index) => (
                                    <tr>
                                        {/* <td key={index}>{index + 1}</td> */}
                                        <td>{hos[index]["hid"]}</td>
                                        <td>{hos[index]["hname"]}</td>
                                        {/* <td>{hos[index]["hospital"]["hname"]}</td> */}
                                        <td><button type="button" class="btn btn-primary">View Hospital</button></td>
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