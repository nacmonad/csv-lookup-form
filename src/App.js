import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {MuiThemeProvider} from '@material-ui/core/styles/'
import theme from './theme';
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
        <MuiThemeProvider theme={theme}>
          <TextileForm />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
