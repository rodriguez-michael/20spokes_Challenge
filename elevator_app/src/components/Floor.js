import React from 'react'
import { useRecoilState } from "recoil";
import { createGlobalState } from "../globalstate/atom"

const Floor = ({ floor, index }) => {

  const [currentFloor, setCurrentFloor] = useRecoilState(createGlobalState);

  return (
    <div style={{display: 'flex', flexDirection: 'column', marginTop: '100px', alignContent: 'flex-end' }}>
      <div>
        Floor {floor}
      </div>
    </div>
  )
}

export default Floor
