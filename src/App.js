import React, { Component } from 'react';

import styles from "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedWord: 'Test word',
      wordList: ['Yes', 'No', 'Help', 'Pain', 'I understand', 'Do not understand', 'Say again', 'Uncomfortable', 'Clean me']
    }
  }

  onClick = (word) => {
    this.setState({
      selectedWord: word,
    })
  }

  render() {
    return (
      <div className="App">
        <div className={styles.word}>{this.state.selectedWord}</div>
        <div className={styles.wordList}>
          {
            this.state.wordList.map(word => <Word key={word} word={word} onClick={this.onClick} />)
          }
        </div>
      </div>
    );
  }
}

function Word(props) {
  return (
    <div className={styles.wordButton} onClick={() => props.onClick(props.word)}>{props.word}</div>
  )
}

export default App;
