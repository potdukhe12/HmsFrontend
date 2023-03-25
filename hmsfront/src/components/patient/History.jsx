import axios from "axios";
import { useEffect, useState } from "react";

export let History = (props) => {

    const [history, setHistory] = useState([]);
    useEffect(() => {
        getHistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const val = props.u;

    const convDate = (d) => {
        const dt1 = Date.parse(d);
        const dt2 = new Date(dt1);
        const date = dt2.getDate() + "/" + (dt2.getMonth()+1) + "/" + dt2.getFullYear();
        return date;
    }

    const convTime = (d) => {
        const tm1 = Date.parse(d);
        const tm2 = new Date(tm1);
        const time = tm2.getHours() + ":" + tm2.getMinutes();
        return time;
    }

    const getHistory = async () => {

        const temp = await axios.get(props.p + `/getPatient?uid=${val["uid"]}`);
        const result = await axios.get(props.p + `/getAllHistory?pid=${temp.data["pid"]}`);
        setHistory(result.data);

    }


    return (
        <div>
            <h1><strong>Treatment History</strong></h1>
            <div className="p-3">
                <div className="table-hover rounded shadow">
                    <table className="table table-light border">
                        <thead>
                            <tr>
                                <th className="col-3" scope="col">Treatment</th>
                                <th className="col-3" scope="col">Doctor</th>
                                <th className="col-3" scope="col">Hospital</th>
                                <th className="col-1" scope="col">Date</th>
                                <th className="col-1" scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                history.map((his) => (
                                    <tr>
                                        <td>{his.appointment.treatment.tname}</td>
                                        <td>{his.appointment.doctor.dname}</td>
                                        <td>{his.appointment.hospital.hname}</td>
                                        <td>{ convDate(his.appointment.datetime) }</td>
                                        <td>{ convTime(his.appointment.datetime) }</td>
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