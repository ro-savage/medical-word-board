import React, { Component } from 'react';

import styles from "./App.css"

const defaultList = ['Yes', 'No', 'Help', 'Pain', 'I understand', 'I don\'t understand', 'Say again', 'Uncomfortable', 'Clean me']
const bodyPart = ['Head', 'Left Arm', 'Left Leg', 'Right Arm', 'Right Leg', 'Chest', 'Stomach', 'Genitals', 'Everywhere',]


class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedWord: ' ',
      wordList: defaultList,
      bodyPart: false,
    }
  }

  onClick = (word) => {

    if (word === 'Pain' || word === 'Uncomfortable') {
      this.setState({
        selectedWord: word,
        wordList: bodyPart,
        bodyPart: true,
      })
    } else if (this.state.bodyPart) {
      this.setState({
        selectedWord: this.state.selectedWord + ' - ' + word,
        wordList: defaultList,
        bodyPart: false,
      })
    } else {
      this.setState({
        selectedWord: word,
        wordList: defaultList,
        bodyPart: false,
      })
    }
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
