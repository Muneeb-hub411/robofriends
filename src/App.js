import React, { Component } from "react";
import Cardlist from "./Cardlist";
import Searchbar from "./Searchbar";
import "./App.css";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onsearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <>
        <div className="tc">
          <Searchbar searchchange={this.onsearch} />
          <h1>RoboFriends</h1>
          <Cardlist robots={filterRobots} />
        </div>
      </>
    );
  }
}
export default App;
