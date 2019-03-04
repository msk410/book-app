import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBar from "./SearchBar";
import BookInfo from "./BookInfo";
// import {testAction} from '../actions/actions'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div class="container">
          <div class="row">
            {!!this.props.bookData &&
              this.props.bookData != "error" &&
              this.props.bookData.data.items.map(book => (
                <div className="col-sm">
                  <BookInfo volumeInfo={book.volumeInfo} saleInfo={book.saleInfo} />
                </div>
              ))}
          </div>
        </div>
        {!!this.props.bookData && this.props.bookData === "error" && (
          <div className="align-items-center">
            Nothing found. Try another search.
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookData: state.bookData.bookData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
