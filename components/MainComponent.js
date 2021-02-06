import React, { useEffect } from 'react';
import { 
  View,
  Platform,
  Image,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import {
  fetchComments,
  fetchDishes,
  fetchLeaders,
  fetchPromos
} from '../redux/ActionCreators';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchPromos: () => dispatch(fetchPromos())
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    flex: 1,
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#512DA8'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerBtnME = ({iconName, navigation}) => {
  return (
    <Icon
      name={iconName}
      size={24}
      color='white'
      onPress={ () => navigation.toggleDrawer() }
      style={{marginLeft: 10}}
    />
  );
};

const HomeNavigator = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen
            name='Home'
            component={Home}
            options={({navigation, route}) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: '#512DA8'
              },
              headerTitleStyle: {
                color: '#fff'
              },
              headerTintColor: '#fff',
              headerLeft: () => <DrawerBtnME iconName='menu' navigation={navigation}/>
            })}
          />
  </Stack.Navigator>
)};

const MenuNavigator = () => {
  return (
  <Stack.Navigator 
    initialRouteName="Menu"
    screenOptions={({navigation, route}) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff', //innecesario
      },
      headerLeft: () => <DrawerBtnME iconName='menu' navigation={navigation}/>
    })}
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

const ContactNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name= 'Contact'
        component={Contact}
        options={({navigation, route}) => ({
          title: 'Contact Information',
          headerStyle: {
            backgroundColor: '#512DA8'
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerTintColor: '#fff',
          headerLeft: () => <DrawerBtnME iconName='menu' navigation={navigation}/>
        })}
      />
    </Stack.Navigator>
  );
}

const AboutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='About'
        component={About}
        options={({navigation, route}) => ({
          title: 'About Us',
          headerStyle: {
            backgroundColor: '#512DA8'
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerTintColor: '#fff',
          headerLeft: () => <DrawerBtnME iconName='menu' navigation={navigation}/>
        })}
      />
    </Stack.Navigator>
  )
}

const CustomDrawerContentComponent = props => {
  // DrawerContentScrollView already provides an insent top by default
  return (
  <DrawerContentScrollView {...props}>
    <View style={styles.container}> 
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItemList {...props}/>
    </View>
  </DrawerContentScrollView>
  )
}

// Los Drawer.Screen tienen Stack.Navigator nesteados
const MainNavigator = () => {
  return (
    <Drawer.Navigator
          drawerStyle={{
            backgroundColor: '#D1C4E9'
          }}
          drawerContent={ props => <CustomDrawerContentComponent {...props} /> }
        >
          <Drawer.Screen
            name='Home'
            component={HomeNavigator}
            options={{
              drawerIcon: ({color, size}) => (
                <Icon 
                  name='home'
                  type='font-awesome'
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name='About Us'
            component={AboutNavigator}
            options={{
              drawerIcon: ({color, size}) => (
                <Icon
                  name='info-circle'
                  type='font-awesome'
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name='Menu'
            component={MenuNavigator}
            options={{
              drawerIcon: ({color, size}) => (
                <Icon
                  name='list'
                  type='font-awesome'
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name='Contact Us'
            component={ContactNavigator}
            options={{
              drawerIcon: ({color, size}) => (
                <Icon
                  name='address-card'
                  type='font-awesome'
                  size={22}
                  color={color}
                />
              )
            }}
          />
    </Drawer.Navigator>
  )
}

const Main = ({fetchComments, fetchDishes, fetchLeaders, fetchPromos}) => {

  useEffect(() => {
    fetchComments();
    fetchDishes();
    fetchLeaders();
    fetchPromos();
  }, []);

  return (
    <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
