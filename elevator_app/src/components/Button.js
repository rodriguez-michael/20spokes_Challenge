import React from 'react'
import { useRecoilState } from "recoil";
import { createGlobalState } from "../globalstate/atom"

const Button = ({ floor, index}) => {

  const [currentFloor, setCurrentFloor] = useRecoilState(createGlobalState);

  const handleClick = () => {
    setCurrentFloor((prevState) => {
      return {
        ...prevState,
        floor: (prevState = floor)
      }
    })
  }

  return (
    <div>
      <button onClick={handleClick}>{floor}</button>
    </div>
  )
}

export default Button
