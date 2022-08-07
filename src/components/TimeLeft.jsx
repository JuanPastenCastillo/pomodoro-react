import React from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"
import { Button } from "./styledComponents"
import { useEffect } from "react"

momentDurationFormatSetup(moment)

const TimeLeft = ({
  timeLeft,
  timerLabel,
  handleStartStopClick,
  startStopButtonLabel,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false })
    
    useEffect(() => {
      document.title = `${timerLabel}: ${formattedTimeLeft}`
    },[formattedTimeLeft, timerLabel])

  return (
    <div>
      <p>Actual state: {timerLabel}</p>
      <p>{formattedTimeLeft}</p>
      <Button
        onClick={() => {
          handleStartStopClick()
        }}
      >
        {startStopButtonLabel}
      </Button>
    </div>
  )
}

export default TimeLeft
