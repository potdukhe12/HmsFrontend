import { useEffect, useState } from "react";
import axios from "axios";

export let Login = () => {

    const [doctor , setDoctor] = useState([]);
    useEffect(() => {
        // console.log("Connected!");
        getDoctor();
    },[]);

    const getUsers = async () => {
        const result = await axios.get("http://192.168.43.99:8080/getDoctor?did=4");
        console.log(result.data);
        setDoctor(result.data);
        // setUser(result);
    }

    return (
        <div>
            <div class="table-responsive">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Doctor ID</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Specialization</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctor.map((doc, index) => (
                                <tr class="">
                                    <td scope="row" key={index}>{index + 1}</td>
                                    <td>{doc.did}</td>
                                    <td>{doc.degree}</td>
                                    <td>{doc.specialization}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}