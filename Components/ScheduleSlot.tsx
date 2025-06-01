import { useContext } from "react";
import { ScheduleSlotContext } from "./Switchers/ScheduleSlotContext";

export default function ScheduleSlot({ title, delay, duration, nkey }: { title: string; delay: number; duration: number, nkey: number }) {
    
    const updatePosition = useContext(ScheduleSlotContext);
    
    return (
        <div className="bg-gray-800 text-text p-4 rounded-lg mb-4 flex flex-row">
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>Delay: {delay} seconds</p>
                <p>Duration: {duration} seconds</p>
            </div>

            <div className="bg-gray-800 text-text p-4 rounded-lg mb-4 flex flex-col">
                <button onClick={() => {console.log("UP") 
                    updatePosition.updatePosition?.({ oldID: nkey, newID: nkey - 1 }) } }> ↑ </button>
                <button onClick={() => updatePosition.updatePosition?.({ oldID: nkey, newID: nkey + 1 }) }> ↓ </button>
            </div>
        </div>
    );
}