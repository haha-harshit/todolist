import React from 'react'

import {TodoItem} from "./TodoItem";

export const Todos = (props) => {

    let myStyle = {
        minHeight: "100vh",
        margin: "auto 5%",
        width: "auto"
    }

    return (
        <>
        <div className = "container" style={myStyle}>
            <h3 className="my-5">Todo's List</h3>
            {/* {props.todos} */}

            {props.todos.length===0? "No Todos to Display!" : 
            props.todos.map( (todoo) => {
                return (
                    <>
                        <TodoItem todo={todoo} key={todoo.sno} onDelete={props.onDelete}/> <br/> <hr />
                    </>
                    )
            })}
            
        </div>
        </>
    )
}
