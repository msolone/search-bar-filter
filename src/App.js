import React, { Component } from "react";
import "./App.css";
import Data from "./Data/names.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    console.log(Data.person);
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }
  render() {
    let filteredNames = Data.people.filter(person => {
      return person.name.toLowerCase().includes(this.state.search.toLocaleLowerCase());
    });
    return (
      <section className="main">
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredNames.map((dude, i) => {
            return <li key={i}>{dude.name}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default App;
