import React from 'react'

export const AddTodo = () => {
    return (
        <>
        <div className="container">
            <h3 className="my-3">Add Your Task</h3>
            <form>
                <div className="form-group">
                    <label for="title">Task Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Task-Title"/>
                </div>
                <div className="form-group py-2">
                    <label for="desc">Description</label>
                    <input type="text" className="form-control" id="desc" placeholder="Describe your Task..."/>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-sm btn-success my-2">Add to List</button>
            </form>
        </div>
        </>
    )
}
