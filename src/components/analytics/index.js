import React,{useEffect} from "react"
import ReactGa from "react-ga"

const Analytics = () => {

    useEffect(()=>{
        ReactGa.initialize("G-JG8TH5G9HV")
    
        ReactGa.pageview("/")
      },[])

    return <></>
}

export default Analytics