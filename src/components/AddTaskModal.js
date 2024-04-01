import React, { useState } from "react";

export default function AddTaskModal({ isOpen, closeModal, addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    addTask(task);
    closeModal();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h1 className="text-gray-800 font-bold text-lg mb-4">Add New Task</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold mb-1">
            Title:
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-semibold mb-1"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 resize-none"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="team" className="block text-sm font-semibold mb-1">
            Team:
          </label>
          <input
            id="team"
            type="text"
            name="team"
            value={task.team}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="assignee"
            className="block text-sm font-semibold mb-1"
          >
            Assignee:
          </label>
          <input
            id="assignee"
            type="text"
            name="assignee"
            value={task.assignee}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-semibold mb-1"
          >
            Priority:
          </label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          >
            <option value="">Select Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
            onClick={handleSubmit}
          >
            Add Task
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
