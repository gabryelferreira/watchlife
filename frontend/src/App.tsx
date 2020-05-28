import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { Store } from './store';

function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
