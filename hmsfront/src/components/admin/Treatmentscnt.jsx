import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let Treatmentscnt = (props) => {

    const navigate = useNavigate();
    const [treat, setTreat] = useState([]);
    useEffect(() => {
        getTreat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTreat = async () => {

        const result = await axios.get(props.p + `/getAllTreatment`);
        console.log(result.data);
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
                                <th className="col-1" scope="col">Treatment ID</th>
                                <th className="col-3" scope="col">Treatment</th>
                                <th className="col-3" scope="col">Doctor</th>
                                <th className="col-3" scope="col">Hospital</th>
                                <th className="col-3" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                treat.map((t) => (
                                    <tr>
                                        <td>{t["treatid"]}</td>
                                        <td>{t["tname"]}</td>
                                        <td>{t["doctor"]["dname"]}</td>
                                        <td>{t["doctor"]["hospital"]["hname"]}</td>
                                        <td><button type="button" class="btn btn-primary" onClick={() => { navigate("../treat", { state: { treat: t, pid: props.pid } }) }}>View Treatment</button></td>
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

export let TreatmentsOfHospitalcnt = (props) => {

    const navigate = useNavigate();
    const [treat, setTreat] = useState([]);
    useEffect(() => {
        getTreat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTreat = async () => {

        const result = await axios.get(props.p + `/getTreatmentByHid?hid=${props.hid}`);
        console.log(result.data);
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
                                <th className="col-1" scope="col">Treatment ID</th>
                                <th className="col-3" scope="col">Treatment</th>
                                <th className="col-3" scope="col">Doctor</th>
                                <th className="col-3" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                treat.map((t) => (
                                    <tr>
                                        <td>{t["treatid"]}</td>
                                        <td>{t["tname"]}</td>
                                        <td>{t["doctor"]["dname"]}</td>
                                        <td><button type="button" class="btn btn-primary" onClick={() => { navigate("../treat", { state: { treat: t, pid: props.pid } }) }}>View Treatment</button></td>
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