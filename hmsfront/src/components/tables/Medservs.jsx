import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let Medservs = (props) => {

    const navigate = useNavigate();
    const [ms , setMs] = useState([]);


    useEffect(() => {
        getMs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const getMs = async () => {
        
        const result = await axios.get(props.p + `/getAllMedserv`);
        console.log(result.data);

        setMs(result.data);
        
    }



    return(
        <div>
            <h1><strong>Medical Services</strong></h1>
            <small>For more information about any medical service listed below, please contact to the respective hospital.</small>
            <div className="p-3">
                <div className="table-responsive">
                    <table className="table table-striped
                    table-hover	
                    table-borderless
                    table-primary
                    align-middle">
                        <thead className="table-dark">
                            <tr>
                            <th className="col-1" scope="col">Medserv ID</th>
                                <th className="col-3" scope="col">Name</th>
                                <th className="col-3" scope="col">Hospital</th>
                                <th className="col-3" scope="col">Email</th>
                                <th className="col-3" scope="col">Contact No.</th>
                            </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {
                                ms.map((s) => (
                                    <tr className="table-light">
                                        <td>{s["sid"]}</td>
                                        <td>{s["sname"]}</td>
                                        <td>{s["hospital"]["hname"]}</td>
                                        <td>{s["hospital"]["user"]["email"]}</td>
                                        <td>{s["hospital"]["teleno"]}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                            <tfoot>
                                
                            </tfoot>
                    </table>
                </div>
                
            </div>
        </div>
    );
}