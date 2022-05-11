import React from 'react'

export default function ResponseItem(props) {
  
  const { response, prompt } = props;

  return (
    <div className="card mb-3 has-background-grey-lighter">
      <div className="card-content">
        <div className="content">
          <div className='container mb-2'>
            <div className="columns">
              <div className="column is-one-fifth"><strong>Prompt:</strong></div>
              <div className="column">{prompt}</div>
            </div>
          </div>
          <div className='container mt-2'>
            <div className="columns">
              <div className="column is-one-fifth"><strong>Response:</strong></div>
              <div className="column">{response}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
