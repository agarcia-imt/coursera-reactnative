import React from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MenuNavigator = () => {
  return (
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
)};

const HomeNavigator = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#512DA8'
              },
              headerTitleStyle: {
                color: '#fff'
              },
              headerTintColor: '#fff'
            }}
          />
  </Stack.Navigator>
)};

// Los Drawer.Screen tienen Stack.Navigator nesteados
const MainNavigator = () => {
  return (
    <Drawer.Navigator
          drawerStyle={{
            backgroundColor: '#D1C4E9'
          }}
        >
          <Drawer.Screen
            name='Home'
            component={HomeNavigator}
          />
          <Drawer.Screen
            name='Menu'
            component={MenuNavigator}
          />
    </Drawer.Navigator>
  )
}

const Main = () => {
  return (
    <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </View>
  );
}

export default Main;
