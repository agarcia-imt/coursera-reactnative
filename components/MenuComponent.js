import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const Menu = ({ dishes, onPress }) => {
  // const { dishes } = props;

  const renderMenuItem = ({ item, index }) => {
    //{ item, index, separators } se pasan como argumentos dentro de un objeto a la funcion
    return (
      <ListItem bottomDivider onPress={ () => onPress(item.id) }>
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

export default Menu;
