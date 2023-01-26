import React from 'react'

function Form() {
  return (
    <div>
<form action="" method="get" className="form-example">
  <div className="form-example">
    <label for="name">Enter your ToDo: </label>
    <input type="text" name="name" id="name" required />
  </div>
</form>

<div className="form-example">
<label for="start">Deadline: </label>
<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />
 </div>      

 <div className="form-example">
<label for="start">Todo created: </label>
<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />
 </div> 


 <div className="form-example">
      <label for="scales">Completed</label>
      <input type="checkbox" id="scales" name="scales" />
    </div>

    <div className="form-example">
    <label for="tentacles">Priority (1-10):</label>
    <input type="number" id="tentacles" name="tentacles"
       min="10" max="100"></input>
       </div>


<div className="form-example">
    <input type="submit" value="Add Todo!" />
  </div>
    </div>

    
  )
}

export default Form