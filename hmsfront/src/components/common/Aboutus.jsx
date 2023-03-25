import React, { useRef } from 'react';
import { Navig } from "../common/Navig";
import bgimg from "../../img/AboutUs.png";
import Footer from "../common/Footer";

import saurabh from "../../img/saurabh.jpg";
import atharv from "../../img/atharv.jpeg";
import ajay from "../../img/ajay.jpeg";
import gaurav from "../../img/gaurav.jpeg";
import img1 from "../../img/img1.jpg";

export let Aboutus = () => {


    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const line4Ref = useRef(null);
    const line5Ref = useRef(null);
  
    const scrollToRef = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
    <div>
        <div style={{backgroundImage: `url(${bgimg})`, height: "45vh", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <Navig></Navig>
        </div>
        
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item" onClick={() => scrollToRef(line1Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;&ensp;Our Idea</h4>
                            </li>
                            <li className="nav-item" onClick={() => scrollToRef(line2Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;&ensp;Team Members</h4>
                            </li>
                            <li className="nav-item" onClick={() => scrollToRef(line3Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;&ensp;Our Guides</h4>
                            </li>
                            <li className="nav-item" onClick={() => scrollToRef(line4Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;&ensp;Future Scope</h4>
                            </li>
                            <li className="nav-item" onClick={() => scrollToRef(line5Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;&ensp;Contact us</h4>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
        {/* Our Idea */}
        <div ref={line1Ref}>
            <div className="container-fluid">
                <div className="row shadow" style={{padding:"0 130px 0 130px"}}>
                    <h1 className='display-2' style={{padding:"40px 0 0 0"}}>Our Idea</h1>
                    <div className="col-5" style={{padding:"0px 20px 40px 0px"}}>
                    <img src={img1} className="img-fluid rounded-top bg-light" alt="userdp" style={{height:"300px"}}/>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-6" style={{padding:"30px"}}>
                        <h5 style={{fontFamily:"sans-serif"}}>
                        <br/>
                        The main objective of this project is building a website which can increase the
                        interaction between patients, doctors and hospitals.
                        Supposing the patients have the knowledge of computers and the internet,  
                        they can easily find hospital facilities and treatments. They also can find medicines, 
                        medical equipment, blood banks etc. Also finding the basic fees of doctors and comparing them is easy.  
                        On the other side, doctors and hospitals can also manage their requirements according to patients.
                        Data about the available facilities can be visible to the patients.

                        </h5>
                    </div>
                </div>
            </div>
        </div>
        {/* Team Members */}
        <div ref={line2Ref}>
            <div className="container-fluid">
                <div className="row shadow" style={{padding:"0 130px 0 130px"}}>
                <h1 className='display-2' style={{padding:"50px 0 0 0"}}>Team Members</h1>
                    <div className="col-3" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"30px",borderRadius:"30px"}}>
                            <img src={saurabh} className="img-fluid rounded-top bg-light" alt="userdp" sizes='100px'/>
                            <h3 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>Saurabh Ashok Potdukhe</h3>
                            <h6 className="text-muted">potdukhe12@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-3" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"25px",borderRadius:"30px"}}>
                            <img src={atharv} className="img-fluid rounded-top bg-light" alt="userdp" sizes='100px'/>
                            <h3 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>Atharv Sanjeev Suryavanshi</h3>
                            <h6 className="text-muted">atharvssnew1234@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-3" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"25px",borderRadius:"30px"}}>
                            <img src={ajay} className="img-fluid rounded-top bg-light" alt="userdp" sizes='100px'/>
                            <h3 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>Ajay Shivajirao Bhosle</h3>
                            <h6 className="text-muted">ajay.bhosle15@vit.edu</h6>
                        </div>
                    </div>
                    <div className="col-3" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"30px",borderRadius:"30px"}}>
                            <img src={gaurav} className="img-fluid rounded-top bg-light" alt="userdp" sizes='100px'/>
                            <h3 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>Gaurav Shankar Urkude</h3>
                            <h6 className="text-muted">gsurkude10@gmail.com</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Our Guides */}
        <div ref={line3Ref}>
        <div className="container-fluid">
            <div className="row" style={{padding:"0 90px 0 90px"}}>
                <h1 className='display-2' style={{padding:"50px 0 0 0"}}>Our Guides</h1>
                    <div className="col-2" style={{padding:"30px"}}>
                        
                    </div>
                    <div className="col-4" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"25px",borderRadius:"40px"}}>
                            <h3 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>Mr. Prathamesh Naik</h3>
                            <h6 className="text-muted">prathamsnaik@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-4" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"25px",borderRadius:"40px"}}>
                            <h3 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>Mrs. Dhanashree Rangole</h3>
                            <h6 className="text-muted">dhanashreerangole@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-2" style={{padding:"30px"}}>
                        
                    </div>
                </div>
                <div className="row shadow" style={{padding:"0 200px 0 200px"}}>
                <h6 className='display-2' style={{padding:"50px 0 25px 0",fontSize:"40px"}}>Special thanks to...</h6>
                    <p style={{padding:"0 0 50px 0"}}>
                        A project of such comprehensive coverage cannot be prepared without help from numerous sources.
                        We gratefully acknowledge the generous help of <b>Mrs. Bakul Joshi</b>, <b>Mrs. Dhanashree Rangole</b> for their
                        inspiration, guidance & assistance at all stages of this project work. We owe them a great debt
                        of gratitude as without their support this work would not have been completed, indeed.
                        We feel privileged to have <b>Mr. Shrinivas Jadhav</b> as <b>Vice-President</b> of <b>Know-IT C-DAC, Pune</b>. 
                        His enthusiasm & motivation were invaluable for us. We are equally
                        indebted to all the <b>staff members of PG-DAC Department</b> <b>Know-IT C-DAC, PUNE</b>.
                        Last but not the least we are very thankful to our <b><i>PARENTS</i></b> for their financial and moral
                        support. Finally, we would also like to gratify to our frients and family for their constant support and
                        motivation.
                    </p>
                </div>
            </div>
        </div>
        {/* Future Scope */}
        <div ref={line4Ref}>
            <div className="row" style={{padding:"0 150px 0 150px"}}>
                <h1 className='display-2' style={{padding:"50px 0 0 0"}}>Future Scope</h1>
                    <div className="col-4" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"30px",borderRadius:"40px"}}>
                            <h5 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>
                                We have all heard the term “big data” and what it can do for healthcare. 
                                As technology advances, big data and its applications in everyday life will also be used.
                            </h5>
                        </div>
                    </div>
                    <div className="col-4" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"30px",borderRadius:"40px"}}>
                            <h5 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>
                                Hospitals are beginning to take advantage of technological advancements 
                                from a single-server system to a cloud-based system.
                            </h5>
                        </div>
                    </div>
                    <div className="col-4" style={{padding:"30px"}}>
                        <div className="card mt-1" style={{padding:"30px",borderRadius:"40px"}}>
                            <h5 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>
                                With the Internet of Things, hospitals will manage their patients more conveniently 
                                and effectively, with increased safety and better customer service.
                            </h5>
                        </div>
                    </div>
                </div>
            <div className="row shadow" style={{padding:"0 200px 0 200px"}}>
            <h6 className='display-2' style={{padding:"50px 0 25px 0",fontSize:"40px"}}>What will be the Future of Medical Practice...</h6>
                <p>
                    The Healthcare Management System will soon be able to streamline the administrative process of hospitals. 
                    Instead of having paper files, these software programs will use advanced technology to secure and 
                    store all patient records in one location. This will streamline the process of running a hospital. 
                    In addition, it will allow the staff to easily share information with doctors and other medical professionals 
                    who may be at a remote location.
                    <br/><br/><br/><br/>
                </p>
            </div>
        </div>
        
        {/* Contact Us */}
        <div ref={line5Ref}>

        </div>
        <Footer></Footer>
    </div>
    );
}