import Navigation from './navigations/BottomTabNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import {Provider} from 'react-redux';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);
export default App;
