import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Posts from './Posts';
import Form from './Form';


function App() {
  return (
    <Provider store={store}>
      <Form />
      <Posts />
    </Provider>
  );
}

export default App;
