import React from 'react'
import Button from "../components/Button"
import Floor from "../components/Floor"
import Elevator from "../components/Elevator"

const HomePage = () => {

  let floors = [5, 4, 3, 2, 1]

  return (
    <div>
        <h1 style={{color: 'black', textDecoration: 'underline', fontSize: '50px'}}>Elevator App</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{marginTop: '140px'}}>
          Pick a Floor
          {
            floors.map((floor, index) => (
              <Button key={index }floor={floor} index={index}/>
            ))
          }
        </div>
        <div>
          
        </div>
        <div style={{marginTop: '40px', marginLeft: '50px'}}>
          {
            floors.map((floor, index) => (
              <Floor key={index} floor={floor} index={index} />
            ))
          }
        </div>
        <div style={{marginLeft: '20px'}}>
          <Elevator />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
