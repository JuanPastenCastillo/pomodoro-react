import React from "react"
import moment from "moment"

const Break = ({breakLength, decrementBreakLengthByOneMinute, incrementBreakLengthByOneMinute, isDisable}) => {
  

  const breakLengthInMinute = moment.duration(breakLength, "s").minutes()
  
  return (
    <div>
      <p>Break: {breakLengthInMinute}</p>
      <button disabled={isDisable} onClick={decrementBreakLengthByOneMinute}>-</button>
      <button disabled={isDisable} onClick={incrementBreakLengthByOneMinute}>+</button>
    </div>
  )
}

export default Break
