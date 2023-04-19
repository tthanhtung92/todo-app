import React, { useState } from "react";

const AddTodo = (props) => {
  const addTodo = props.addTodoFunc;
  const [title, setTitle] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const addSingleTodo = (e) => {
    e.preventDefault();
    if (title !== "") {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <div className="mb-4 w-10/12">
      <form onSubmit={addSingleTodo} className="flex justify-between sm:justify-normal items-end">
        <div className="w-max h-max sm:mr-4">
          <label htmlFor="add_todo" className="block mb-2 text-lg w-max font-medium text-gray-900">
            Thêm việc cần làm
          </label>
          <input
            type="text"
            id="add_todo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-60 p-2.5"
            placeholder="Đi chợ, nấu cơm,..."
            onChange={changeTitle}
            value={title}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 w-20 h-11 rounded-xl font-medium"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
