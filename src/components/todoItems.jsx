import React, { useState } from 'react'
import { useTodo } from '../contexts';

// yha todo wo h jo pura object aa rha h 
function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () =>{
        toggleComplete(todo.id)
    }

    false 



    return (
        <div
            className={`text-lg flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#b8aab75e]" : "bg-[#b39ebac4]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`h-8  border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-pink-900 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-6 h-6 my-1 rounded-lg text-sm  justify-center items-center shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ?<svg className="h-6 w-6 text-blue-700 hover:text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>

                  : 
                    <svg className="h-6 w-6 text-green-900/60 hover:text-green-900"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-6 h-6 my-1 rounded-lg text-sm justify-center items-center  shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
               <svg className="h-6 w-5 text-red-800 hover:text-red-700"   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>



            </button>
        </div>
    );
}

export default TodoItem;
