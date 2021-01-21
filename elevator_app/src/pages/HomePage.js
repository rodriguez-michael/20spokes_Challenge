import React from 'react'
import { useRecoilState } from "recoil";
import { createGlobalState } from "../globalstate/atom"
import Button from "../components/Button"

const HomePage = () => {

  const [currentFloor, setCurrentFloor] = useRecoilState(createGlobalState);

  console.log(currentFloor)

  let floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
        Elevator App
      <div>
        {
          floors.map((floor, index) => (
            <Button floor={floor} index={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage
