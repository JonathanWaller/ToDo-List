import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: ["mow lawn", "empty trash", "walk dog"]
    };
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  handleClick(userInput) {
    let newList = this.state.list.slice();
    newList.push(this.state.userInput);
    this.setState({
      list: newList
    });
  }

  deleteHandler(i) {
    let deleteItem = this.state.list.slice();
    deleteItem.splice(i, 1);
    this.setState({ list: deleteItem });
  }

  render() {
    let myList = this.state.list.map((elem, ind) => {
      return (
        <h3 onClick={() => this.deleteHandler(ind)} key={ind}>
          {elem}
        </h3>
      );
    });
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <input
          onChange={e => {
            this.handleChange(e.target.value);
          }}
          placeholder="add items"
        />
        {/* <p>{this.state.userInput}</p> */}
        <button onClick={() => this.handleClick()}>Submit</button>
        {/* <p>{this.state.list}</p> */}
        {myList}
      </div>
    );
  }
}

export default App;
