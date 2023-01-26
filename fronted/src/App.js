import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form"


function App() {
const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3003/todos")
        .then((response) => {
          setTodos(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
  return (
    <div className="App">
      <Form />
      {todos.map((todo) => {
        return <>
        <p> {todo.value} </p>
        </>

      })}
      
      </div>
  );
}

export default App;