import * as React from 'react';
import './App.css';
import RouterContainer from './router';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <RouterContainer/>
      </div>
    );
  }
}

export default App;
