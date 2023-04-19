import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todosState, setTodosState] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        await axios.get("https://643fbbf13dee5b763e23f125.mockapi.io/todos").then((res) => {
          setTodosState(res.data);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getTodos();
  }, []);

  const addTodo = async (newTitle) => {
    try {
      await axios
        .post("https://643fbbf13dee5b763e23f125.mockapi.io/todos", { title: newTitle })
        .then((res) => {
          const newTodos = [...todosState, res.data];
          setTodosState(newTodos);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const markComplete = async (id) => {
    try {
      const todoHaveToMarkComplete = todosState.filter((todo) => todo.id == id);
      await axios
        .put(`https://643fbbf13dee5b763e23f125.mockapi.io/todos/${todoHaveToMarkComplete[0].id}`, {
          completed: !todoHaveToMarkComplete.completed,
        })
        .then(() => {
          const newTodos = todosState.map((todo) => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
          });
          setTodosState(newTodos);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const todoHaveToDelete = todosState.filter((todo) => todo.id == id);
      await axios
        .delete(`https://643fbbf13dee5b763e23f125.mockapi.io/todos/${todoHaveToDelete[0].id}`)
        .then(() => {
          const newTodos = todosState.filter((todo) => todo.id !== id);
          setTodosState(newTodos);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddTodo addTodoFunc={addTodo} />
      <div className="bg-slate-300 rounded-xl min-w-[800px]">
        {todosState.map((item) => {
          return (
            <TodoItem
              todoProps={item}
              markCompleteFunc={markComplete}
              deleteTodoFunc={deleteTodo}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Todos;
