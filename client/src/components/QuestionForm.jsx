import React from 'react'

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {question:''}
  }
  handleTextChange(e) {
    this.setState({question: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    checkForMatch(e.target.value)
  }
  checkForMatch(str) {
    let match = ''
    const strTidy = str.trim().toLowerCase()
    const attributes = oppCharacter.map(function(char, index) {
    if(strTidy.includes(char.gender || char.eyeColour || char.hairColour )) {
      match = "yes"
    } else {
      match = "no"
    }
    return match
    })
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Ask a yes or no question' value={this.state.question} onChange={this.handleTextChange} /> <input type='submit' value='Submit' /> 
        </form>
    )
  }
}

export default QuestionForm