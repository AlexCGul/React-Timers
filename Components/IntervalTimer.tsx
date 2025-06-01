"use client"


import { useEffect, useState } from "react";
import ScheduleSlot from "./ScheduleSlot";

type IntervalSlot = 
{
    title: string;
    delay: number; // in seconds
    duration: number; // in seconds
};


export default function IntervalTimer() {

    // Tracker values
    const [currentTime, SetTime] = useState(new Date().toLocaleTimeString());
    const [intervalSlotsState, setIntervalSlotsState] = useState<IntervalSlot[]>([]);

    // Form values
    const [title, setTitle] = useState("");
    const [delay, setDelay] = useState(-1);
    const [duration, setDuration] = useState(-1);
 
    // Add a new interval slot
    const AddIntervalSlot = (title: string, delay: number, duration: number) => 
    {
        setIntervalSlotsState([...intervalSlotsState, {
            title: title,
            delay: delay,
            duration: duration
        }]);

        console.log(title, " ", delay, " ", duration);
        // Clear old values
        setTitle("");
        
        /* While this seems logical it's bad UX
        setDelay(-1);
        setDuration(-1);
        */
        
    }

    // Update the timer every second
    useEffect(() => {
    const interval = setInterval(() => 
    {
        SetTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
    })


  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">

        {/*Clock*/}
        <h1 className="text-text text-4xl font-bold mb-4">Clock</h1>
        <div className="text-text text-2xl">
          {currentTime}
        </div>

        {/*The scheduler*/}
        <h2 className="text-text text-3xl font-bold mt-8 mb-4">Scheduler</h2>
        <div className="flex flex-col items-center justify-center w-full max-w-md">
            {
              // Draw out all the slots
              intervalSlotsState.map((slot, key) => (
                ScheduleSlot({ title: slot.title, delay: slot.delay, duration: slot.duration, key: key }) ))
            }
        </div>

        {/*Add new entry to scheduler*/}
        <form className="flex flex-col items-center justify-center" onSubmit=
            {
              (e) =>
                {
                  e.preventDefault();
                  AddIntervalSlot(title, delay, duration)
                }
            }>

            <input type="text" placeholder="Title" value={title} className="text-text bg-primary p-2 rounded m-2" required
            onChange={(e) => setTitle(e.target.value)} />

            <input type="number"  placeholder="Delay (s)" value={delay < 0 ? "" : delay} className="text-text bg-primary p-2 rounded m-2"
            required onChange={(e) => setDelay(Number(e.target.value))}/>

            <input type="number" value={duration < 0 ? "" : duration} placeholder="Duration (s)" className="text-text bg-primary p-2 rounded m-2" 
            required onChange={(e) => setDuration(Number(e.target.value))}/>
            <button className="text-text bg-primary">+</button>
        </form>
    </div>
  );
}

