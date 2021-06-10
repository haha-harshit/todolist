import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className="">
            <h6>{todo.title}</h6>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todo)}> Remove Task! </button>
        </div>
        </>
    )
}
