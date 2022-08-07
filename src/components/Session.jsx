import React from "react"
import moment from "moment"


const Session = ({ sessionLength, decrementSessionLengthByOneMinute, incrementSessionLengthByOneMinute, isDisable }) => {

  const sessionLengthInMinute = moment.duration(sessionLength, "s").minutes()

  return (
    <div>
      <p>Session: {sessionLengthInMinute}</p>
      <button disabled={isDisable} onClick={decrementSessionLengthByOneMinute}>-</button>
      <button disabled={isDisable} onClick={incrementSessionLengthByOneMinute}>+</button>
    </div>
  )
}

export default Session
