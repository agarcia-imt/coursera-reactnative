import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    dishes: state.dishes
  };
};

class Menu extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { dishes } = this.props;

    const renderMenuItem = ({ item, index }) => {
      //{ item, index, separators } se pasan como argumentos dentro de un objeto a la funcion
      return (
        <Tile 
          imageSrc={{uri: baseUrl + item.image}}
          title={ item.name }
          caption={ item.description }
          featured
          onPress={ () => navigate('DishDetail', { dishId: item.id }) }
          key={ index }
        />
      );
    }
    
    return (
      <FlatList
        data={ dishes.dishes } //array of items
        renderItem={ renderMenuItem } //function
        keyExtractor={ item => item.id.toString() } //busca en cada item del array pasado en 'data'
      />
    )
  }
}

export default connect(mapStateToProps)(Menu);
