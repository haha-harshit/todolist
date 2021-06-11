
// import logo from './logo.svg';
import './App.css';

import Header from "./myComponents/Header";
import { AddTodo } from "./myComponents/AddTodo";
import {Todos} from "./myComponents/Todos";
import {Footer} from "./myComponents/Footer";

import React, { useState } from 'react';

function App() {
  
  //todo delete function
  const onDelete = (todo) =>{
    console.log("I am on Delete of ", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

  }

  // todo add function
  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno, 
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Market",
      desc: "Buy vegetables"
    },
    {
      sno: 2,
      title: "University",
      desc: "Submit Assignment"
    },
    {
      sno: 3,
      title: "Home",
      desc: "Clean the house"
    },
  ]);

  return (
    <>
      <Header title= "My Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
