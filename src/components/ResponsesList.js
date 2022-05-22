import React from 'react'
import ResponseItem from './ResponseItem';

export default function ResponsesList(props) {
  const { responsesList } = props;

  const listOfResponses = responsesList.map((response) => (
    <ResponseItem
      key={response.id}
      {...response}
    />
  ));

  return (
    <div className='section'>
      <p className='title is-4'>Responses</p>
      {responsesList.length ? listOfResponses :
        (<div className="column">
          <span className="subtitle has-text-grey-light">No API response found!</span>
        </div>)
      }
    </div>
  )
}
