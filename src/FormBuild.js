import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
class formBuild extends React.Component {
    constructor(props) {
    super(props);
    this.state = { username: '' };
	this.state = { age: '' };
	this.state = { pusername: 't' };
	this.state = { page: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  myChangeHandlerTwo = (event) => {
    this.setState({age: event.target.value});
  }
  handleSubmit = (event) => {
	  this.state.pusername = this.state.username;
	  this.state.page = this.state.age;
	  this.forceUpdate();
  }
  clearHandle = (event) => {
	  this.state.pusername = ' ';
	  this.state.username = ' ';
	  this.state.page = ' ';
	  this.state.age = ' ';
	  this.forceUpdate();
  }
  render() {
    return (
	<div>
      <form>
      <p>Enter your name:</p>
      <input
	  value = {this.state.username}
        type='text'
        onChange={this.myChangeHandler}
      />
	  <p>Enter your age:</p>
	  <input
		value = {this.state.age}
        type='text'
        onChange={this.myChangeHandlerTwo}
      />
	  <input type='button' onClick={this.handleSubmit} value='Submit'></input>
	  <input type='button' onClick={this.clearHandle} value='Clear'></input>
      </form>
	  <div><br></br>Username: {this.state.pusername} age: {this.state.page}</div>
	</div>
    );
  }
}

ReactDOM.render(<formBuild />, document.getElementById('root'));
export default formBuild;