"use client"


import { useEffect, useState } from "react";


export default function Clock() {

    const [currentTime, SetTime] = useState(new Date().toLocaleTimeString());

    // Update the timer every second
    useEffect(() => {
    const interval = setInterval(() => {
        SetTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
    })

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-text text-4xl font-bold mb-4">Clock</h1>
      <div className="text-text text-2xl">
        {currentTime}
      </div>
    </div>
  );
}