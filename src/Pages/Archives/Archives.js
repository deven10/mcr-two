import React, { useContext } from "react";
import { ContextHabit } from "../../context/HabitContext";

export const Archives = () => {
  const { archiveHabits } = useContext(ContextHabit);
  console.log(" archiveHabits = ", archiveHabits);
  return (
    <div>
      <h3>Archived Habits</h3>
      <div className="habits-wrapper">
        {archiveHabits?.map((habit) => {
          return (
            <div key={habit.id} className="habit">
              <p className="habit-name">Habit Name: {habit.Habit_Name}</p>
              <p>Repeat: {habit.Repeat}</p>
              <p>Goal: {habit.Goal}</p>
              <p>Time of Day: {habit.Time_of_Day}</p>
              <p>Start Date: {habit.Start_Date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
