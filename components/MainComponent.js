import React from 'react';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'

const Main = () => {
  const Stack = createStackNavigator();
  console.log(Stack)
  return (
    <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Menu"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff', //innecesario
          },
          }}
        >
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: 'Menu' }}
          />
          <Stack.Screen
            name="DishDetail"
            component={DishDetail}
            options={{ title: 'Dish Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Main;
