import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <article>
        <form className="form-container">
          <div>
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
        </form>
      </article>
    </>
  );
};

export default Form;
