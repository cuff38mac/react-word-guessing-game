import React from 'react'


function Score(props) {
    

  return (
    <div>
        <div>
            <h2>Final Score:</h2><h1>{props.updateScore}</h1> 
        </div>
    </div>
  )
}

export default Score;