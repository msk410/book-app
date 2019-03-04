import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

class BookInfo extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "inline-block" }}>
          <img
            src={
              !!this.props.volumeInfo.imageLinks &&
              !!this.props.volumeInfo.imageLinks.smallThumbnail
                ? this.props.volumeInfo.imageLinks.smallThumbnail
                : ""
            }
          />
        </div>
        <div style={{ display: "inline-block" }}>
          <p>
            {!!this.props.volumeInfo.title
              ? this.props.volumeInfo.title
              : "No title found"}
          </p>
          <p>
            By:{" "}
            {!!this.props.volumeInfo.authors
              ? this.props.volumeInfo.authors
              : "No authors found"}
          </p>
          <p>
            Published by:{" "}
            {!!this.props.volumeInfo.publisher
              ? this.props.volumeInfo.publisher
              : "No publisher found"}
          </p>
        </div>
        <Button
          href={
            !!this.props.saleInfo && !!this.props.saleInfo.buyLink
              ? this.props.saleInfo.buyLink
              : ""
          }
        >
          Buy it now!
        </Button>
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
)(BookInfo);
