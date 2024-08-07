import React, { useContext } from "react";
import SingleItem from "./SingleItem";
import { TaskContext } from "./TaskContext";

const Items = () => {
  const { items } = useContext(TaskContext);
  return (
    <div className="space-y-4 mt-6 w-80">
      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
