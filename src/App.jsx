import Nav from './component/Nav'
import PreHandler from './component/prelogin/PreHandler'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import { Provider, useDispatch, useSelector } from 'react-redux'
import appStore from './utils/appStore'
import Body from './component/Body'
import Feed from './component/Feed'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import Appointment from './component/Appointment'
import Gettoken from './component/Gettoken'
import Checkup from './component/Checkup'
import Getcheckup from './component/Getcheckup'
import CheckupsPage from './component/CheckupsPage'
import SpecialitiesPages from './component/SpecialitiesPages'
import DoctorPage from './component/DoctorPage'
import Profile from './component/Profile'
import About from './component/information/About'
import Skills from './component/information/Skills'
import Jobs from './component/information/Jobs'
import Contact from './component/information/Contact'
import Services from './component/Services'
import Abouts from './component/Abouts'

function App() {

  // const dispatch = useDispatch();
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     try {
  //       const decoded = jwtDecode(token);
  //       const currentTime = Date.now() / 1000; // Convert to seconds

  //       if (decoded.exp < currentTime) {
  //         dispatch(logout()); // Token expired
  //         toast.info("Session Expired! Please log in again.");
  //       }
  //     } catch (err) {
  //       dispatch(logout());
  //     }
  //   }
  // }, [dispatch, token]);
  

  return (
    <Provider store={appStore}>
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Prelogin route */}
        <Route path="/" element={<PreHandler />} />
        <Route path="login" element={<Login />} />

        {/* Main app routes */}
        <Route path="/app" element={<Body />}>
          <Route index element={<Feed />} /> Default child
          
           <Route path="appointment" element={<Appointment />} />
          <Route path="gettoken" element={<Gettoken />} />
          <Route path="checkup" element={<Checkup />} />
          <Route path="getcheckup" element={<Getcheckup />} />
          <Route path="checkupsPage" element={<CheckupsPage />} />
         <Route path="specialitiesPages" element={<SpecialitiesPages />} />
          <Route path="doctorPage" element={<DoctorPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About/>} />
         <Route path="skills" element={<Skills />} />
           <Route path="Jobs" element={<Jobs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="Abouts" element={<Abouts />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
