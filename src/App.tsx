import React from 'react';
import './App.css';
import { SearchInput } from './component/SearchInput/SearchInput';
import { Table } from './component/Table/Table';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Table />
      </Provider>
    </>
  );
}

export default App;
