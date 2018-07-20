import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }

  componentWillUnmount() {
    //timer
    console.log("Counter - Unmount");
  }

  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // };
  //event handler
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  //estilos
  /*
  styles = {
    fontSize: 40,
    fontWeight: "bold"
  };*/
  /* style={this.styles} style={{ fontSize: 40 }} dentro del span */
  // renderizado

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No Hay Tags!</p>;
  //   return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Aumentar
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Eliminar
        </button>
        {/* {this.state.tags.length === 0 && "Porfavor Crear un nuevo tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
