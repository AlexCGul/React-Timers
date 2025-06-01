"use client";

import { PageSwitcherContext } from "@/Components/Switchers/PageSwitcherContext";
import { useContext } from "react";

export default function Sidebar() 
{
    const pageSwitcher = useContext(PageSwitcherContext);

    // @ts-expect-error vals set as any in the pageswitchercontext
    const { currentWindow, setCurrentWindow } = pageSwitcher;
    return (
    <div className="top-0 left-0 flex flex-col items-center sticky h-screen bg-gray-700 p-3">
       
        <button className="bg-primary text-text active:bg-black mt-0 px-4 py-2 m-4 mb-0 rounded" onClick={() => setCurrentWindow(0)}>Clock</button>
        <button className="bg-primary text-text  px-4 py-2 m-4 mb-0 rounded active:bg-black" onClick={() => setCurrentWindow(1)}>Stopwatch</button>
        <button className="bg-primary text-text px-4 py-2 m-4 mb-0 rounded active:bg-black" onClick={() => setCurrentWindow(2)}>Interval Timer</button>

    </div>
    );
};