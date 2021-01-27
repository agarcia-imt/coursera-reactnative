import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends React.Component {
  // const { dishes, onPress } = props;
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { dishes } = this.state;

    const renderMenuItem = ({ item, index }) => {
      //{ item, index, separators } se pasan como argumentos dentro de un objeto a la funcion
      return (
        <ListItem bottomDivider onPress={ () => navigate('DishDetail', { dishId: item.id }) }>
          <Avatar rounded source={{ uri: require('./images/uthappizza.png') }}/>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    }
    
    return (
      <FlatList
        data={ dishes } //array of items
        renderItem={ renderMenuItem } //function
        keyExtractor={ item => item.id.toString() } //busca en cada item del array pasado en 'data'
      />
    )
  }
}

export default Menu;
