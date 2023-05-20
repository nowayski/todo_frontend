import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <h1 className="text-neutral-800 text-3xl font-medium my-3">To do</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} />
              {todo.text}
            </li>
          ))}
          <li></li>
        </ul>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker my-3"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type todo"
        />
        <button
          className="p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
