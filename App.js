import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './src/routes'; // Tudo minúsculo
import store from './src/store'; // Tudo minúsculo

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}