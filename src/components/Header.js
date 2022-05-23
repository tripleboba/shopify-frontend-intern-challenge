import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <Link to="/api">
          <p className="heading">OPENAI API</p>
          <p className="heading-9">API model: Completions</p>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <Link to="/">
          <p className="heading">Home</p>
          <p className="title">Ashley Tran</p>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <Link to="/answers">
          <p className="heading">Application's Questions</p>
          <p className="heading-9">Answers</p>
        </Link>
      </div>
    </nav>
  )
}
