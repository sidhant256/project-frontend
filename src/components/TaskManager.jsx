import React, { useState, useEffect } from "react";

export default function TaskManager() {
  // State for holding the list of tasks
  const [tasks, setTasks] = useState([]);

   // State for holding the current input value
  const [input, setInput] = useState("");

  // Load the tasks from localStorage on component
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Saving tasks to localStorage whenever tasks changes it's state
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task to the list
  const addTask = () => {
    if (!input.trim()) {
      alert("Please enter a task.");
      return;
    }
    setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks]);
    setInput(""); // Clear the input field
  };

  // Toggle the completed state of a task
  const toggleComplete = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

   // Delete a task from the list
  const deleteTask = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));

  return (
    <section className="bg-[#F1F0FF] py-16 px-4 md:px-6 mx-25 h-150" id="tasks">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center text-[#4532FC]">
          Task Manager
        </h2>
        <p className="text-center text-gray-500 mb-8">Your daily to-do list</p>

        <div className="flex flex-col gap-4 mt-10 mb-8 bg-white rounded-2xl p-6 md:p-10 shadow-md">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks added yet.</p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="w-4 h-4"
                    />
                    <span className="text-lg">{task.text}</span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 border border-red-500 px-5 py-1 rounded hover:border-red-600 transition hover:text-red-600 text-sm"
                  >
                    ❌ Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add new task"
            className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring border-gray-400"
          />
          <button
            onClick={addTask}
            className="bg-[#4532FC] text-white px-4 py-3 rounded-2xl font-semibold w-full sm:w-48 self-start hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </div>
      </div>
    </section>
  );
}
