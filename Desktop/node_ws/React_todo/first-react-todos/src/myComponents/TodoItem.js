import React from 'react'

export const TodoItem = ({todo, onDelete}) => {

    

    return (
        <>
        <div className="my-4">
            <h6 className="my-3">{todo.title}</h6>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todo)}> Remove Task! </button>
        </div>
        </>
    )
}
