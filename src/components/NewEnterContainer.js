import * as React from 'react'
import NewEnter from './NewEnter'
import { connect } from 'react-redux'

class NewEnterContainer extends React.PureComponent {
  selectWord(word) {

  }

  render() {
    return <NewEnter games={this.props.games} selectWord={this.selectWord} />
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state
  }
}

export default connect(mapStateToProps)(NewEnterContainer)
