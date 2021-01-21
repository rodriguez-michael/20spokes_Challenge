import React, { useEffect, useRef } from 'react'
import { useRecoilState } from "recoil";
import { createGlobalState } from "../globalstate/atom"


function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

const Elevator = () => {

  const [currentFloor, setCurrentFloor] = useRecoilState(createGlobalState);
  
  let prevFloor = usePrevious(currentFloor) 

  const switchFloors = () => {
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

  const elevatorSpeed = () => {
    let floorDifference = Math.abs(currentFloor.floor - prevFloor?.floor)
    return `all ${floorDifference}s`
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <button className='elevator' style={{backgroundColor: 'blue', color: 'white', transitionTimingFunction: 'linear', transition: elevatorSpeed(), marginTop: switchFloors()}}>Elevator - {currentFloor.floor}</button>
    </div>
  )
}

export default Elevator