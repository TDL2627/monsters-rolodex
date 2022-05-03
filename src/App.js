import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  // write super when writing constructer
  super();

  // always json object
  this.state = {
name:'JOHN'
  }
}


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HELLO WRLD, this is {this.state.name}
          </p>
         <button>Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
