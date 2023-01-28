import React, {useState} from "react";
import axios from "axios";

function Form({input, setInput}) {
  // const [input, setInput] = useState({name: "", status: "", deadline: "", priority: "", created: "", done: false});
  
  const handleChange = ({target}) => {
    setInput({
      ...input,
      [target.name]: [target.value]
    })
  }

  const submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3003/todos", {

    
    });
  };
  console.log(input)
  return (
    <div>
      <form onSubmit={submit} method="post" className="form-example">
        <div className="form-example">
          <label for="name">Enter your ToDo: </label>
          <input onChange={handleChange} type="text" name="name" value={input.name} id="name" required />
        </div>
      

      <div className="form-example">
        <label for="start">Deadline: </label>
        <input
          type="date"
          onChange={handleChange} 
          id="start"
          name="deadline"
          value={input.deadline}
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>

      <div className="form-example">
        <label for="start">Todo created: </label>
        <input
          type="date"
          onChange={handleChange} 
          id="start"
          name="created"
          value={input.created}
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>

      <div className="form-example">
        <label for="tentacles">Priority (1-10):</label>
        <input
          type="number"
          onChange={handleChange} 
          id="tentacles"
          name="priority"
          min="1"
          max="10"
        ></input>
      </div>
      </form>

      <div className="form-example">
        <input type="submit" value="submit" />
      </div>
    </div>

  );
}

export default Form;
