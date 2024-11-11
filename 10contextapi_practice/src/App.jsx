import React, {useContext, useState} from "react"
import TodoContext from "./TodoContext"
function App() {
  const {todos, addTodo, deleteTodo, updateTodo} = useContext(TodoContext);
  const[newTodo, setNewTodo] = useState('');
  const[editTodoId, setEditTodoId] = useState(null);
  const[editText, setEditText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  // Update an existing to-do
  const handleUpdateTodo = () => {
    if (editText.trim()) {
      updateTodo(editTodoId, editText);
      setEditTodoId(null);
      setEditText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex gap-2 mb-4">
          <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new Task"
          className="border rounded-lg p-2 w-full"
          />
          <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >Add</button>
          <ul>
            {
              todos.map((todo) => (
                <li
                key={todo}
                className="flex justify-between items-center mb-2 p-2 border rounded-lg"
                >
                  {editTodoId === todo.id ? (
                    <>
                    <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                    />
                    <button onClick={handleUpdateTodo} className="text-green-500 ml-2">
                    Save
                    </button>
                    </>
                  ):(
                    <>
                    <span>{todo.text}</span>
                    <div>
                      <button
                      onClick={() => {
                        setEditTodoId(todo.id);
                        setEditText(todo.text);
                      }}
                      className="text-blue-500 mr-2"
                      >Edit</button>
<button onClick={() => deleteTodo(todo.id)} className="text-red-500">Delete</button>

                    </div>
                    </>
                  )}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
