import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    fetch('/images')
      .then(res => res.json())
      .then(imageUrl => this.setState((state) => ({ images: imageUrl})))
      // .then( test => console.log(test))
  }

  render() {
    return (
      <div className="App">
        <h1>Da Art</h1>
        {this.state.images.map(images =>
          <img src={images} key={images} alt='Okkkur' />
        )}
      </div>
    );
  }
}

export default App;