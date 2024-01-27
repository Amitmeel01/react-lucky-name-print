import { useRef, useState } from "react";

export default function UseRef(){
  const luckyName=useRef(null);
  const [show,setShow]=useState(false);
  const handlechange=()=>{
 console.log(luckyName.current.value);
 setShow(true);
  }
  const resetCall=()=>{
    setShow(false);
   return luckyName.current.value="";
  }
  return(
    <>
    <div className="uncontroled">
      <label htmlFor="luckyName" style={{fontSize:"55px"}}>enter your lucky name</label>
      <br />
      <input type="text" id="luckyName" ref={luckyName} style={{fontSize:"35px"}}/>
        <br />
        <br />
        <div className="btn">
        <button onClick={handlechange}>Submit</button>
        <br />
      <button onClick={resetCall}>Reset</button>
        </div>
      
    </div>
    {show?<div className="para">
         <p style={{fontSize:"2.5rem",textAlign:"center",color:"black"}}>{show? `lucky name is : ${luckyName.current.value} `: null}</p>
    </div>:null}
    
    
    </>
  );
  }