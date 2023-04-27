import React from 'react'

function Footer() {
  const textStyle = {
    color: 'grey',
    marginRight: '50px', // Adjust this value to increase or decrease the space between text elements
  }

  return (
    <div className='flex justify-between items-center px-40 h-[100px]'>
      <div style={textStyle}>Copyright 2023 Kerja IT</div>
      <div>
        <span style={textStyle}>Email</span>
        <span style={textStyle}>Twitter</span>
      </div>
    </div>
  )
}

export default Footer
