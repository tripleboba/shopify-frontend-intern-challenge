import React, { useState } from 'react'
const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [responseValue, setResponseValue] = useState();
  const [isLoading, setLoading] = useState(false);
  const loadingButtonHandler = (isLoading) => {
    return isLoading ? "button is-loading" : "button is-dark is-outlined"
  }
  const resultsList = [
    {
      id: '123',
      created: "date",
      prompt: 'abc',
      response: 'cba'
    }
  ];
  // textarea-input-value handler
  const handleChange = e => {
    setInputValue(e.target.value);
  }

  // form-submit-button handler
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
    try {
      const response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify(requestData),
      })
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const responseData = await response.json().then(setLoading(false));
      console.log(responseData);
      setResponseValue(responseData.choices[0].text);
      // setInputValue(""); // for auto clear inputValue when submitted
      addToResultList(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  const addToResultList = (responseData) => {
    resultsList.push(
      {
        id: responseData.id,
        created: responseData.created,
        prompt: inputValue,
        response: responseValue
      }
    );
    console.log("resutlsLits>>>"+resultsList)
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
              <button className={loadingButtonHandler(isLoading)}
                onClick={submitToAPI}>Submit</button>
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
