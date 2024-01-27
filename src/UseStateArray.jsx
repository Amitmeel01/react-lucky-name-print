import React from "react";
import { useState } from "react";
export default function UseStateArray(){
 
  const [bioData,setBioData]=useState([
    {
        id:0 , myName:"amit",age:21
    },
    {
      id:1 , myName:"Meel",age:20

    },
    {
id:2 , myName:"ankit",age:23
    },
  ]);
 
  const handlechange=()=>{
        let change= bioData.map((e)=>e.myName="");
         setBioData(change);
  }
  return(
    <>
    {bioData.map((ele)=>
    <h1 className="h1style" > name:{ele.myName} & age: {ele.age} </h1>
    )}
      <button className="btnstyle" onClick={handlechange}>clear</button>
    
    </>
  );
}