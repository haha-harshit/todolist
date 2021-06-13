import React, {useState} from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title/Description cannot be blank!");
        }else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    let myStyle = {
        // minHeight: "70vh",
        margin: "auto 5%",
        width: "auto",
        paddingTop: "20px",
        paddingBottom: "20px"

    }

    return (
        <>
        <div className="container" style={myStyle}>
            <h3 className="my-3">Add Your Task</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Task Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Task-Title"/>
                </div>
                <div className="form-group py-2">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Describe your Task..."/>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-sm btn-success my-2">Add to List</button>
            </form>
        </div>
        </>
    )
}
