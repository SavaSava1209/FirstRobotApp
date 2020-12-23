import React, { Component } from 'react'; 
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import ErrorBoundry from '../Component/ErrorBoundry'
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots: users })})
    }
        

    onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
    }

    render() {
        const { searchfield, robots } = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.includes(searchfield);
      })       
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
           return(
            <div className='tc '>
                <h1 className='f1'>Robot Friends</h1>
                <SearchBox seachChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
            ); 
        }

        
    }
}


export default App;