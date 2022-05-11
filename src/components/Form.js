import React, { useState } from 'react'

export default function Form() {

  const [inputValue, setInputValue] = useState();
  const handleChange = e => {
    setInputValue(e.target.value);
  }
  const submitToAPI = (e) => {
    e.preventDefault();
    alert("input: " + inputValue);
  }

  return (

    <div className="container">
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <label className="label">Enter prompt:</label>
            <div className="control">
              <textarea className="textarea" placeholder="Write something here..."
                value={inputValue} onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-dark is-outlined"
                onClick={submitToAPI}
              >Submit!</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
