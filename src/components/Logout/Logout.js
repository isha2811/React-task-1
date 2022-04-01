import React ,{ Component } from 'react';
import {Link} from 'react-router-dom';

const Logout =()=>{
    localStorage.removeItem('token');

    return(

      console.log("logout Sucessfull")

    )
}
export default Logout;