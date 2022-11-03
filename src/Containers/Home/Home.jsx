import React,{useEffect, useState} from 'react';
import './Home.css'

const Home = () =>{
    const [toggle,setToggle] = useState(0)
    // UseEffect will change value of Toggle at mounting
    // useEffect(()=>{setToggle(1)},[])
    // UseEffect will change value of Toggle continuously (loop)
    // useEffect(()=>{setToggle(1)},)    
    // useEffect(()=>{setToggle(1)},[toggle])

    

    return (<div className ="homeDesign">
        
        <button onClick={() => (toggle === 0) ? setToggle(1): setToggle(0)}>This is a toggle button</button> 
        
         <p>{toggle}</p></div>)
}
export default Home;