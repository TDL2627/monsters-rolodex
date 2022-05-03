import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  // write super when writing constructer
  super();

  // always json object
  this.state = {
    monsters:[
      {
        name:'Mike',
        id:'1'
      },
      {
        name:'Dracula',
        id:'2'
      },
      {
        name:'Venom',
        id:'3'
      },
      {
        name:'Blob',
        id:'4'
      }
    ]

  };
}


  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
  return <div key={monster.id}><h1>{monster.name}</h1></div>
          })}
     

      </div>
    );
  }

}

export default App;
