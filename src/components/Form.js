

import React from "react";

function Form({firstName, handleChange, handleChangeLast, lastName}) {
  
  return (
    <form>
      <input type="text" value={firstName} onChange={handleChange}/>
      <input type="text" value={lastName} onChange={ handleChangeLast}/>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label> 
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;