import { useState } from "react";
import "./App.css";
import UseStateArray from "./UseStateArray";
import Update from "./Update";
import UseRef from "./UseREf";
// export default function App(){
//   const [initial,setInitial]=useState("Amit Meel");
//   let flag=0;

//   let handlechange=()=>{
//     if(flag==0){
//       // let change="I love coading";
//       setInitial("I love coading");
//       flag=1;
//     }
//    else if(flag==1){
//       let change="Amit Meel";
//       setInitial(change);
//     }


//   // const [value,setValue]=useState(0);
    
//   }
  
//   return(
//     <center className="state">
//     {/* <h1>{value}</h1>
//     <button onClick={()=>setValue(value+1)}>click me</button> */}

// <h1>{initial}</h1>
//     <button onClick={handlechange}>click me</button>
//     </center>
//   );

// }




// using array in usestate


export default function App(){
  return(
    <>
   <UseRef/>
    </>
  );
}