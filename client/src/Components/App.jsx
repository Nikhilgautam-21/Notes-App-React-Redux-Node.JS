import React, { Component } from 'react';
import '../CSS/App.css';
import Header from './Header';
import ShowTODos from './ShowToDos';
import AddToDo from './AddToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <ShowTODos/>
          <AddToDo/>
      </div>
    );
  }
}

export default App;
