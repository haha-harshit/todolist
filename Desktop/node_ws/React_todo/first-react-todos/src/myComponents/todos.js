import React from 'react'

import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <>
        <div className = "container">
            <h3 className="text-center my-4">Todo's List</h3>
            {/* {props.todos} */}

            {props.todos.length===0? "No Todos to Display!" : 
            props.todos.map( (todoo) => {
                return <TodoItem todo={todoo} key={todoo.sno} onDelete={props.onDelete}/>
            })}
            
        </div>
        </>
    )
}
