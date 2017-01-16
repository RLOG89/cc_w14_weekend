import React from 'react'

const QuestionSelector = function({name, gender, eyeColour, hairColour}) {

  const handleChange = function (e) {
    e.preventDefault()
    let newIndex = e.target.value
    this.handleChange(newIndex)
  }

  return (
    <div className='question-selector'>
      <select id="select-question" onChange={handleChange}> 
        <option value="name">Is it</option>
        <option value="gender">Are they</option>
        <option value="eyeColour">Are their eyes</option>
        <option value="hairColour">Is their hair</option>
      </select>
    </div>
  )
}

export default QuestionSelector

//  what should value of div be here? //