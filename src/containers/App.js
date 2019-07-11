import React, {Component} from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'


class App extends Component {
    constructor () {
        super()
        this.state = {
            robots : [],
            searchfield : ""
        }
    }

    componentDidMount() {
        fetch ('https://jsonplaceholder.typicode.com/users')//method of window //ative code
        .then(response=>{
            return response.json();
        })

  
        .then(users => {
            this.setState({ robots: users})
        })
    

    }
    onSearchChange = (e) => { //use always arrow f
        //console.log(e.target.value);
        this.setState ({searchfield: e.target.value}) //to change the state
        
       // console.log(filteRobs);
    }


    render() {
        const {robots, searchfield} = this.state;
        const filteRobs = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // if else for waiting for loading
        if (robots.length ===0) {
            return <h1>Loading</h1>
        } else {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
            <CardList robots = {filteRobs} />
            </Scroll>
        </div>
    );
        }
    }
}

export default App;