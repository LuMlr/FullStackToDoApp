import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form"


function App() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState({name: "", status: "", deadline: "", priority: "", created: "", done: false});
const [inputValue, setInputValue] = useState("");
const [inputStatus, setInputStatus] = useState("");
const [inputDeadline, setInputDeadline] = useState("");
const [inputPriority, setInputPriority] = useState("");
const [inputCreated, setInputCreated] = useState("");


    useEffect(() => {
        axios
        .get("http://localhost:3003/todos")
        .then((response) => {
          setTodos(response.data);
            // console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const handleChangeDone = () => {
      value === "on"? setInput()
    }
    console.log(todos)
    console.log(input.done)
  return <>
    
    <div className="App">
      <Form 
      input={input}
      setInput={setInput}

      />
      {todos.map((todo) => {
        
        return( <>
        <input type="checkbox" onChange={handleChangeDone} />
        <h3>{todo.value}</h3>
        <p>Deadline: {todo.deadline}</p>
        <p>Priority: {todo.priority} </p>
        </>)

      })}
      
      </div>
      </>
  
}

export default App;