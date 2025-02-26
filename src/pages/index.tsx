"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High" | "Urgent";
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [priority, setPriority] = useState<
    "Low" | "Medium" | "High" | "Urgent"
  >("Low");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get<Task[]>(API_URL + "?_limit=7");
      setTasks(response.data);
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (): Promise<void> => {
    if (!newTask.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post<Task>(API_URL, {
        title: newTask,
        completed: false,
        priority,
      });
      setTasks([...tasks, response.data]);
      setNewTask("");
      setPriority("Low");
    } catch (err) {
      setError("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (id: number, completed: boolean): Promise<void> => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/${id}`, { completed: !completed });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !completed } : task
        )
      );
    } catch (err) {
      setError("Failed to update task");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      setError("Failed to delete task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <button className="mb-4 bg-blue-500 text-black py-2 px-4 rounded">
        + Add new task
      </button>
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Task</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Priority</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t">
                <td className="p-2">{task.title}</td>
                <td className="p-2">
                  {task.completed ? "✔ Done" : "⭕ In Progress"}
                </td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-black rounded ${
                      task.priority === "Urgent"
                        ? "bg-red-500"
                        : task.priority === "High"
                        ? "bg-yellow-500"
                        : task.priority === "Medium"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}>
                    {task.priority}
                  </span>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => toggleTask(task.id, task.completed)}
                    className="mr-2 text-green-500">
                    ✔
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500">
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Create New Task</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 w-full rounded mb-2"
          placeholder="Add a title"
        />
        <div className="mb-2">
          <label className="block font-semibold mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) =>
              setPriority(
                e.target.value as "Low" | "Medium" | "High" | "Urgent"
              )
            }
            className="border p-2 w-full rounded">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
        <button
          onClick={addTask}
          className="w-full bg-blue-500 text-black py-2 rounded">
          Create Task
        </button>
      </div>
    </div>
  );
}
