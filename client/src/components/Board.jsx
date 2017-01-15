import React from 'react'
import Character from './Character.jsx'

const Board = function ({characters}) {
  return (
    <div>
    <h3> Board </h3>
    {characters.map(function(char, index) {
      return (
        <Character key={index} image={char.image} />
      )
    })}
    </div>
  )
}

export default Board