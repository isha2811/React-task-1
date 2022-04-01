import React ,{useState }from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import {Link ,Redirect } from 'react-router-dom';


const Landing=() =>{
const token =localStorage.getItem("token")
const[loggedIn ,setLoggedIn] =useState(true);

if(token == null)
{
    setLoggedIn(false);
    
}

return(
    <div>
       <Navbar />
       <Footer />
          </div>
)

};
export default Landing;