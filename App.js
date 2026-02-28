import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './SRC/routes';
import store from './SRC/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}