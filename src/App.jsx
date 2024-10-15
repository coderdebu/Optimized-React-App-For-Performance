import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/layout';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout>
          <HomePage />
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
