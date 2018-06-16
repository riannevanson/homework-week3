import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { newGame } from '../actions/index'

class NewGameContainer extends React.PureComponent {

  getRandomWord(){
  return this.props.wordslist[Math.floor(Math.random()*this.props.wordslist.length)];

  }



  render() {
    return <div>
      {this.getRandomWord()}

    <button onclick={() => this.props.newGame()}><h2> new game </h2></button>
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
