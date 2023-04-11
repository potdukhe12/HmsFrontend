import { useLocation } from "react-router-dom";
import logo from "../../img/logonav.png";
import { useState } from "react";

import "./Navig.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export let Navig = (props) => {

  const location = useLocation();
  const uid = location.state;
  const isLogin = props.isLogin;
  const isSignup = props.isSignup;
  const isHome = props.isHome;
  const isAboutus = props.isAboutus;

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-light shadow-lg"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          width: "100%",
          height: "60px",
        }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            // aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div id="logo">
                <a href="./">
                {/* <h3>Healthcare Management System&emsp;&emsp;</h3> */}
                  <img src={logo} alt="logo" width={"200px"} />
                </a>
            </div>


          <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse justify-content-end`} id="navbarNav"
              style={{  transition: "height 0.3s ease",
                          height: "auto",
                          overflow: "hidden"}}
          >
            
            <ul className="navbar-nav">
              <li className="nav-item">
              </li>
              {!isHome ? (
                  <>
                    <li className="nav-item" style={{backgroundColor: !isNavCollapsed ? '#263238' : 'none', borderRadius: !isNavCollapsed ? "10px" : '0', margin: !isNavCollapsed ? "0 150px 3px 0" : '0 10px 0 0'}}>
                      <a className="nav-link" href="./">
                        <h4 style={{color: !isNavCollapsed ? 'white':''}}>Home</h4>
                      </a>
                    </li>
                  </>
                  ):(
                    <>
                    </>
                  )}
              {!isAboutus ? (
                <>
                  <li className="nav-item" style={{backgroundColor: !isNavCollapsed ? '#263238' : 'none', borderRadius: !isNavCollapsed ? "10px" : '0', margin: !isNavCollapsed ? "0 150px 3px 0" : '0 10px 0 0'}}>
                    <a className="nav-link" href="./about-us">
                      <h4 style={{color: !isNavCollapsed ? 'white' : ''}}>About Us</h4>
                    </a>
                  </li>
                </>
                ):(
                  <>
                  </>
                )}
              {!uid ? (
                <>
                  {!isLogin ? (
                    <>
                      <li className="nav-item" style={{backgroundColor: !isNavCollapsed ? '#263238' : 'none', borderRadius: !isNavCollapsed ? "10px" : '0', margin: !isNavCollapsed ? "0 150px 3px 0" : "0 10px 0 0"}}>
                        <a className="nav-link" href="./login">
                          <h4 style={{color: !isNavCollapsed ? 'white' : ''}}>Login</h4>
                        </a>
                      </li>
                    </>
                  ):(
                    <>
                    </>
                  )}

                    {!isSignup ? (
                      <>
                        <li className="nav-item" style={{backgroundColor: !isNavCollapsed ? '#263238' : 'none', borderRadius: !isNavCollapsed ? "10px" : '0', margin: !isNavCollapsed ? "0 150px 3px 0" : '0'}}>
                          <a className="nav-link" href="./signup">
                            <h4 style={{color: !isNavCollapsed ? 'white' : ''}}>Signup</h4>
                          </a>
                        </li>
                      </>
                    ):(
                      <>
                      </>
                    )}
                </>
              ) : (
                <>
                  <li className="nav-item" style={{backgroundColor: !isNavCollapsed ? '#263238' : 'none', borderRadius: !isNavCollapsed ? "10px" : 'none', margin: !isNavCollapsed ? "0 150px 3px 0" : '0'}}>
                    <a className="nav-link" href="./login">
                      <h4 style={{color: !isNavCollapsed ? 'white' : ''}}>Logout</h4>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
