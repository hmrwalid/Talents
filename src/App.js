import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/pages/Home';
import About from "./components/pages/About"
import Challenge from "./components//pages/Challenge"
import Login from './components/priveRoute/Login';
import SingUp from './components/priveRoute/SingUp';
import Register from './components/profile/Register';
import NotFound from './components/pages/NotFound';
import NoAcces from './components/pages/NoAcces';
import Dashboard from './components/profile/Dashboard';
import PrivateRouter from './components/priveRoute/PrivetRoutr';
import Admin from './components/profile/Admin';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import jwt_decode from 'jwt-decode'
import { Logout, setUser } from './Redux/action/AuthAction';
import {setAuth} from "./Util/setAuth"
import { store } from './app/store';
import Profile from './components/profile/Profile';

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
        <Route path="/profile" element={
          <PrivateRouter user={user}>
            <Profile />
          </PrivateRouter>
        } />
         <Route path="/admin" element={
          <AdminRouter user={user}>
            <Admin />
          </AdminRouter>
        } />
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About/> } />
     <Route path="/challenge" element={<Challenge/> } />
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
