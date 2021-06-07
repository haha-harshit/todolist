
import logo from './logo.svg';
import './App.css';

import Header from "./myComponents/header";
import {Todos} from "./myComponents/todos";
import {Footer} from "./myComponents/footer";

function App() {
  return (
    <>
      <Header title= "My Todos List" searchBar={true}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
