import React from 'react';
import Countdown from 'react-countdown';

function Timer() {
    

  return (
    <div>
        
        <Countdown date={Date.now() + 30000} />
     


    </div>
  )
}

export default Timer