import React from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes
  };
};

const Menu = ({dishes, navigation}) => {
  const { navigate } = navigation;

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

  if (dishes.isLoading) {
    return <Loading />;
  } else if (dishes.errMess) {
    return (
      <View>
        <Text>{ dishes.errMess }</Text>
      </View>
    );
  } else {
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
