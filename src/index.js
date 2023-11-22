// this line below will import the React library which is necessary for 
// writing react and also JSX to wirite HMTL within javascript
import React from 'react';

// the line below will import the ReactDOM library which provides methods 
// for interacting with the DOM in React such as rendering React into DOM
import ReactDom from 'react-dom';

// importing the tailwind css
import './index.css';

// the App component is the root component of the applicition
import App from './App';

// This line uses the ReactDOM.render() method to render the "App" component into the HTML element with the id "root" in the DOM.
ReactDom.render(<App />, document.getElementById('root'));