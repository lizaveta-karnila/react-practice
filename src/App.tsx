import ListOptimizationExample from './components/ListOptimizationExample';
import {store} from './store/store';
import {Provider} from 'react-redux';

function App() {
  return (
      <Provider store={store}>
          <ListOptimizationExample />
      </Provider>
  )
}

export default App
