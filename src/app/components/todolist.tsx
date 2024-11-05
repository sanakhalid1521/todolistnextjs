// components/TodoList.tsx
import { useState } from "react";

interface Todo {
  id: number;
  task: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddOrEditTodo = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh on form submission
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, task: inputValue } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      const newTodo: Todo = { id: Date.now(), task: inputValue };
      setTodos([...todos, newTodo]);
    }
    setInputValue("");
  };

  const handleEditTodo = (index: number) => {
    setInputValue(todos[index].task);
    setEditIndex(index);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col p-4 max-w-screen-sm bg-center mx-auto items-center justify-center bg-purple-400">
      <h1 className="text-wrap font-bold mb-5 text-green-900">To-Do List by Sana Khalid</h1>
      <form className="flex mb-5" onSubmit={handleAddOrEditTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          className="border rounded-l-md p-2 text-black focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-black rounded-r-md px-4"
        >
          {editIndex !== null ? "Edit" : "Add"}
        </button>
      </form>
      <ul className="w-1/2 text-black" >
        {todos.map((todo, index) => (
          <li key={todo.id} className="flex justify-between items-center bg-white  p-3 rounded-md shadow-md mb-2">
            <span className="flex-1">{todo.task}</span>
            <div className="flex space-x-2 ml-4"> {/* Added ml-4 for spacing */}
              <button
                onClick={() => handleEditTodo(index)}
                className="bg-yellow-500 text-white px-2 rounded-md text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-500 text-white px-2 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
