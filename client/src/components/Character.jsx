import React from 'react'

const Character = function({name, gender, eyeColour, hairColour, image}) {
  return (
    <div className='character'>
      <h5> Character </h5>
      <img src = {image} />
     <h4> {name} {gender} {eyeColour} {hairColour} </h4>
    </div>
  )
}

export default Character