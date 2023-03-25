import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export let Doctors = (props) => {

    const navigate = useNavigate();
    const [doc , setDoc] = useState([]);
    let result = null;
    
    useEffect(() => {

        getDoc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDoc = async () => {
        
        if(props.spec === "all")
        {
            result = await axios.get(props.p + `/getAllDoctor`);
        }
        else
        {
            result = await axios.get(props.p + `/getDoctorBySpec?specialization=${props.spec}`);
        }
        console.log(result.data);

        setDoc(result.data);
        
    }


    return (
        <div>
            <h1><strong>Doctors</strong></h1>
            <div className="p-3">
                <div className="table-hover rounded shadow">
                    <table className="table table-light border">
                        <thead>
                            <tr>
                                {/* <th className="col-1" scope="col">Doctor ID</th> */}
                                <th className="col-3" scope="col">Doctor Name</th>
                                <th className="col-3" scope="col">Hospital Name</th>
                                <th className="col-3" scope="col">Specialization</th>
                                <th className="col-3" scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                doc.map((d) => (
                                    <tr>
                                        {/* <td>{d["did"]}</td> */}
                                        <th>{d["dname"]}</th>
                                        <td>{d["hospital"]["hname"]}</td>
                                        <td>{d["specialization"]}</td>
                                        <td><button type="button" class="btn btn-primary" onClick={() => {navigate("../doctor",{state:{doc:d,pid:props.pid}})}}>View Doctor</button></td>
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




export let DoctorsOfHospital = (props) => {

    const navigate = useNavigate();
    const [doc , setDoc] = useState([]);

    useEffect(() => {
        getDoc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const getDoc = async () => {
        

        const result = await axios.get(props.p + `/getDoctorByHid?hid=${props.hid}`);
        console.log(result.data);

        setDoc(result.data);
        
    }


    return (
        <div>
            <h1><strong>Search Doctors</strong></h1>
            <div className="p-3">
                <div className="table-hover rounded shadow">
                    <table className="table table-light border">
                        <thead>
                            <tr>
                                <th className="col-1" scope="col">Doctor ID</th>
                                <th className="col-3" scope="col">Doctor</th>
                                <th className="col-3" scope="col">Degree</th>
                                <th className="col-3" scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                doc.map((d) => (
                                    <tr>

                                        <td>{d["did"]}</td>
                                        <td>{d["dname"]}</td>     
                                        <td>{d["degree"]}</td>
                                        <td><button type="button" class="btn btn-primary" onClick={() => {navigate("../doctor",{state:{doc:d}})}}>View Doctor</button></td>

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