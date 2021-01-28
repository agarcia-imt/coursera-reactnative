import React from 'react';
import { View, Text, Button } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home Component</Text>
        <Button title='Drawer' onPress={ () => this.props.navigation.openDrawer()}/>
      </View>
    )
  }
}

export default Home;

