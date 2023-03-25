import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

// This footer was refered from...
//  https://web-eau.net/en/blog/10-best-footer-html-css-snippets
function Footer() {
return (
    <footer className="footer">
        <div className="container bottom_border">
            <div className="row">
                <div className="col-6">
                    <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                        <p className="mb10">
                            We are students of Know-IT, C-DAC, Pune and have created this web-based project 
                            using React.js as front-end and Java, Spring Boot for back-end. For the database MySQL was used.
                        </p>
                        {/* <p>
                            <FontAwesomeIcon icon={faPhone} /> +91-9999878398
                        </p> */}
                    <div className="row">
                        <div className="col-4">
                            <p>
                                <FontAwesomeIcon icon={faLocationArrow} /> 
                                <a href='https://www.linkedin.com/in/saurabh-potdukhe-61b643132/'>Saurabh Potdukhe</a>
                            </p>
                        </div>
                        <div className="col-2">
                            <p>
                                <a href='https://github.com/potdukhe12'>Github</a>
                            </p>
                        </div>
                        <div className="col-4">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> potdukhe12@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>
                                <FontAwesomeIcon icon={faLocationArrow} /> 
                                <a href='https://www.linkedin.com/in/gaurav-urkude-74b310261/'>Gaurav Urkude</a>
                            </p>
                        </div>
                        <div className="col-2">
                            <p>
                                <a href='https://github.com/gauravurkude'>Github</a>
                            </p>
                        </div>
                        <div className="col-4">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> 
                                 gsurkude10@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>
                                <FontAwesomeIcon icon={faLocationArrow} /> 
                                <a href='https://github.com/ajaybhosle1212'> Ajay Bhosle </a>
                            </p>
                        </div>
                        <div className="col-sm-3 col-md col-sm-3 col-12 col">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> ajay.bhosle15@vit.edu
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>
                                <FontAwesomeIcon icon={faLocationArrow} /> 
                                <a href='https://github.com/atharva-suryavanshi'>Atharv Suryavanshi</a>
                            </p>
                        </div>
                        <div className="col-sm-3 col-md col-sm-3 col-12 col">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> atharvssnew1234@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="col-3">
                        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                        <ul className="footer_ul_amrc">
                            <li><a href="./">Home</a></li>
                            <li><a href="./login">Login</a></li>
                            <li><a href="./signup">Register</a></li>
                            <li><a href="./aboutus">About us</a></li>
                        </ul>
                </div>
                <div className="col-3">
                    <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                        <ul className="footer_ul_amrc">
                            <li><a href="./"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="./"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="./"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="./"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <ul className="foote_bottom_ul_amrc">
                <li><a href="./">Home</a></li>
                <li><a href="./aboutus">About</a></li>
                <li><a href="./login">Login</a></li>
                <li><a href="./signup">Register</a></li>
            </ul>
            <p className="text-center">
            © {new Date().getFullYear()} | Designed with <a href="https://github.com/potdukhe12/Cdac_Crazy4">Crazy4_cdac</a>
            </p>
        </div>
    </footer>
);
}

export default Footer;