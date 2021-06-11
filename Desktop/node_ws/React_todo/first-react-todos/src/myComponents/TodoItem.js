import React from 'react'

export const TodoItem = ({todo, onDelete}) => {

    let myDesc = {
        // minHeight: "70vh",
        // display: "inline"
        float: "left"
    }
    let myButton = {
        float: "right"
    }
    
    return (
        <>
        <div className="my-4">
            <h5 className="my-3">{todo.title}</h5>
            <div><span style={myDesc}>{todo.desc}</span>
            <button className="btn btn-outline-danger btn-sm" style={myButton} onClick={()=>onDelete(todo)}> Remove Task! </button>
            </div>
        </div>
        </>
    )
}
