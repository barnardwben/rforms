import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  return (
    <>
      <article>
        <h3>Practice with React forms</h3>
        <form className="form-container">
          <div>
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="age">Age : </label>
            <input type="text" id="age" name="age" />
          </div>
          <button type="submit">Submit Contact Info.</button>
        </form>
      </article>
    </>
  );
};

export default Form;
