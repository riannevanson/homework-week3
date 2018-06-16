import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class WordslistContainer extends React.PureComponent {

getRandomWord(){
return this.props.wordslist[Math.floor(Math.random()*this.props.wordslist.length)];

}



  render() {
    return <div>
      {this.getRandomWord()}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    wordslist: state.wordslist
  };
};

export default connect( mapStateToProps )( WordslistContainer );
