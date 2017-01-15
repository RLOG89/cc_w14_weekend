import React from 'react'

const Character = function({name, gender, eyeColour, hairColour, image}) {
  const divStyle = {backgroundImage: "url('" + image + "')"}
  return (
    <td className='character' style={divStyle}>
      <h5> {name} </h5>
    </td>
  )
}

export default Character