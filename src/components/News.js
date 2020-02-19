import React from 'react'
import Rainbow from '../hoc/Rainbow'

const News = (props) => {
  return (
    <div>
      <div className="container">
        <h4 className="center">News</h4>
        <p>Find all the newest news right here!</p>
      </div>
    </div>
  )
}

export default Rainbow(News)