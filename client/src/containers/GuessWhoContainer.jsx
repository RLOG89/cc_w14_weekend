import React from 'react'
import Board from '../components/Board.jsx'
import QuestionForm from '../components/QuestionForm.jsx'

class GuessWhoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {characters: [], yourCharacter: undefined, oppCharacter: undefined, gameWon: false, question:''} 
  }
  loadCharacters(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data)
        this.setState({characters: data});
      } else {
        alert("error")
      }
    }
    request.send(null);
  }
  componentDidMount() {
    this.loadCharacters(this.props.url)
  }
  // handleClickSelect(e) {

  // }
  // chooseYourCharacter(e) {
  //   this.setState({yourCharacter: e.target.value})
  // }
  oppCharacterSelector() {
    const randSelection = characters[Math.floor(Math.random() * characters.length - 1)] 
    if(randSelection !== yourCharacter) {
      this.setState({oppCharacter: randSelection})
    } // may need else clause here to select again //
  }
  render() {
    if(!this.state.characters.length){return <p>Loading characters, please wait...</p>}
      return (
        <div className='guess-who-container'>
        <h1> Guess Who</h1>
        <Board characters={this.state.characters}/>
        <QuestionForm characters={this.state.characters} oppCharacter={this.state.oppCharacter}/>
        </div>
        )
  }
}

export default GuessWhoContainer