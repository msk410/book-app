import React, { Component } from "react";
import { getBookData } from "../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  handleSearch(e) {
    e.preventDefault();
    this.props.getBookData(e.target[0].value);
  }
  render() {
    return (
      <div>
        <div className="align-items-center">
          <h1>BOOK FINDER</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <form onSubmit={e => this.handleSearch(e)}>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getBookData
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
