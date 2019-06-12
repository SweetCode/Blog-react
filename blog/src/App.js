import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import 'antd/dist/antd.css'

import Main from './pages/main/Main'

function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;
