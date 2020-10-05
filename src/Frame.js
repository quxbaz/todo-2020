import React from 'react'

const rootStyle = {
  fontFamily: 'arial, sans',
  fontSize: '14px',
  // outline: '1px solid red',
}

function Frame ({children}) {
  return (
    <div style={rootStyle}>
      {children}
    </div>
  )
}

export default Frame
