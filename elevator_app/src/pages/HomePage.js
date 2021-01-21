import React from 'react'
import { useRecoilState } from "recoil";
import { createGlobalState } from "../globalstate/atom"
import Button from "../components/Button"
import Floor from "../components/Floor"
import Elevator from "../components/Elevator"

const HomePage = () => {

  const [currentFloor, setCurrentFloor] = useRecoilState(createGlobalState);

  let floors = [5, 4, 3, 2, 1]

  return (
    <div>
        <h1>Elevator App</h1>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div style={{marginTop: '200px'}}>
          {
            floors.map((floor, index) => (
              <Button key={index }floor={floor} index={index}/>
            ))
          }
        </div>
        <div>
          {
            floors.map((floor, index) => (
              <Floor key={index} floor={floor} index={index} />
            ))
          }
        </div>
        <div>
          <Elevator />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
