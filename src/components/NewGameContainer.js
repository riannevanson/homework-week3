import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { newGame } from '../actions/index'

class NewGameContainer extends React.PureComponent {

getRandomWord(){

}



  render() {
    return <div>
    <button onclick={() => this.props.getRandomWord()}><h2> new game </h2></button>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    wordslist: state.wordslist
  };
};

function matchDispatchToProps(dispatch){
  return bindActionCreators({newGame: newGame}, dispatch)
}

export default connect( mapStateToProps, matchDispatchToProps )( NewGameContainer );
