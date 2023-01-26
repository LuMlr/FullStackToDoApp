import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3003/todos")
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
  return (
    <div className="App">
      {todos.map((todo) => {
        return <p> {todo.value} </p>
      })}

      </div>
  );
}

export default App;