
import { useLocation } from "react-router-dom";
import logo from "../../img/logonav.png"

export let Navig = (props) => {
    const location = useLocation();
    const uid = location.state;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg"
                style={{ position: "sticky", top: 0, zIndex: 20, width: "100%", height:"60px"}} >
                <div className="container">
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <a className="navbar-brand d-none d-lg-block text-grey" href="./">
                            {/* <h3>Healthcare Management System&emsp;&emsp;</h3> */}
                            <img src={logo} alt="logo" width={"200px"} className="img-rounded"/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="./"><h4>&ensp;Home</h4></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./about-us"><h4>&ensp;About us</h4></a>
                            </li>
                            {!uid ? (<>
                                <li className="nav-item">
                                    <a className="nav-link" href="./login"><h4>&ensp;Login</h4></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./signup"><h4>&ensp;Register</h4></a>
                                </li>
                            </>) : (<>
                                <li className="nav-item">
                                    <a className="nav-link" href="./login"><h4>&ensp;Logout</h4></a>
                                </li>
                            </>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}