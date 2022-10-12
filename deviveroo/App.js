import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import BasketScreen from './screens/BasketScreen';

import { NativeWindStyleSheet } from "nativewind";
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={ResturantScreen} />
          <Stack.Screen name='Basket' component={BasketScreen} 
            options={{ presentation: 'modal', headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}


