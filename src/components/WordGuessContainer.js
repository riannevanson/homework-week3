import * as React from 'react'
import WordGuess from './WordGuess'
import { connect } from 'react-redux'

class WordGuessContainer extends React.PureComponent {
  selectWord(word) {

  }

  render() {
    return <WordGuess games={this.props.games} selectWord={this.selectWord} />
  }
}

const mapStateToProps = (state) => {
  return {
    word: state
  }
}

export default connect(mapStateToProps)(WordGuessContainer)
