"use client";

export default function Sidebar() 
{
    return (
    <div className="top-0 left-0 flex flex-col items-center sticky h-screen bg-gray-700 p-3">
        <button className="bg-primary text-text mt-0 px-4 py-2 m-4 mb-0 rounded">Clock</button>
        <button className="bg-primary text-text  px-4 py-2 m-4 mb-0 rounded">Stopwatch</button>
        <button className="bg-primary text-text px-4 py-2 m-4 mb-0 rounded">Interval Timer</button>

    </div>
    );
};