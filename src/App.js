import React, { Component } from 'react';
import logo from './invisible-person-of-clothes.svg';
import './App.css';
import Typing from 'react-typing-animation';

const origin = window.location.origin


class App extends Component {
  state = {
    set: 6,
    name: ""
  }

  setSet = (number) => {
    if(number === 4) this.welcome()
    this.setState({
      set: number
    })
  }

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }

  welcome = () => {
    fetch(origin + '/sendName', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({name: this.state.name}), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.set === 6 ?

          <Set6 handleChange={this.handleChange} setSet={this.setSet} name={this.state.name} />
            
          : this.state.set === 1 ? 
          
          <Set1 setSet={this.setSet}/>

          : this.state.set === 2 ? 

          <Set2 setSet={this.setSet}/>
        
          : this.state.set === 3 ? 

          <Set3 setSet={this.setSet}/>

          : this.state.set === 4 ?

          <Set4 />

          : 
          
          <Set5 />
          }
        </header>
      </div>
    );
  }
}

const Set1 = (props) => (
  <Typing>
    <p>You have one life, How are you going to live it?</p>
    <Typing.Delay ms={1000} />
    <p onClick={() => props.setSet(2)}> --> By becoming fucking rich</p>
    <p onClick={() => props.setSet(2)}> --> By becoming the best of the best</p>
    <p onClick={() => props.setSet(2)}> --> Like a fucking BOSS</p>
    <p onClick={() => props.setSet(0)}> --> Like an average person</p>
    <p onClick={() => props.setSet(2)}> --> By changing the world</p>
  </Typing>
)

const Set2 = (props) => (
  <Typing>
    <p>Are you willing to do anything for it?</p>
    <Typing.Delay ms={1000} />
    <p onClick={() => props.setSet(3)}> --> Yes</p>
    <p onClick={() => props.setSet(0)}> --> No</p>
  </Typing>
)

const Set3 = (props) => (
  <Typing>
    <p>Will you Compromise?</p>
    <Typing.Delay ms={1000} />
    <p onClick={() => props.setSet(4)}> --> Never</p>
    <p onClick={() => props.setSet(0)}> --> I might</p>
  </Typing>
)

const Set4 = () => (
  <Typing>
    <p>Welcome</p>
  </Typing>
)

const Set5 = () => (
  <Typing>
    <p>Thank You</p>
  </Typing>
)

const Set6 = (props) => (
  <form onSubmit={() => props.setSet(1)}>
    <label>
      <p>Enter your name</p> 
      <input type="text" value={props.name} onChange={props.handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
)

export default App;
