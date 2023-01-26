import React from 'react'

function Form() {
  return (
    <div>
<form action="" method="get" className="form-example">
  <div className="form-example">
    <label for="name">Enter your ToDo: </label>
    <input type="text" name="name" id="name" required />
  </div>
  
  <div className="form-example">
    <input type="submit" value="Add Todo!" />
  </div>
</form>

    </div>
  )
}

export default Form