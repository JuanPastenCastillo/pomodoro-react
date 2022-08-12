import styled from "styled-components"

export const MainWrap = styled.div`
  text-align: center;
  background-color: azure;
  color: black;
  padding: 5px;
  border-radius: 5px;

  & > h1 {
    margin: 0;
  }
`

export const BreakAndSession = styled.div`
  display: flex;

  & > div {
    width: 100%;
    border: 3px hsl(855.8, 85%, 30%) solid;
    align-items: center;
    justify-content: center;
  }

  & > div:first-child {
    border-right: none;
  }

  & > div > p {
    text-align: center;
  }

  & > div > button {
    width: 33%;
    outline: none;
    background-color: hsl(855.8, 85%, 30%);
    color: snow;
    font-size: 1rem;
    cursor:pointer;
    border:1px white solid;
  }
  
  & >div > button:hover{
    background-color: hsl(855.8, 85%, 40%);
  }
  & >div > button:disabled{
    background-color: hsl(855.8, 85%, 10%);
    cursor:not-allowed;
  }
`

export const Button = styled.button`
  width: 33%;
  outline: none;
  background-color: hsl(855.8, 85%, 30%);
  color: snow;
  font-size: 1rem;
  cursor:pointer;
  border:1px white solid;
  
  &:hover{
    background-color: hsl(855.8, 85%, 40%);
  }
  
  & >div > button:disabled{
    background-color: hsl(855.8, 85%, 10%);
    cursor:not-allowed;
  }
  
  
`
