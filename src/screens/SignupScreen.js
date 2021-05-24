import React, { useRef,useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase';
import "./SignupScreen.css";
toast.configure();
function SignupScreen() {
  const [logIn,setLogIn]=useState(false);
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
const register=(e)=>{
  e.preventDefault();
  auth.createUserWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser)=>{
    toast.success("Yay you are now registered");
     console.log(authUser);
  }).catch((error)=>{
     toast.error(error.message);
  })
}
const signIn=(e)=>{
  e.preventDefault();
  auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser)=>{
    toast.success("Yay you are now logged in");
    console.log(authUser);
  }).catch((error)=>{
    toast.error(error.message);
  })
}

if(logIn==false)
{
  console.log("login")
return(
  <div className="signupScreen">
  <form>
    <h1>Sign In</h1>
    <input ref={emailRef} placeholder="email" type="email" />
    <input ref={passwordRef} placeholder="password" type="password" />
    <button type="submit" onClick={signIn}>Sign In</button>
    <h4>
      <span className="signupScreen__gray">New to Netflix?</span>
      <span className="signupScreen__link" onClick={()=>setLogIn(true)}>Sign Up now</span>
    </h4>
  </form>
  </div>
)
}
else
{
  return (
    <div className="signupScreen">
          <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} placeholder="email" type="email" />
            <input ref={passwordRef} placeholder="password" type="password" />
            <button type="submit" onClick={register}>Sign Up</button>
            <h4>
              <span className="signupScreen__gray">Already a user?</span>
              <span className="signupScreen__link" onClick={()=>setLogIn(false)}>Sign In</span>
            </h4>
          </form>
    </div>
  )
}
}
export default SignupScreen
