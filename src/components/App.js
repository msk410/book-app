import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import { InputGroup } from "react-bootstrap";

class App extends Component {
  handleSearch(e) {
    e.preventDefault();
    console.log("hey");
  }
  render() {
    return (
      <div className="App">
        <div class="align-items-center">
          <h1>BOOK FINDER</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <form onSubmit={e => this.handleSearch(e)}>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
