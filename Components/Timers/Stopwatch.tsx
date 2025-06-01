"use client"


import { useEffect, useState } from "react";


// Time values for tracking
  let hour = 0;
  let minute = 0;
  let second = 0;
  let ms = 0;
  let isPaused = true;


// "HH:MM:SS" format
export default function Stopwatch() {

    const [currentTime, SetTime] = useState("00:00:00:00");

    function ResetTimer() 
  {
    hour = 0;
    minute = 0;
    second = 0;
    ms = 0;
    SetTime("00:00:00:00");
    isPaused = true;
  }

    // Update the timer every second
    useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) {
        return;
      }

        ms += 1;
        if (ms >= 100) {
            ms = 0;
            second += 1;
        }
        if (second >= 60) {
            second = 0;
            minute += 1;
        }
        if (minute >= 60) {
            minute = 0;
            hour += 1;
        }
        console.log("SET")
        SetTime(( hour < 10 ? "0" : "") + hour +":"
        + ( minute < 10 ? "0" : "") + minute + ":"
        + ( second < 10 ? "0" : "") + second + ":"
        + ( ms < 10 ? "0" : "") + ms);
    }, 1);

    return () => clearInterval(interval);
    })

    
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-text text-4xl font-bold mb-4">Stopwatch</h1>
      <div className="text-text text-2xl">
        {currentTime}
      </div>

      <button className="bg-primary text-text" onClick={() => isPaused=false}>Start</button>
      <button className="bg-primary text-text" onClick={() => ResetTimer()}>Reset</button>
      <button className="bg-primary text-text" onClick={() => isPaused=true}>Stop</button>

    </div>
  );
}