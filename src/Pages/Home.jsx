import HomeComponent from "../components/HomeComponent";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

export default function Home() {
    const [loading, setLoader] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
      onAuthStateChanged(auth, (res) => {
          if(!res?.accessToken){
            navigate("/")
          } else {
            setLoader(false)
          }
      });
  },[navigate]);
    return loading ? <Loader /> : <HomeComponent />
}