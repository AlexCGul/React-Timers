"use client"

import Clock from "@/Components/Clock";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import { PageSwitcherContext } from "./PageSwitcherContext";
import Stopwatch from "@/Components/Stopwatch";
import IntervalTimer from "@/Components/IntervalTimer";



export default function Main () 
{
    const [currentWindow, setCurrentWindow] = useState(0);

    let usingComponent;
    console.log("CURRENT WINDOW: " + currentWindow);
    switch (currentWindow) {
        case 0:
            usingComponent = <Clock />;
            break;
        case 1:
            usingComponent = <Stopwatch />;
            break;
        case 2:
            usingComponent = <IntervalTimer />;
            break;
    }

    return (
    <div className="flex flex-row">

    <PageSwitcherContext.Provider value={{currentWindow, setCurrentWindow}}>
        <Sidebar/ >
    </PageSwitcherContext.Provider>


    {usingComponent}
    </div>
    )
}
