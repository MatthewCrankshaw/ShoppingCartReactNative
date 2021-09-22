import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import ShopScreen from './views/ShopScreen';
import CartScreen from './views/CartScreen';
import {ThemeProvider, Theme} from 'react-native-elements';

const theme: Theme = {
  colors: {
    primary: '#47bfaf',
    secondary: '#031e45',
  },
};

const App = () => {
  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="ShopScreen"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="ShopScreen" component={ShopScreen} />
              <Stack.Screen name="CartScreen" component={CartScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
