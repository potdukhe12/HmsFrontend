import bgimg from "../img/bg2.jpg";
import { Foot } from "./Foot";
import { Navig } from "./Navig";

export let Signup = () => {

    const [vis , setVis] = "invisible";

    return (
        <div>
            <Navig></Navig>
            <div style={{backgroundImage: `url(${bgimg})`, height: "80vh", backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>

            <br />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6 border border-primary rounded bg-white">
                            
                            <h1 className="text-primary" style={{margin: "10px"}}><strong>Sign Up</strong></h1>
                            <hr style={{color: "green"}}/>
                            
                            <form action="#" method="get" style={{margin: "10px"}}>

                            <div className="row">
                                <div class="mb-3">
                                {/* <label for="name" class="form-label">Name</label> */}
                                <input type="text"
                                    class="form-control" name="name" id="name" aria-describedby="namehelp" placeholder="Enter full name"/>
                                <small id="namehelp" class="form-text text-muted">Prefer initials in capital</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                      {/* <label for="uname" class="form-label">User ID</label> */}
                                      <input type="text"
                                        class="form-control" name="uname" id="uname" aria-describedby="unamehelp" placeholder="User ID"/>
                                      <small id="unamehelp" class="form-text text-muted">Choose a unique username</small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-1">
                                      {/* <label for="pwd" class="form-label">Password</label> */}
                                      <input type="password" class="form-control" name="pwd" id="pwd" placeholder="Enter password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="mb-3">
                                      {/* <label for="email" class="form-label">Email</label> */}
                                      <input type="email" class="form-control" name="email" id="email" aria-describedby="emailhelp" placeholder="eg. abc@mail.com"/>
                                      <small id="emailhelp" class="form-text text-muted">--email validation--</small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="mb-3">
                                        {/* <label for="role" class="form-label">Role</label> */}
                                        <select class="form-select" name="role" id="role">
                                            <option selected>Who are you?</option>
                                            <option value="1">Patient</option>
                                            <option value="2">Doctor</option>
                                            <option value="3">Hospital Management</option>
                                            <option value="4">Admin</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="mb-3">
                                  {/* <label for="address" class="form-label">Address</label> */}
                                  <textarea class="form-control" name="address" id="address" rows="3" placeholder="Enter your full address with city and pincode." style={{resize: "none"}}></textarea>
                                </div>
                            </div>

                            <button type="button" className="btn btn-primary mb-3" onClick={() => {setVis("visible")}}><strong>Next</strong></button>
                            &nbsp;
                            {/* <button type="submit" className="btn btn-primary mb-3"><strong>Sign Up</strong></button>
                            &nbsp; */}
                            <button type="reset" className="btn btn-primary mb-3"><strong>Clear</strong></button>

                            <div className={vis}>
                                <h1>Hello!</h1>
                            </div>
                            </form>
                        </div>
                        {/* <div className="col-3">
                        </div> */}
                    </div>
                </div>
            </div>
            <Foot></Foot>
        </div>
    );
}