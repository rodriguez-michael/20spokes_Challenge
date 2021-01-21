import React, { useEffect, useState, useRef } from 'react'
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

  const [currentFloor] = useRecoilState(createGlobalState);

  const [elevatorStopped, setElevatorStopped] = useState(true)
  
  let prevFloor = usePrevious(currentFloor)
  
  const transition = document?.querySelector('.elevator');

  transition?.addEventListener('transitionstart', () => {
    setElevatorStopped(false)
  });

  transition?.addEventListener('transitionend', () => {
    setElevatorStopped(true)
  });


  const switchFloors = () => {
    if(currentFloor.floor === 1){
      return '508px'
    }else if(currentFloor.floor === 2){
      return '390px'
    }else if(currentFloor.floor === 3){
      return '275px'
    }else if(currentFloor.floor === 4){
      return '160px'
    }else if(currentFloor.floor === 5){
      return '41px'
    }else{
      return '508px'
    }
  }

  const elevatorSpeed = () => {
    let floorDifference = Math.abs(currentFloor.floor - prevFloor?.floor)
    return `all ${floorDifference}s`
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <button className='elevator' style={{backgroundColor: '#F0F8FF', color: 'black', height: '100px', width: '100px', transitionTimingFunction: 'linear', transition: elevatorSpeed(), marginTop: switchFloors()}}><span style={{textDecoration: 'underline'}}>Floor - {currentFloor.floor}</span> {elevatorStopped && <p>Elevator at desired floor, click button to change floors</p>}</button>
    </div>
  )
}

export default Elevator