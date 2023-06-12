import React, { useRef } from 'react';
import { Navig } from "../common/Navig";
import bgimg from "../../img/AboutUs.png";
import bgimg2 from "../../img/bg3.jpg";
import bgimg3 from "../../img/bg8.jpg";
import Footer from "../common/Footer";

import saurabh from "../../img/saurabh.jpg";
import img1 from "../../img/img1.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BsAlignStart } from 'react-icons/bs';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

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
            <Navig isAboutus={true}></Navig>
        </div>
        
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item" onClick={() => scrollToRef(line1Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;Our Idea&ensp;&ensp;</h4>
                            </li>
                            <li className="nav-item" onClick={() => scrollToRef(line2Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;Project by&ensp;&ensp;</h4>
                            </li>
                            <li className="nav-item" onClick={() => scrollToRef(line4Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;Future Scope&ensp;&ensp;</h4>
                            </li>
                            <li className="nav-item" onClick={() => scrollToRef(line5Ref)} 
                                style={{ color: 'grey' }}
                                onMouseOver={(e) => {e.target.style.color = 'black'}}
                                onMouseOut={(e) => e.target.style.color = 'grey'}>
                                    <h4>&ensp;&ensp;Contact us&ensp;&ensp;</h4>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
        {/* Our Idea */}
        <div ref={line1Ref}>
            <div className="container-fluid">
                <div className="row shadow" style={{padding:"0 10% 0 10%"}}>
                    <h1 className='display-2' style={{padding:"8% 0 3% 0"}}><strong>Our Idea</strong></h1>
                    <div className="col-md-5 mb-5" >
                        <img src={img1} className="img-fluid rounded-top bg-light" alt="userdp" style={{height:"270px"}}/>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6" style={{padding:"0 0 8% 0"}}>
                        <p class="mt-4">
                        The main objective of this project is building a website which can increase the
                        interaction between patients, doctors and hospitals.
                        To help people like Sunita Sharma(i.e. ages 65+) to live a healthier and better life, 
                        I propose developing a personalized health monitoring and assistance system using technology. 
                        This system will incorporate various devices and sensors to track her health parameters and 
                        provide real-time assistance for better management of her well-being.

                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* Team Members */}
        <div ref={line2Ref} style={{ backgroundImage: `url(${bgimg3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="container-fluid">
                <div className="row shadow" style={{padding:"0 10% 0 10%"}}>
                <h1 className='display-2' style={{padding:"8% 0 3% 0"}}><strong>Project by</strong></h1>
                <div className="col-md-4" style={{padding:"15px"}}></div>
                    <div className="col-md-4" style={{padding:"15px"}}>
                        <div className="card mt-1" style={{padding:"20px",borderRadius:"30px"}}>
                            <img src={saurabh} className="img-fluid rounded-top bg-light" alt="userdp" sizes='100px'/>
                            <h4 className="mt-3 text-dark" style={{fontFamily:"cursive"}}>Saurabh Ashok Potdukhe</h4>
                            <h6 className="text-muted">potdukhe12@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-md-4" style={{padding:"15px"}}></div>
                </div>
            </div>
        </div>

        {/* Future Scope */}
        <div ref={line4Ref} style={{ backgroundImage: `url(${bgimg2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative"}}>
        <div className="container-fluid">
        <div className="row shadow" style={{padding:"0 10% 0 10%"}}>
            
            <h1 style={{padding:"8% 0 3% 0"}}>Value Outcome:</h1>
            <p>The personalized health monitoring and assistance system will have several benefits for Sunita Sharma and other elderly individuals:</p>
        <div class="col-2"></div>
        <div class="col-8" style={faAlignLeft}>
            <h3>Early Detection of Health Issues:</h3>
            <p>The system will continuously monitor vital signs such as heart rate, blood pressure, and oxygen levels, enabling early detection of potential health issues.</p>

            <h3>Medication Reminders:</h3>
            <p>The system will provide reminders for taking medications on time, reducing the chances of missed doses.</p>

            <h3>Fall Detection and Emergency Alerts:</h3>
            <p>By incorporating motion sensors, the system will be able to detect falls and automatically send alerts to designated emergency contacts.</p>

            <h3>Activity Tracking:</h3>
            <p>The system will track Sunita's physical activity levels and encourage her to stay active, leading to improved overall health and fitness.</p>

            <h3>Personalized Recommendations:</h3>
            <p>Based on the collected health data, the system can provide personalized recommendations for diet, exercise, and lifestyle modifications.</p>
        </div>
        <div class="col-2"></div>
        </div>
        </div>
        </div>
        
        {/* Contact Us */}
        <div ref={line5Ref}>

        </div>
        <Footer></Footer>
    </div>
    );
}