import React, { useState } from 'react'
const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [responseValue, setResponseValue] = useState();
  
  // textarea; input value handler
  const handleChange = e => {
    setInputValue(e.target.value);
  }
  // form submit button handler
  async function submitToAPI(e) {
    e.preventDefault();
    const requestData = {
      prompt: `${inputValue}`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }
    const response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify(requestData),
    })
    const responseData = await response.json();
    console.log(responseData);
    setResponseValue(responseData.choices[0].text);
    // setInputValue(""); // for auto clear inputValue when submitted
  }

  const addToResultList = (responseData) => {
  }

  return (
    <div className="section">
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <label className="label">Enter prompt:</label>
            <div className="control">
              <textarea className="textarea"
                placeholder="Write something here..."
                value={inputValue}
                onChange={handleChange}>
              </textarea>
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
              >Submit</button>
              {/* <button className="button is-loading">Loading</button> */}
            </div>
          </div>
        </div>
      </div>

      <p>
        prompt: {inputValue}
      </p>
      <p>
        <strong>api: </strong>{responseValue}
      </p>

    </div>

  )
}
