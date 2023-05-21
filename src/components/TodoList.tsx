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

  const completeTodo = (todo: Todo) => {
    return {
      ...todo,
      completed: !todo.completed,
    };
  };

  const handleCompleteClick = (todo: Todo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return completeTodo(t);
      } else {
        return t;
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <h1 className="text-neutral-800 text-3xl font-medium my-3">To do</h1>
        <div className="flex mb-4 items-center">
          <ul>
            {todos.map((todo) => (
              <li className="flex my-3" key={todo.id}>
                {todo.completed ? (
                  <p className="line-through text-green-400 mr-3">
                    {todo.text}
                  </p>
                ) : (
                  <p className="text-gray-800 mr-3"> {todo.text} </p>
                )}
                {!todo.completed ? (
                  <button
                    className="p-2 ml-auto mr-2 border-2 rounded hover:text-white text-green-400 
                border-green-400 hover:bg-green-400"
                    onClick={() => handleCompleteClick(todo)}
                  >
                    Done
                  </button>
                ) : (
                  <button
                    className="p-2 ml-auto mr-2 border-2 rounded hover:text-white text-gray-400 
                border-gray400 hover:bg-gray-400 w-auto"
                    onClick={() => handleCompleteClick(todo)}
                  >
                    Not Done
                  </button>
                )}
                <button
                  className="p-2 ml-4 mr-2 border-2 rounded hover:text-white text-red-400 
                border-red-400 hover:bg-red-400"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker my-3"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type todo"
        />
        <button
          className="p-2 border-2 rounded text-teal-400 border-teal-400 hover:text-white hover:bg-teal-400"
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
