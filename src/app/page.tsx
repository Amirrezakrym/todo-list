'use client'

import { useState } from "react";
import { TodoObject } from "./models/Todo";
const Home = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoObject[]>([]);
  
  const addTodo = () =>{
    setTodos([...todos,{id:"1", value:todo, done:false}])
    setTodo("")
  }
  return (
    <>
    <header className="bg-slate-950 p-4">
      <h1 className="text-3xl">Todos</h1>
    </header>
    <main className="p-4">
      <input 
      type="text" 
      placeholder="Enter a new todo"
      className="p-2 rounded mr-5 text-slate-900"
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      />
      <button 
      type="button"
      className="border-2 p-2 rounded"
      onClick={() => addTodo()}
      >Add Todo</button>
      <ul className="mt-5">
        <li className="text-3xl ml-5 cursor-pointer">Toooooodoooooo</li>
      </ul>
    </main>
    </>
  );
}

export default Home;