import { useState } from "react";

export default function Update() {

  const [update, setUpdate] = useState([
    {
      name: "amit",
      age: 21,
      place: "jaipur",
    },
    {
      name: "ankit",
      age: 25,
      place: "sikar",
    },
    {
      name: "ram",
      age: 22,
      place: "udaipur",
    },
  ]);
  const handlechange=()=>{
   {
    setUpdate(([
      {
        name: "ajay",
        age: 40,
        place: "nagpur",
      },
      {
        name: "ap",
        age: 29, 
        place: "odisha",
      },
      {
        name: "krishna",
        age: 42,
        place: "nagure",
      },
      
    ]
    ));
   }
  
  }
  return (
    <div className="up">
      <div className="update">
        {update.map((e) =>( 
          <div>Name: { e.name } , Age : {e.age} & Place : {e.place}
          </div>))}
      </div>
      <button onClick={handlechange}>Update</button>
    </div>

  );
}