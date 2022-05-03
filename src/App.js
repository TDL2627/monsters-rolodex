import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  // write super when writing constructer
  super();

  // always json object
  this.state = {
name:{firstName:'John',lastName:'Wick'},
age:'200'
  };
}


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HELLO WRLD, this is {this.state.name.firstName}  {this.state.name.lastName}  , I am {this.state.age} years old.
          </p>
         <button
         onClick={ ()=>{
            //  Changing state via object
             this.setState({name:{firstName:'Peter',lastName:'Pan'}})
             this.setState({age:'15'})
           }
         }
         >Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
