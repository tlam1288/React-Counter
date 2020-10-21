import React from 'react';



function App() {

const calculateTimeLeft = ()=>{
  let year = new Date().getFullYear();

  const difference = +new Date(`12/16/${year}`) - +new Date();

  let timeLeft = {};
  if(difference > 0){
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 *24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

  return (
    <></>
  );
}

export default App;
