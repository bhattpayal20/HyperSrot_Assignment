import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import Taskcard from "./Taskcard";
import AddTaskModal from "./AddTaskModal";

export default function Tasktracker() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is a task1",
      status: "Pending",
      startdate: "27-03-2024",
      enddate: "29-03-2024",
      assignee: "John Doe",
      priority1: "P1",
      priority2: " ",
      team: "avengers",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Another task",
      startdate: "28-03-2024",
      enddate: "31-03-2024",
      status: "In Progress",
      assignee: "Priyanka Bhatt",
      priority1: "P2",
      priority2: " ",
      team: "hulk",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Another task3",
      startdate: "29-03-2024",
      enddate: "31-03-2024",
      status: "Completed",
      assignee: "Bhatt",
      priority1: "P0",
      priority2: " ",
      team: "Marvel",
    },

    {
      id: 4,
      title: "Task 4",
      description: "Hey here, Abhshek!!",
      startdate: "1-04-2024",
      enddate: "15-04-2024",
      status: "Deployed",
      assignee: "Abhishek",
      priority1: "P0",
      priority2: " ",
      team: "Bharat",
    },
    {
      id: 5,
      title: "Task 5",
      description: "Another task3",
      startdate: "2-04-2024",
      enddate: "5-04-2024",
      status: "Deferred",
      assignee: "Suzuka",
      priority1: "P1",
      priority2: " ",
      team: "Doraemon",
    },
  ]);

  const [filters, setFilters] = useState({
    assignee: "",
    priority1: "",
    startdate: null,
    enddate: null,
  });

  const filteredTasks = tasks.filter((task) => {
    const assigneeFilter =
      !filters.assignee ||
      task.assignee.toLowerCase().includes(filters.assignee.toLowerCase());
    const priorityFilter =
      !filters.priority1 || task.priority1 === filters.priority1;
    const startDateFilter =
      !filters.startdate ||
      new Date(task.startdate) >= new Date(filters.startdate);
    const endDateFilter =
      !filters.enddate ||
      (task.enddate && new Date(task.enddate) <= new Date(filters.enddate));
    return assigneeFilter && priorityFilter && startDateFilter && endDateFilter;
  });

  const sortTasksByPriority = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      // First, sort by priority
      const priorityComparison = a.priority1.localeCompare(b.priority1);
      if (priorityComparison !== 0) {
        return priorityComparison;
      }

      return new Date(a.startdate) - new Date(b.startdate);
    });
    setTasks(sortedTasks);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTaskModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleAddTaskModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false); // Close the modal after adding the task
  };
  return (
    <>
      {/* <div
        className="flex flex-col p-10 w-screen h-screen"
        style={{
          backgroundImage: `linear-gradient(to right, #f4dbf9 , #e2dbfc)`,
        }}
      >
        <div className="flex flex-row p-4">
          <h3 className="font-bold text-lg w-10/12 text-left">Task Board</h3>
          <FaCircleUser className="text-right" size={24} />
        </div>

        <div className="p-6 border-2 border-white	 rounded-lg flex flex-col">
          <div className="flex flex-row mb-6">
            <div className="flex flex-row w-4/5">
              <h3 className="semi-bold">Filter By: </h3>
              <input
                className="ml-2 mr-2 bg-white p-1 rounded-lg"
                placeholder="Assignee name"
                type="text"
                name="assignee"
                value={filters.assignee || ""}
                onChange={handleFilterChange}
              />
              <select
                name="priority1"
                value={filters.priority1}
                onChange={handleFilterChange}
                className="w-40 rounded-lg mr-2 p-1"
              >
                <option value="">Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
              <input
                className="w-32 mr-2 rounded-lg p-1"
                type="date"
                name="startdate"
                value={filters.startdate || ""}
                onChange={handleFilterChange}
                placeholder="start date"
              />
              <input
                className="w-32 mr-2 rounded-lg p-1"
                type="date"
                name="enddate"
                value={filters.enddate || ""}
                onChange={handleFilterChange}
                placeholder="end date"
              />
            </div>

            <button
              className="w-40 bg-blue-800 text-white p-1 rounded-lg float-right"
              onClick={handleAddTaskModalOpen}
            >
              Add New Task
            </button>
          </div>

          <div className="mb-6 flex flex-row">
            <h3>Sort By:</h3>
            <select
              onChange={sortTasksByPriority}
              className="w-48 rounded-lg ml-2 p-1"
            >
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>

          <div className="flex flex-row">
            {filteredTasks.map((task) => (
              <Taskcard
                key={task.id}
                task={task}
                setTasks={setTasks}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        </div>

        {isModalOpen && (
          <AddTaskModal
            isOpen={isModalOpen}
            closeModal={handleAddTaskModalClose}
            addTask={handleAddTask}
          />
        )}
      </div> */}
      <div className="flex flex-col p-10 w-full min-h-screen bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="flex flex-row justify-between items-center mb-8">
          <h3 className="font-bold text-lg md:text-xl text-purple-800">
            Task Board
          </h3>
          <FaCircleUser className="text-purple-800" size={24} />
        </div>

        <div className="p-6 md:p-4 lg:p-6 border-2 border-white rounded-lg flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div className="flex flex-col md:flex-row w-full md:w-auto mb-4 md:mb-0">
              <h3 className="font-semibold mr-2 md:mr-4">Filter By:</h3>
              <input
                className="w-full md:w-28 lg:w-40 bg-white p-1 md:p-0 lg:p-1 rounded-lg mb-2 md:mb-0 md:mr-2 lg:mr-4"
                placeholder="Assignee name"
                type="text"
                name="assignee"
                value={filters.assignee || ""}
                onChange={handleFilterChange}
              />
              <select
                name="priority1"
                value={filters.priority1}
                onChange={handleFilterChange}
                className="w-full md:w-20 lg:w-32 bg-white p-1 rounded-lg mb-2 md:mb-0 md:mr-2 lg:mr-4"
              >
                <option value="">Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
              <input
                className="w-full md:w-32 bg-white p-1 rounded-lg mb-2 md:mb-0 md:mr-2 lg:mr-4"
                type="date"
                name="startdate"
                value={filters.startdate || ""}
                onChange={handleFilterChange}
                placeholder="start date"
              />
              <input
                className="w-full md:w-32 bg-white p-1 rounded-lg md:mr-2 lg:mr-4"
                type="date"
                name="enddate"
                value={filters.enddate || ""}
                onChange={handleFilterChange}
                placeholder="end date"
              />
            </div>

            <button
              className="w-full md:w-40 bg-blue-800 text-white p-1 rounded-lg mt-4 md:mt-0"
              onClick={handleAddTaskModalOpen}
            >
              Add New Task
            </button>
          </div>

          <div className="flex flex-row mb-6">
            <h3 className="font-semibold mr-2">Sort By:</h3>
            <select
              onChange={sortTasksByPriority}
              className="w-full md:w-48 bg-white p-1 rounded-lg"
            >
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>

          <div className="flex flex-row flex-wrap">
            {filteredTasks.map((task) => (
              <Taskcard
                key={task.id}
                task={task}
                setTasks={setTasks}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        </div>

        {isModalOpen && (
          <AddTaskModal
            isOpen={isModalOpen}
            closeModal={handleAddTaskModalClose}
            addTask={handleAddTask}
          />
        )}
      </div>
    </>
  );
}
