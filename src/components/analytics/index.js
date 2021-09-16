import React,{useEffect} from "react"
import ReactGa from "react-ga"

const Analytics = () => {

    useEffect(()=>{
        ReactGa.initialize("UA-205859239-1")
    
        ReactGa.pageview("/")
      },[])

    return <></>
}

export default Analytics