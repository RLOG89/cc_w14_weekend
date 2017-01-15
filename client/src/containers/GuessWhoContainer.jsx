import React from 'react'
import Board from '../components/Board.jsx'

class GuessWhoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {characters: [], yourCharacter: undefined, oppCharacter: undefined, gameState: 'playing'} 
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
        console.log("error")
      }
    }
    request.send(null);
  }
  componentDidMount() {
    this.loadCharacters(this.props.url)
  }
  render() {
    if(!this.state.characters.length){return <p>Loading characters, please wait...</p>}
    return (
      <div className='guess-who-container'>
      <h1> Guess Who</h1>
      <Board characters={this.state.characters}/>
      </div>
      )
  }
}

export default GuessWhoContainer