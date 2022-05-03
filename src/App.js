import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  // write super when writing constructer
  super();

  // always json object
  this.state = {
monster1:{
  name:'Mike'
},
monster2:{
  name:'Dracula'
},
monster3:{
  name:'Venom'
}
  };
}


  render(){
    return (
      <div className="App">
      <h1>{this.state.monster1.name}</h1>
      <h1>{this.state.monster2.name}</h1>
      <h1>{this.state.monster3.name}</h1>

      </div>
    );
  }

}

export default App;
