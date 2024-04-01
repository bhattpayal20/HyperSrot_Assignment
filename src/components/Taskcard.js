import React, { useState } from "react";
import Editmodal from "./Editmodal";

export default function Taskcard({ task, setTasks, onDelete }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };
  return (
    <>
      <div className="p-4 flex flex-col w-60">
        <div
          className={`${
            task.status === "Pending"
              ? "bg-slate-400 text-white"
              : task.status === "Completed"
              ? "bg-green-400 text-white"
              : task.status === "Deployed"
              ? "bg-blue-400 text-white"
              : task.status === "In Progress"
              ? "bg-yellow-300 text-white"
              : "bg-orange-400 text-white"
          } p-2 rounded-md`}
        >
          {task.status}
        </div>

        <div className="bg-grey-100 flex flex-col p-4 bg-white">
          <div className="flex flex-row border-b-2 border-current justify-between p-3">
            <p className="text-black">{task.title}</p>
            <p className="bg-blue-800 rounded-sm p-1 text-center text-white">
              {task.priority1}
            </p>
          </div>
          <p className="mb-2 p-3"> {task.description}</p>
          <div className="flex flex-row mb-2 justify-between p-3">
            <p>@{task.assignee}</p>
            <button
              className="bg-blue-800 p-1 rounded-sm"
              onClick={toggleModal}
            >
              :
            </button>
          </div>
          <button className="bg-blue-800 p-2 rounded-md text-white">
            {task.status}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="flex flex-col bg-slate-300 p-4 h-20">
          <button
            className="border-b-2 border-current"
            onClick={() => setEditOpen(true)}
          >
            Edit
          </button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      {isEditOpen && (
        <Editmodal
          editmodaltoggle={() => setEditOpen(false)}
          task={task}
          setTasks={setTasks}
        />
      )}
    </>
  );
}
