import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import { FaTrashAlt } from "react-icons/fa";

const SingleItem = ({ item }) => {
  const { name, completed, id } = item;

  const { removeItem, toggleItem } = useContext(TaskContext);

  return (
    <div className="flex items-center justify-between rounded-md">
      <div className="w-full">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleItem(id)}
          className="h-4 w-5 text-blue-600"
        />
        <span
          style={{ textDecoration: completed ? "line-through" : "none" }}
          className="capitalize text-gray-800 ml-2 text-lg font-medium "
        >
          {name}
        </span>
      </div>

      <button
        type="button"
        onClick={() => removeItem(id)}
        className="text-slate-950 hover:text-slate-700"
      >
        <FaTrashAlt size={20} />
      </button>
    </div>
  );
};

export default SingleItem;
