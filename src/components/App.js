import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBar from "./SearchBar";
// import {testAction} from '../actions/actions'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
