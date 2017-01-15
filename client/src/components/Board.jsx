import React from 'react'
import Character from './Character.jsx'

const Board = function ({characters}) {
  return (
    <table className='board'>
      <tbody>
        <tr>
    {characters.map(function(char, index) {
      return (
        <Character key={index} name={char.name} image={char.image} />
        )
    })}
        </tr>
      </tbody>
    </table>
    )
}

export default Board