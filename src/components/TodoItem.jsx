import React from "react";

const TodoItem = (props) => {
  const todo = props.todoProps;
  const markComplete = props.markCompleteFunc;
  const deleteTodo = props.deleteTodoFunc;

  return (
    <div className="flex justify-between items-center m-3 bg-slate-50 rounded-md">
      <div className="flex items-center pl-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          checked={todo.completed}
          onChange={markComplete.bind(this, todo.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-700"
        >
          {todo.title}
        </label>
      </div>

      <button
        onClick={deleteTodo.bind(this, todo.id)}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 m-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
