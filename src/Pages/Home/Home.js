import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ContextHabit } from "../../context/HabitContext";

export const Home = () => {
  const { allHabits, setAllHabits, setArchiveHabits, archiveHabits } =
    useContext(ContextHabit);

  const [habitName, setHabitName] = useState("");
  const [repeat, setRepeat] = useState("");
  const [goal, setGoal] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSingleHabit, setShowSingleHabit] = useState(false);
  const [singleHabit, setSingleHabit] = useState({});

  const [editHabit, setEditHabit] = useState({
    habitName: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    selectedDate: "",
  });

  const handleClear = () => {
    setHabitName("");
    setRepeat("");
    setGoal("");
    setTimeOfDay("");
    setSelectedDate("");
  };

  const handleHabit = () => {
    if (
      habitName !== "" ||
      repeat !== "" ||
      goal !== "" ||
      timeOfDay !== "" ||
      selectedDate !== ""
    ) {
      setAllHabits([
        ...allHabits,
        {
          id: uuidv4(),
          Habit_Name: habitName,
          Repeat: repeat,
          Goal: goal,
          Time_of_Day: timeOfDay,
          Start_Date: selectedDate,
        },
      ]);

      console.log({
        id: uuidv4(),
        Habit_Name: habitName,
        Repeat: repeat,
        Goal: goal,
        Time_of_Day: timeOfDay,
        Start_Date: selectedDate,
      });

      setShowModal(false);
      handleClear();
    } else {
      alert("Please fill all the required fields");
    }
  };

  const handleShowHabit = (data) => {
    setShowSingleHabit(!showSingleHabit);
    setSingleHabit(data);
  };

  const Modal = () => {
    return (
      <div className="custom-modal">
        <button
          className="btn btn-primary add-new-habit"
          onClick={() => setShowModal(true)}
        >
          Create New Habit
        </button>

        {showModal && (
          <div className="modal-form">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Add New Habit</h1>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="habit-name" className="form-label">
                  Habit Name
                </label>
                <input
                  onChange={(e) => setHabitName(e.target.value)}
                  value={habitName}
                  type="text"
                  className="form-control"
                  id="habit-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="repeat" className="form-label">
                  Repeat
                </label>
                <select
                  id="repeat"
                  className="form-control"
                  value={repeat}
                  onChange={(e) => setRepeat(e.target.value)}
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="goal" className="form-label">
                  GOAL
                </label>
                <select
                  id="goal"
                  className="form-control"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                >
                  <option value="1 times Daily">1 times Daily</option>
                  <option value="2 times Daily">2 times Daily</option>
                  <option value="3 times Daily">3 times Daily</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="time-of-day" className="form-label">
                  TIME of Day
                </label>
                <select
                  id="time-of-day"
                  className="form-control"
                  value={timeOfDay}
                  onChange={(e) => setTimeOfDay(e.target.value)}
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="start-date" className="form-label">
                  Start Date
                </label>
                <input
                  id="start-date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="form-control"
                  type="date"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                // type="submit"
                className="btn btn-primary"
                onClick={() => handleHabit()}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Delete functionality
  const handleDelete = (habitID) => {
    setAllHabits(allHabits.filter((habit) => habit.id !== habitID));
  };

  // Archive Functionality
  const handleArchive = (habitID) => {
    setAllHabits(allHabits.filter((habit) => habit.id !== habitID));
    setArchiveHabits([
      ...archiveHabits,
      allHabits.find((habit) => habit.id === habitID),
    ]);
  };

  // Edit functionality
  const EditModal = (habit) => {
    console.log("edit habit = ", habit);
  };

  return (
    <div>
      {/* <NewHabit /> */}
      <Modal />
      <div className="habits-wrapper">
        {allHabits.map((habit) => {
          return (
            <div key={habit.id} className="habit">
              <p className="habit-name">Habit Name: {habit.Habit_Name}</p>
              {showSingleHabit ? (
                <div
                  style={{
                    display: singleHabit.id === habit.id ? "block" : "none",
                  }}
                >
                  <p>Repeat: {singleHabit.Repeat}</p>
                  <p>Goal: {singleHabit.Goal}</p>
                  <p>Time of Day: {singleHabit.Time_of_Day}</p>
                  <p>Start Date: {singleHabit.Start_Date}</p>
                </div>
              ) : (
                ""
              )}
              <div className="call-to-action-button">
                <button onClick={() => handleShowHabit(habit)}>
                  View Details
                </button>
                <button onClick={() => EditModal(habit)}>Edit Habit</button>
                {/* <EditModal data={habit} /> */}
                <button onClick={() => handleArchive(habit.id)}>Archive</button>
                <button onClick={() => handleDelete(habit.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
