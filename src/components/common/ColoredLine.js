import React from 'react'

const handleRender = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0
        }}
    />
);
function ColoredLine({color}) {
  return (
    handleRender({color})
  )
}

export default ColoredLine
