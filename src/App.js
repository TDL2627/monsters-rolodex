import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
constructor(){
  // write super when writing constructer
  super();

  // always json object
  this.state = {
    monsters:[],
    searchField:''

  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.json())
  .then((users)=>this.setState(()=>{
    return{monsters: users}
  },
  ()=>{
    console.log(this.state);
  }
  ))
}
onSearchChange=(event)=>{
  const searchField = event.target.value.toLocaleLowerCase();
 
   this.setState(()=>{
     return{searchField}
   })
 }

  render(){
    const {monsters, searchField} =this.state;
    const {onSearchChange}=this;
    const filteredMonsters =monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {/* search function */}

<input className='search-box' type='search' placeholder='Search monsters' onChange={onSearchChange}/>
     <CardList monsters={filteredMonsters}/>

      </div>
    );
  }

}

export default App;
