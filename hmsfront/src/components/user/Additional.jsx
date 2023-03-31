export let Additional = (props) => {
    if (props.rl === "1"){
        return (
            <div>
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
                            <label for="dob" class="form-label">Date of Birth</label>
                            <input type="date" class="form-control" name="dob" id="dob"/>
                        </div>
                    </div>
                    <div className="col">
                        <div class="mb-3">
                          <label for="mobno" class="form-label">Mobile Number</label>
                          <input type="text"
                            class="form-control" name="mobno" id="mobno" aria-describedby="mobhelp" placeholder="10 digit mobile number"/>
                          <small id="mobhelp" class="form-text text-muted">   </small>
                        </div>
                    </div>
                </div>
                <div className>
                        <label for="dob" class="form-label">Gender</label>
                        <div className="border rounded pt-2 pb-1 mb-3">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="male" value="1"/>
                            <label class="form-check-label" for="male">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="female" value="2"/>
                            <label class="form-check-label" for="female">Female</label>
                        </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="other" value="0"/>
                                <label class="form-check-label" for="other">Other</label>
                            </div>
                        </div>
                    </div>
                  <br />
                <button type="submit" className="btn btn-primary mb-3"><strong>Submit</strong></button>
                &nbsp;
                <button type="reset" className="btn btn-primary mb-3"><strong>Clear</strong></button>
            </div>
        );
    }

    else if (props.rl === "2"){
        return (
            <div>
                <div className="row">
                    <div class="mb-3">
                        {/* <label for="name" class="form-label">Name</label> */}
                        <input type="text"
                            class="form-control" name="name" id="name" aria-describedby="namehelp" placeholder="Enter full name"/>
                        <small id="namehelp" class="form-text text-muted">As on your documentation</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div class="mb-3">
                            <label for="dob" class="form-label">Date of Birth</label>
                            <input type="date" class="form-control" name="dob" id="dob"/>
                        </div>
                    </div>
                    <div className="col-8">
                        <label for="dob" class="form-label">Gender</label>
                        <div className="border rounded pt-2 mb-3">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="male" value="1"/>
                            <label class="form-check-label" for="male">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="female" value="2"/>
                            <label class="form-check-label" for="female">Female</label>
                        </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="other" value="0"/>
                                <label class="form-check-label" for="other">Other</label>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="row">
                    <div className="col">
                        <div class="mb-3">
                          {/* <label for="mobno" class="form-label">Mobile Number</label> */}
                          <input type="text"
                            class="form-control" name="mobno" id="mobno" aria-describedby="mobhelp" placeholder="10 digit mobile number"/>
                          <small id="mobhelp" class="form-text text-muted"> Provide primary contact no. only </small>
                        </div>
                    </div>
                    <div className="col">
                    <div class="mb-3">
                          {/* <label for="degree" class="form-label">Degree</label> */}
                          <input type="text"
                            class="form-control" name="degree" id="degree" aria-describedby="deghelp" placeholder="Enter your degree"/>
                          <small id="deghelp" class="form-text text-muted">For multiple entries, use comma to seperate</small>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col">
                        <div class="mb-3">
                          {/* <label for="specialization" class="form-label">Specialization</label> */}
                          <input type="text"
                            class="form-control" name="specialization" id="specialization" aria-describedby="spechelp" placeholder="Enter your specialized field"/>
                          <small id="spechelp" class="form-text text-muted">   </small>
                        </div>
                    </div>
                    <div className="col">
                    <div class="mb-3">
                          {/* <label for="experience" class="form-label">Experience</label> */}
                          <input type="text"
                            class="form-control" name="experience" id="experience" aria-describedby="exprhelp" placeholder="Enter your experience"/>
                          <small id="exprhelp" class="form-text text-muted">In years</small>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-3"><strong>Submit</strong></button>
                &nbsp;
                <button type="reset" className="btn btn-primary mb-3"><strong>Clear</strong></button>
            </div>
        );
    }
    else if (props.rl === "3"){
        return (
            <div>
                <div className="row">
                    <div class="mb-3">
                        {/* <label for="name" class="form-label">Name</label> */}
                        <input type="text"
                            class="form-control" name="name" id="name" aria-describedby="namehelp" placeholder="Enter full hospital name"/>
                        <small id="namehelp" class="form-text text-muted">As per the official documentation</small>
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3">
                      {/* <label for="teleno" class="form-label">Contact Number</label> */}
                      <input type="text"
                        class="form-control" name="teleno" id="teleno" aria-describedby="telehelp" placeholder="Enter Hospital Contact number"/>
                      <small id="mobhelp" class="form-text text-muted"> Provide primary contact no. only </small>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3"><strong>Submit</strong></button>
                    &nbsp;
                    <button type="reset" className="btn btn-primary mb-3"><strong>Clear</strong></button>
            </div>
        );
    }
    else if (props.rl === "4"){
        return (
            <div>
                <div className="row">
                    <div class="mb-3">
                        {/* <label for="name" class="form-label">Name</label> */}
                        <input type="text"
                            class="form-control" name="name" id="name" aria-describedby="namehelp" placeholder="Enter full name"/>
                        <small id="namehelp" class="form-text text-muted">Prefer initials in capital</small>
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3">
                      {/* <label for="teleno" class="form-label">Contact Number</label> */}
                      <input type="text"
                        class="form-control" name="teleno" id="teleno" aria-describedby="telehelp" placeholder="Enter mobno number"/>
                      <small id="mobhelp" class="form-text text-muted"> Provide primary contact no. only </small>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3"><strong>Submit</strong></button>
                    &nbsp;
                    <button type="reset" className="btn btn-primary mb-3"><strong>Clear</strong></button>
            </div>
        );
    }
    else{
        return (
            <div>
                <p className="text-danger">Please go back and select a <u style={{textUnderlineOffset: "5px"}}><strong>role</strong></u>!</p>
            </div>
        );
    }
}