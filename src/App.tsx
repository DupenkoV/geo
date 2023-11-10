import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Wrapper } from './component/Wrapper/Wrapper';

function App() {
  return (
    <>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </>
  );
}

export default App;
