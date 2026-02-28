import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './src/routes'; // Agora apontando para minúsculo
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}