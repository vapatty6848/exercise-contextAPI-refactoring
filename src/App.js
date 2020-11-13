import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './CreateContext';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
    this.moveCar= this.moveCar.bind(this);
  }
    moveCar(car, side) {
      this.setState({
        cars: {
          ...this.state.cars,
          [car]: side,
        },
      });
    } ;

    render() {
      const contextMoveCar = {
        ...this.state,
        moveCar: this.moveCar,
      };
      return (
        <MyContext.Provider value={contextMoveCar}>
          <div>
          <Cars />
          </div>
       </MyContext.Provider>
      );
   }
} 

export default App;
