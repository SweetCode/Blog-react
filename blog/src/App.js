import React from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import './style/index.scss'

import Main from './pages/main/Main'

function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;
