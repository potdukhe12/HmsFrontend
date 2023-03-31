import bgimg from "../../img/ayakshm-logo2.png"
import Footer from "./Footer";
import { Navig } from "./Navig";

export let Home = () => {

return (
    <div>
        <div className="container-fluid">
            <div>
                <Navig isHome={true}></Navig>
            <div>
                <div class="container">
                    <div>
                        <img src={bgimg} style={{width:"80%"}} />
                    </div>
                    <div class="row">
                        <div class="col-mb-4">

                        </div>
                        <div class="col-mb-8">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-2">

                                    </div>
                                    <div class="col-md-8">
                                    &emsp;&emsp;<a name="" id="" class="btn btn-outline-danger btn-lg mb-3" href="login" role="button" style={{width: "180px", borderRadius: "50px" }}><h2><strong>Login</strong></h2></a>
                                      {/* </div>
                                      <div class="col-md-4"> */}
                                        &emsp;&emsp;<a name="" id="" class="btn btn-outline-danger btn-lg mb-3" href="signup" role="button" style={{width: "180px", borderRadius: "50px" }}><h2><strong>Sign Up</strong></h2></a>
                                      </div>
                                    <div class="col-md-2">
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{padding:"40px"}}>

            </div>
            <Footer></Footer>
            </div>
        </div>
    </div>
    );
}