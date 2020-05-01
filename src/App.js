import React, { Component } from 'react';
import { Provider} from 'react-redux';
import createFinalStore from './store';

import Load from './Load'

const store = createFinalStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Load />
      </Provider>
    );
  }
}

export default App;
