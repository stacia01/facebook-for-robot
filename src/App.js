import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import './App.css'
import Scrolls from './Scrolls'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
		})

		if(this.state.robots.length === 0) {
			return <h3>Loading...</h3>
		}
		else {
			return(
				<div className='tc'>
					<style>
						@import url('https://fonts.googleapis.com/css2?family=Merriweather');
					</style>
					<h1>RobotNet</h1>
					<SearchBox searchChange={this.onSearchChange}/>
			  	<Scrolls>
			  		<CardList robots={filteredRobots}/>
			  	</Scrolls>
				</div>
			);
		}
	}
}

export default App;