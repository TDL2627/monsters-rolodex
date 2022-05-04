import { Component } from 'react';

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
        {filteredMonsters.map((monster)=>{
  return <div key={monster.id}><h1>{monster.name}</h1></div>
          })}
     

      </div>
    );
  }

}

export default App;
