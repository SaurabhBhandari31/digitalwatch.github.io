import React, { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();
  let day = new Date().toDateString();
  const [ctime, setCtime] = useState(time);
  const [dtime, setDtime] = useState(day);

  const UpdateTime = () => {
    let utime = new Date().toLocaleTimeString();
    let days= new Date().toDateString();
    setCtime(utime);
    setDtime(days)

   };
   setInterval(UpdateTime, 1000);
  return (
    <>
    <div className="main"> 
      <h1 className="heading">{ctime}</h1>
      <p className="pera">{dtime}</p>
      </div>
    </>
  );

};

export default App;
