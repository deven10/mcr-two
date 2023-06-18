import React, { createContext, useState } from "react";

import { Habits } from "../db/Habits";

export const ContextHabit = createContext();

export const HabitContext = ({ children }) => {
  const [allHabits, setAllHabits] = useState(Habits);
  const [archiveHabits, setArchiveHabits] = useState([]);
  return (
    <ContextHabit.Provider
      value={{
        allHabits,
        setAllHabits,
        archiveHabits,
        setArchiveHabits,
      }}
    >
      {children}
    </ContextHabit.Provider>
  );
};
