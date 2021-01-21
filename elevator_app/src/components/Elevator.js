import React from 'react'
import { useRecoilState } from "recoil";
import { createGlobalState } from "../globalstate/atom"

const Elevator = () => {

  const [currentFloor, setCurrentFloor] = useRecoilState(createGlobalState);

  const handleMargin = () => {
    if(currentFloor.floor === 1){
      return '580px'
    }else if(currentFloor.floor === 2){
      return '460px'
    }else if(currentFloor.floor === 3){
      return '340px'
    }else if(currentFloor.floor === 4){
      return '220px'
    }else if(currentFloor.floor === 5){
      return '100px'
    }else{
      return '580px'
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <button className='elevator' style={{backgroundColor: 'blue', color: 'white', marginTop: handleMargin()}}>Elevator - {currentFloor.floor}</button>
    </div>
  )
}

export default Elevator