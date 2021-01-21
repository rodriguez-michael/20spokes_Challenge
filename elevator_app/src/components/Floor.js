import React from 'react'

const Floor = ({ floor, index }) => {

  return (
    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px', alignContent: 'flex-end' }}>
      <div style={{backgroundColor: '#D8D8D8', borderStyle: 'solid', height: '100px', width: '100px'}}>
        <span style={{textDecoration: 'underline'}}>Floor {floor}</span>
      </div>
    </div>
  )
}

export default Floor
