import React, { Component } from 'react';
import { Provider } from 'react-redux';


import TextileForm from './components/TextileForm';

import store from './store';

import ExcelToJSON from './ExcelToJSON';



class App extends Component {
  componentWillMount(){
     ExcelToJSON('./data/Price grids.xlsx');

  }
  render() {
    return (
      <Provider store={store}>
        <TextileForm />
      </Provider>
    );
  }
}

export default App;
