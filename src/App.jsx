import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registerpage from './Components/Registerpage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import ForgotPasswordPage from './Components/ForgotPasswordPage';
import ResetPassword from './Components/ResetPassword';
import UrlShortener from './Components/UrlShortener';
import NavBar from './Components/NavBar';
import AdminDashboard from './Components/AdminDashboard';
import CreatedUrls from './Components/CreatedUrls';
import UrlDashboard from './Components/UrlDashboard';

const App = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [responseData,setResponseData] = useState([])
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registerpage />} />
          <Route path='/login' element={<LoginPage SetUserName={setUsername} SetEmail={setEmail} SetToken={setToken} />} />
          <Route path='/home' element={<><NavBar /><HomePage username={username} email={email} /></>} />
          <Route path='/forgot' element={<ForgotPasswordPage />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/urlshortener/:email' element={<><NavBar /><UrlShortener email={email} /></>} />
          <Route path='/dashboard' element={<><NavBar /><AdminDashboard token={token} setResponseData={setResponseData} /></>}>
            <Route path='createdurls' element={<CreatedUrls responseData={responseData} />} /> 
            <Route path ='urldashboard' element={<UrlDashboard />} />
            {/* for nested routing Don't need to use (/) this */}
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
