// import React from 'react';
// import { View, Platform } from 'react-native';
// import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
// import Menu from './MenuComponent';
// import DishDetail from './DishDetailComponent';
// import Home from './HomeComponent';

// const MenuNavigator = createStackNavigator({
//     Menu: { screen: Menu },
//     Dishdetail: { screen: Dishdetail }
//   },
//   {
//     initialRouteName: 'Menu',
//     navigationOptions: {
//         headerStyle: {
//             backgroundColor: "#512DA8"
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             color: "#fff"
//         }
//     }
//   }
// );

// const HomeNavigator = createStackNavigator({
//     Home: { screen: Home },
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//         headerStyle: {
//             backgroundColor: "#512DA8"
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             color: "#fff"
//         }
//     }
//   }
// );

// const MainNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeNavigator,
//     navigationOptions: {
//       title: 'Home',
//       drawerLaber: 'Home'
//     }
//   },
//   Menu: {
//     screen: MenuNavigator,
//     navigationOptions: {
//       title: 'Menu',
//       drawerLaber: 'Menu'
//     }
//   }
// }, {
//   drawerBackgroundColor: '#D1C4E9'
// });

// class Main extends React.Component {
//   render() {
//     return (
//       <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
//         <MainNavigator />
//     </View>
//     );
//   }
// }

// export default Main;
