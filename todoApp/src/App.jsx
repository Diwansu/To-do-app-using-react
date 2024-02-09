import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todolist: [],
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = () => {
    if (this.state.text.trim() !== "") {
      this.setState((prevState) => ({
        todolist: [...prevState.todolist, this.state.text],
        text: "",
      }));
    }
  };

  handleUpdate = (index) => {
    let newInput = prompt();
    if (newInput !== null) {
      this.setState((prevState) => ({
        todolist: prevState.todolist.map((el, i) =>
          i === index ? newInput : el
        ),
      }));
    }
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      todolist: prevState.todolist.filter((el, i) => i !== index),
    }));
  };

  render() {
    const { text, todolist } = this.state;

    return (
      <section className="boxContainer">
        <h2 id="title">Your Daily Wiki</h2>

        <div className="taskContainer">
          <input
            type="text"
            value={text}
            placeholder="Note task here."
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.handleAdd}>
            Add
          </button>
        </div>

        <div className="addedTask">
          {todolist.map((el, i) => (
            <div className="eachDiv" key={i}>
              <p style={{ fontSize: "40px" }}>{el}</p>

              <div className="buttonContainer">
                <button className="button" onClick={() => this.handleUpdate(i)}>
                  Edit
                </button>

                <button className="button" onClick={() => this.handleDelete(i)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
