import { createContext, Dispatch, SetStateAction } from "react";

export const ScheduleSlotContext = createContext<{
    oldID: number;
    newID: number;
    updatePosition?: Dispatch<SetStateAction<{ oldID: number; newID: number }>>;
}>({
    oldID: 0,
    newID: 0,
    updatePosition: () => {},
});