import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/user/Newlogin';
import { Home } from './components/common/Home';
import Footer from './components/common/Footer';
import { Patienthome } from './components/patient/Patienthome';
import { Treatment } from './components/tables/Treatment';
import { Doctorhome } from './components/doctor/Doctorhome';
import { SignupUser } from './components/user/SignupUser';
import { Hospital } from './components/tables/Hospital';
import { Doctor } from './components/tables/Doctor';
import { Hospitalhome } from './components/hospital/Hospitalhome';
import { Doctorview } from './components/hospital/Doctorview';

import { Adminhome } from './components/admin/Adminhome';
import { FourOFour } from './components/common/NotFound';
import { Hospitalcontrol } from './components/admin/Hospitalcontrol';
import { Treatmentcontrol } from './components/admin/Treatmentcontrol';
import { Aboutus } from './components/common/Aboutus';

function App() {

  const path = "http://localhost:8080";
  return (
    <div className="App">



      <Routes>
        <Route path='' element={<Home p={path}></Home>}></Route>
        <Route path='home' element={<Home p={path}></Home>}></Route>
        <Route path='footer' element={<Footer></Footer>}></Route>
        <Route path='login' element={<Login p={path}></Login>}></Route>
        <Route path='signup' element={<SignupUser p={path}></SignupUser>}></Route>
        <Route path='patient-home' element={<Patienthome p={path}></Patienthome>}></Route>
        <Route path='doctor-home' element={<Doctorhome p={path}></Doctorhome>}></Route>
        <Route path='treatment' element={<Treatment p={path}></Treatment>}></Route>
        <Route path='treat' element={<Treatmentcontrol p={path}></Treatmentcontrol>}></Route>
        <Route path='doctor' element={<Doctor p={path}></Doctor>}></Route>
        <Route path='doc' element={<Doctorview p={path}></Doctorview>}></Route>
        <Route path='hospital' element={<Hospital p={path}></Hospital>}></Route>
        <Route path='hospital-control' element={<Hospitalcontrol p={path}></Hospitalcontrol>}></Route>
        <Route path='hospital-home' element={<Hospitalhome p={path}></Hospitalhome>}></Route>
        <Route path='admin-home' element={<Adminhome p={path}></Adminhome>}></Route>
        <Route path='*' element={<FourOFour p={path}></FourOFour>}></Route>
        <Route path='about-us' element={<Aboutus p={path}></Aboutus>}></Route>

      </Routes>


    </div>
  );
}

export default App;
