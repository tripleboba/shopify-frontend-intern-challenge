import React, { useState, useEffect } from 'react'
import request from '../routes/request';

import { Configuration, OpenAIApi } from "openai";

export default function Form() {
  const [inputValue, setInputValue] = useState();
  const [responseValue, setResponseValue] = useState();

  const handleChange = e => {
    setInputValue(e.target.value);
  }
  // send prompt to openAI
  const submitToAPI = (e) => {
    e.preventDefault();
    // alert("input: " + inputValue);
    // useEffect(() => )
    
    // ---- OPEN AI -----
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    openai.createCompletion("text-curie-001", {
      prompt: `${inputValue}`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then(res => {
      setResponseValue(res.data.choices[0].text)
    })
    // ----------------------
    
  }

  return (
    <div className="container">
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <label className="label">Enter prompt:</label>
            <div className="control">
              <textarea className="textarea" placeholder="Write something here..."
                value={inputValue} onChange={handleChange}></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-dark is-outlined"
                onClick={submitToAPI}> Submit </button>
            </div>
          </div>
        </div>
      </div>
      <p>
        {inputValue}
      </p>
      <p>
        api: {responseValue}
      </p>
    </div>

  )
}
