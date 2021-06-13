
// import logo from './logo.svg';
import './App.css';

import Header from "./myComponents/Header";
import { AddTodo } from "./myComponents/AddTodo";
import {Todos} from "./myComponents/Todos";
import {Footer} from "./myComponents/Footer";

import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //todo delete function
  const onDelete = (todo) =>{
    console.log("I am on Delete of ", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    // localStorage.setItem("todos", JSON.stringify(todos)); 
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  // todo add function
  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);

    let sno;
    if(todos.length===0){
      sno = 1;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno, 
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

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
