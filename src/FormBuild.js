import './App.css';
import React from 'react';
class formBuild extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      username: '',
      age: null,
    };
  }
	handleChange(event) {
		console.log(event);
		this.setState({name: event.target.name});
		this.setState({age: event.target.age});
	}

	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
	}
	render() {
    return (
      <form onSubmit={this.handleSubmit}>
		<label>
			Name:
				<input type='text' name='name' onChange={this.myChangeHandler} />
			age:
				<input type='number' name='age' onChange={this.myChangeHandler} />
		</label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default formBuild;