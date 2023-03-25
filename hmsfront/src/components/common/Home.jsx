import bgimg from "../../img/ayakshm-logo.png"
import Footer from "./Footer";
import { Navig } from "./Navig";

export let Home = () => {

    return (
        <div>
            <div className="container-fluid">
                <div style={{ background: `url(${bgimg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition: "center", }}>
                    <Navig></Navig>
                    <div>
                        <div class="container">
                            <div class="row">
                                <div class="col-4">

                                </div>
                                <div class="col-8">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-2">

                                            </div>
                                            <div class="col-4">
                                                <a name="" id="" class="btn btn-outline-danger btn-lg" href="login" role="button" style={{ marginTop: "500px", width: "250px", borderRadius: "100px" }}><h1><strong>Login</strong></h1></a>

                                            </div>
                                            <div class="col-4">
                                                <a name="" id="" class="btn btn-outline-danger btn-lg" href="signup" role="button" style={{ marginTop: "500px", width: "250px", borderRadius: "100px" }}><h1><strong>Sign Up</strong></h1></a>
                                            </div>
                                            <div class="col-2">
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}