import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase"
import LoginComponent from "../components/LoginComponent"
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";


export default function Login() {
  const [loading, setLoader] = useState(true)
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
        if(res?.accessToken){
          navigate("/home")
        }else {
          setLoader(false)
        }
    });
},[navigate]);
  return loading ? <Loader /> :  <LoginComponent />
}


