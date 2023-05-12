import ListOptimizationExample from './components/ListOptimizationExample';
import {store} from './store/store';
import {Provider} from 'react-redux';
import ListWithoutOptimizationExample from './components/ListOptimizationExample/ListWithoutOptimization';

function App() {
  return (
      <Provider store={store}>
          <div style={{display: 'flex', gap: 24}}>
              <ListOptimizationExample />
              <ListWithoutOptimizationExample />
          </div>
      </Provider>
  )
}

export default App
