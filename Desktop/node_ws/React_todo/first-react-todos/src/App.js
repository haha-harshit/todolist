
// import logo from './logo.svg';
import './App.css';

import Header from "./myComponents/Header";
import {Todos} from "./myComponents/Todos";
import {Footer} from "./myComponents/Footer";

import React, { useState } from 'react';

function App() {
  
  const onDelete = (todo) =>{
    console.log("I am on Delete of ", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

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
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
