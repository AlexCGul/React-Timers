"use client"


import { useEffect, useState } from "react";

// "HH:MM:SS" format
export default function Clock() {

    const [currentTime, SetTime] = useState("00:00:00:00");

    let hour = 0;
    let minute = 0;
    let second = 0;
    let ms = 0;

    // Update the timer every second
    useEffect(() => {
    const interval = setInterval(() => {
        ms += 1;
        if (ms >= 1000) {
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

        SetTime(hour + ":" + minute + ":" + second + ":" + ms);
    }, 100);

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