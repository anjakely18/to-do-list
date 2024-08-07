import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const Form = ({ setItems }) => {
  const [itemName, setItemName] = useState("");
  const { addItem } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Si il n'y a pas de valeur dans le formulaire
    if (itemName === "") {
      console.log("Saisir une valeur");
      return;
    }
    const item = { name: itemName, completed: false, id: nanoid() };
    //Ajoute le nouvel élément au tableau
    addItem(item);
    setItemName("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Ajouter une tâche"
        className="border border-gray-500 shadow-sm rounded-xl px-4 py-2"
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 m-1 text-white rounded-md font-semibold hover:bg-blue-700"
      >
        Ajouter
      </button>
    </form>
  );
};

export default Form;
