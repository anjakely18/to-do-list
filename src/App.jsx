import { useEffect, useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import Form from "./Form";
import Items from "./Items";
import { TaskProvider } from "./TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <main className="min-h-screen bg-stone-900 flex items-center justify-center">
        <div className="bg-white w-11/12 max-w-md flex flex-col items-center p-7 min-h-[550px] rounded-xl">
          <div className="flex">
            <FaCalendarPlus size={38} className="mr-3" />
            <h1 className="font-serif text-5xl font-bold text-gray-800 mb-11 uppercase tracking-wide">
              to-do list
            </h1>
          </div>

          <Form />
          <Items />
        </div>
      </main>
    </TaskProvider>
  );
};

export default App;
