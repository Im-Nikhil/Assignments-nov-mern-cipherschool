import logo from './logo.svg';
import './App.css';
import Box from './box';
import { Component } from 'react';

class App extends Component {

state=
  {

    count:0
  }
  generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };
  increment=()=>
  {
    let x=this.state.count
    this.setState({
      count: x+1
    })
  }
  decrement=()=>
  {
    let x=1
    if (this.state.count>0)
    {
      x= this.state.count
    }
    this.setState(
      {
        count:x-1
        
      }
    )
    
  }
  reset=()=>
    {

      this.setState({
        count:0
      })
    }
  render(){
  return (
    <div className="App">
      
      <Box count={this.state.count} reset ={this.reset}increment={this.increment} decrement={this.decrement} color={this.generateRandomColor()}></Box>
      
    </div>
  )
  }
}

export default App;
