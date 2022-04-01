import React from 'react';
import './Navbar.css';
import Post from '../Post/Post';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Dashboard from '../DashBoard/Dashboard';
import Register from '../Register/Register';
import Home from '../Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import {Link} from 'react-router-dom';
import Logout from '../Logout/Logout';
import App from '../../App';

//import logo from './img1.png';

function Navbar({setToken}){
    const logoutk=()=>{

        localStorage.removeItem('token');
        setToken("other")
        return(
    
          console.log("logout Sucessfull")
    
        )
    
      }

return (<div className="container-outside">
<Router>
    <div className='Nav'>
        <div className='logo'>
          <h1>Learning Diva</h1> 
        </div>
        <div className ="nav-bar">
        <ul>
        
        <Link to="/home" >
           <li><button className="button-33" role="button"> Home </button></li>
        </Link>
        

            <Link to="/post">
              <li> <button className="button-33" role="button"> Post</button></li>
            </Link>
       
        
        
            <Link to="/dashboard">
               <li> <button className="button-33" role="button"> Dashboard </button></li>
            </Link>
        
      
            <Link to="/">
           <li><button className="button-33" role="button" onClick={logoutk}> Logout </button> </li>
            </Link>
        </ul>
        </div>
    </div>
    
    <Switch>
    
      <Route path='/home'exact component={Home}/>
      <Route path='/dashboard'component={Dashboard}/>
      <Route path='/post' component={Post}></Route>
      <Route path='/logout'  ></Route>
      
      <Route path="*" component={PageNotFound} />
    </Switch>
 </Router>
 
  </div>
);

}
export default Navbar;
