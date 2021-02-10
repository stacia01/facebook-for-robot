import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scrolls from '../components/Scrolls'

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
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return (robot.name.toLowerCase().includes(searchfield.toLowerCase()));
		})

		return !robots.length ? 
			<h3>Loading...</h3> :
			(
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
			)
	}
}

export default App;