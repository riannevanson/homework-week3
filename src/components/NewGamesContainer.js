import * as React from 'react'
import NewGames from './NewGames'
import { connect } from 'react-redux'

class NewGamesContainer extends React.PureComponent {
  selectWord(word) {

  }

  render() {
    return <NewGames games={this.props.games} selectWord={this.selectWord} />
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state
  }
}

export default connect(mapStateToProps)(NewGamesContainer)
