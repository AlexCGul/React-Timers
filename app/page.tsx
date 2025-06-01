"use client"

import Clock from "@/Components/Timers/Clock";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import { PageSwitcherContext } from "../Components/Switchers/PageSwitcherContext";
import Stopwatch from "@/Components/Timers/Stopwatch";
import IntervalTimer from "@/Components/Timers/IntervalTimer";



export default function Main () 
{
    const [currentWindow, setCurrentWindow] = useState(0);

    let usingComponent;

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
