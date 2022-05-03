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
        name:'Mike'
      },
      {
        name:'Dracula'
      },
      {
        name:'Venom'
      }
    ]

  };
}


  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
  return <h1>{monster.name}</h1>
          })}
     

      </div>
    );
  }

}

export default App;
