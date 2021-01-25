import React from 'react';
import { View } from 'react-native';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'
import { DISHES } from '../shared/dishes';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
    this.onDishSelect = this.onDishSelect.bind(this);
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
  }

  render() {
    const { dishes, selectedDish } = this.state;
    return (
      <View>
        <Menu 
          dishes={dishes} 
          onPress={ this.onDishSelect }
        />
        <DishDetail dish={ dishes.filter( dish => dish.id === selectedDish)[0] } />
      </View>
    );
  }
}

export default Main;
