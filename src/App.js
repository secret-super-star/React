import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        Hello {name}!
      </div>
    )
  }
}

export default App;