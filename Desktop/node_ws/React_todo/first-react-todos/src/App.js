
// import logo from './logo.svg';
import './App.css';

import Header from "./myComponents/Header";
import {Todos} from "./myComponents/Todos";
import {Footer} from "./myComponents/Footer";

function App() {

  let todos = [
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
  ]

  return (
    <>
      <Header title= "My Todos List" searchBar={true}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
