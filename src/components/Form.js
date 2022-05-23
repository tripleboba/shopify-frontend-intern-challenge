import React, { useState, Fragment } from 'react'
import ResponsesList from "../components/ResponsesList";
const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [responsesList, setResponsesList] = useState([]);

  // textarea-input-value handler
  const handleChange = e => {
    setInputValue(e.target.value);
  }
  const loadingButtonHandler = isLoading => {
    return isLoading ? "button is-loading" : "button is-success is-outlined"
  }
  const clearTextarea = e => {
    e.preventDefault();
    setInputValue("");
  }

  async function submitToAPI(e) {
    e.preventDefault();
    setLoading(true);
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

    const apiReturnData = await response.json()
      .then(setLoading(false))
    addToResponsesList(apiReturnData)
  }

  const addToResponsesList = apiReturnData => {
    const currentResponse = {
      id: apiReturnData.id,
      created: apiReturnData.created,
      prompt: inputValue,
      response: apiReturnData.choices[0].text
    }
    setResponsesList([{ ...currentResponse }, ...responsesList]);
  }

  return (
    <Fragment>
      <div className="container pt-4">
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
                <button className={loadingButtonHandler(isLoading)}
                  onClick={submitToAPI}>Submit</button>
                <button className="button is-danger is-outlined is-pulled-right"
                  onClick={clearTextarea}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsesList responsesList={responsesList} />
    </Fragment>
  )
}
