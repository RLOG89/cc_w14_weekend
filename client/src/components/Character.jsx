import React from 'react'

const Character = function({name, gender, eyeColour, hairColour, image}) {
  const divStyle = {backgroundImage: "url('" + image + "')"}
  return (
    <div className='character' style={divStyle}>
      <h5> {name} </h5>
    </div>
  )
}

// class Character extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const divStyle = {backgroundImage: {image}}
//       return (
//         <div className='character' style={divStyle}>
//           <h5> {name} </h5>
//         </div>
//         )
//   }
// }

export default Character