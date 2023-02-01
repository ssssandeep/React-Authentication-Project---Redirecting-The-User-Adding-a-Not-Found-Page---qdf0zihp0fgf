import React from 'react'
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const user= window.localStorage.getItem('username');
    const pass = window.localStorage.getItem('password');
    if(user === 'abc' && pass === '123'){
        return children;
    }
    console.log("id and pass not match");
  return <Redirect to="/login" />;
}

export default PrivateRoute
