import React from "react";
import { NavLink,Link, Redirect } from "react-router-dom";
import logo from "../../static/images/res.png";
import {connect} from 'react-redux';
import {signOut} from '../../actions/authActions';

function LoggedIn(auth) {
  console.log(auth);
  console.log(auth.signOut);
  let uid =auth.auth.uid;
  console.log(uid);
  
    return (
      <div>
      <Redirect to="/getting-started" />
      <ul>
          <li className="signin ">
          <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>    
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/dashboard">
              DASHBOARD
              </NavLink>
            </li>       
            <NavLink className="  " to="/register">
            {/* Logged in as {uid} */}
             Logged in as {auth.auth.email}
            </NavLink>
          </li>
          <li className="signin"> 
            <NavLink className="text-blue btnv-3" to="/login" onClick={auth.signOut.signOut}  >
            {/* onClick={signOut} */}
              Signout
            </NavLink>         
          </li>
        </ul>
        </div>
      )
  

}

function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}

const header = (props) => {
console.log(props);
  const { auth } = props;
  // console.log(auth);

console.log(auth);
  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        {/* <img className='logo' src={logo}></img> */}
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

        {auth && auth.uid ?<LoggedIn auth={auth} signOut={props} ></LoggedIn>:<LoggesOut></LoggesOut>}
          
          <ul id="nav-mid">
            {/* <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>    
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/dashboard">
              DASHBOARD
              </NavLink>
            </li>        */}
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

const mapStateToProps=(state)=>{
  console.log(state);
  return{
     auth: state.firebase.auth
  }
}

const mapDistpatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(header);