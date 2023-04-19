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
    <div className="mb-4 min-w-[1000px]">
      <form onSubmit={addSingleTodo} className="flex justify-evenly items-end">
        <div className="w-96">
          <label
            htmlFor="add_todo"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-900"
          >
            Thêm việc cần làm
          </label>
          <input
            type="text"
            id="add_todo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-540 p-2.5"
            placeholder="Đi chợ, nấu cơm,..."
            onChange={changeTitle}
            value={title}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full h-11 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
