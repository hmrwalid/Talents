import React from 'react';
import './App.css';
import "./Bulma.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/pages/Home';
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Login from './components/priveRoute/Login';
import SingUp from './components/priveRoute/SingUp';
import Register from './components/profile/Register';
import NotFound from './components/pages/NotFound';
import NoAcces from './components/pages/NoAcces';
import Dashboard from './components/profile/Dashboard';
import PrivateRouter from './components/priveRoute/PrivetRoutr';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import jwt_decode from 'jwt-decode'
import { Logout, setUser } from './Redux/action/AuthAction';
import {setAuth} from "./Util/setAuth"
import { store } from './app/store';
import Admin from './components/Admin/Admin';
import Navbar from './components/navbar/Navbar';
import ProfileForm from './components/profile/ProfileForm';

if(window.localStorage.jwt){
  const decode = jwt_decode(window.localStorage.jwt)
  store.dispatch(setUser(decode))
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000

  if(decode.exp >  currentDate){
   store.dispatch(Logout()) 
  }
}

function App() {

  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }
  return (
    <Router>
    <div className="App">
      <nav> <Navbar/></nav>
      <Routes>
      <Route path="/dashbord" element={
          <PrivateRouter user={user}>
            <Dashboard />
          </PrivateRouter>
        } />
        <Route path="/edit-profile" element={
          <PrivateRouter user={user}>
            <ProfileForm />
          </PrivateRouter>
        } />
         <Route path="/create-profile" element={
          <PrivateRouter user={user}>
            <ProfileForm />
          </PrivateRouter>
        } />

         <Route path="/admin" element={
          <AdminRouter user={user}>
            <Admin />
          </AdminRouter>
        } />
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About/> } />
     <Route path="/contact" element={<Contact/> } />
     <Route path="/login" element={ <ForceRedirect user={user}><Login /></ForceRedirect>
     }/>
     <Route path="/register" element={<ForceRedirect user={user}><Register/></ForceRedirect>}/>
     <Route path="/singup" element={<SingUp/>}/>
     <Route path="*" element={<NotFound/>}/>
     <Route path="/noaccess" element={<NoAcces/>}/>




     
 
   </Routes>
     
    </div>
    </Router>
  );
}

export default App;
