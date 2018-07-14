import React, { Component } from 'react';
import './App.css';
// import { Editor } from '@tinymce/tinymce-react';
import Flight from './components/Flight';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flight />
      </div>
    );
  }
}

export default App;
