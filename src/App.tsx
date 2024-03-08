import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Container from './Container';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;