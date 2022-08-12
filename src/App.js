import { useState, useEffect } from "react"
import Break from "./components/Break"
import Session from "./components/Session"
import TimeLeft from "./components/TimeLeft"
import { useRef } from "react"
import {
  MainWrap,
  BreakAndSession,
  Button
} from "./components/styledComponents"

function App() {
  const audioElement = useRef(null)
  const [currentSessionType, setCurrentSessionType] = useState("Session")
  const [intervalId, setIntervalId] = useState(null)
  const [sessionLength, setSessionLength] = useState(60 * 25)
  const [breakLength, setBreakLength] = useState(300)
  const [timeLeft, setTimeLeft] = useState(sessionLength)
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    setTimeLeft(sessionLength)
  }, [sessionLength])

  useEffect(() => {
    if (timeLeft === 0) {
      audioElement.current.play()
      if (currentSessionType === "Session") {
        setCurrentSessionType("Break")
        setTimeLeft(breakLength)
      } else if (currentSessionType === "Break") {
        setCurrentSessionType("Session")
        setTimeLeft(sessionLength)
      }
    }
  }, [breakLength, currentSessionType, sessionLength, timeLeft])

  const decrementSessionLengthByOneMinute = (e) => {
    if(sessionLength === 60) return
    const newSessionLength = sessionLength - 60
    if (newSessionLength < 0) {
      setSessionLength(0)
    } else {
      setSessionLength(sessionLength - 60)
    }
  }
  
  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60)
  }
 
  const decrementBreakLengthByOneMinute = () => {
    if(breakLength === 60) return
    
    const newBreakLength = breakLength - 60
    if (newBreakLength < 0) {
      setBreakLength(0)
    } else {
      setBreakLength(breakLength - 60)
    }
  }
  
  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60)
  }

  const isStarted = intervalId !== null
  const handleStartStopClick = () => {
    setDisable((prevState) => !prevState)
    if (isStarted) {
      clearInterval(intervalId)
      setIntervalId(null)
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
      }, 1000) // TODO: turn back into 1000

      setIntervalId(newIntervalId)
    }
  }

  const handleResetButtonClick = () => {
    setDisable(false)
    audioElement.current.load()
    clearInterval(intervalId)
    setIntervalId(null)
    setCurrentSessionType("Session")
    setSessionLength(60 * 25)
    setBreakLength(60 * 5)
    setTimeLeft(60 * 25)
  }

  return (
    <MainWrap>
      <h1>Pomodoro 25 + 5 </h1>
      <BreakAndSession>
        <Session
          sessionLength={sessionLength}
          decrementSessionLengthByOneMinute={(e)=> decrementSessionLengthByOneMinute(e)}
          incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
          isDisable={disable}
        />
        <Break
          breakLength={breakLength}
          decrementBreakLengthByOneMinute={(e)=>decrementBreakLengthByOneMinute(e)}
          incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
          isDisable={disable}
        />
      </BreakAndSession>
      <TimeLeft
        timerLabel={currentSessionType}
        handleStartStopClick={handleStartStopClick}
        startStopButtonLabel={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
        triggerDisable={setDisable}
      />

      <Button onClick={handleResetButtonClick}>Reset</Button>
      <audio ref={audioElement}>
        <source
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/wav"
        />
      </audio>
    </MainWrap>
  )
}

export default App
