import React from 'react'

import {TodoItem} from "./TodoItem";

export const Todos = (props) => {

    let myStyle = {
        minHeight: "100vh",
        margin: "auto 5%",
        width: "auto"
    }

    let noTodoStyleOut = {
        height: "auto",
        border: "2px dashed darkgrey",
        display: "flex",
        opacity: "0.7"
    }

    let noTodoStyleIn = {
        justifycontent: "center",
        alignItems: "center",
        display: "flex",
        margin: "auto",
        fontSize: "30px",
        opacity: "0.4",
    }

    return (
        <>
        <div className = "container" style={myStyle}>
            <h3 className="my-5">Todo's List</h3>
            {/* {props.todos} */}

            {props.todos.length===0? 
                <div style={noTodoStyleOut}>
                    <div style={noTodoStyleIn}>
                    No Todos to Display!
                    </div>
                </div> : 
            props.todos.map( (todo) => {
                return (
                    <>
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <br/> <hr />
                    </>
                    )
            })}
            
        </div>
        </>
    )
}
