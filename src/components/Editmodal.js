import React, { useState } from "react";

export default function Editmodal({ editmodaltoggle, task, setTasks }) {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === editedTask.id ? editedTask : t))
    );
    editmodaltoggle();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
          <h1 className="text-gray-800 font-bold text-lg mb-4">Edit Task</h1>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold mb-1">
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={editedTask.title}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
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
              value={editedTask.description}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 resize-none"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="team" className="block text-sm font-semibold mb-1">
              Team:
            </label>
            <input
              id="team"
              type="text"
              value={editedTask.team}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
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
              value={editedTask.assignee}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-semibold mb-1"
              >
                Priority:
              </label>
              <select
                id="priority"
                value={editedTask.priority1}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                required
              >
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-semibold mb-1"
              >
                Status:
              </label>
              <select
                id="status"
                value={editedTask.status}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                required
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Deployed">Deployed</option>
                <option value="Deferred">Deferred</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              onClick={editmodaltoggle}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
