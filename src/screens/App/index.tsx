import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Home from '../Home';
import CategoryView from '../CategoryView';

const Stack = createStackNavigator();

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'TeleCruz' }}
          />
          <Stack.Screen
            name="Category View"
            component={CategoryView}
            options={{ title: 'TeleCruz' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);

export default App;
