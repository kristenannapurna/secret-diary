import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newEntry: "",
      diaryEntries: {}
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const newDiaryEntry = {
      date: new Date().toDateString(),
      body: this.state.newEntry
    };

    this.setState({
      newEntry: ""
    });

    // push data to firebase here
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <main>
          <h1>My ✨Special✨ Special✨ Secret Diary 🙊</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.newEntry}
              id="newEntry"
              onChange={this.handleChange}
            />
          </form>
          <input type="submit" />
          <section className="entries">
            {Object.entries(this.state.diaryEntries).map(entry => {
              return (
                <article key={entry[0]}>
                  <p>Written on: {entry[1].date}</p>
                  <p>{entry[1].body}</p>
                </article>
              );
            })}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
