import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

const RenderDish = ({ dish }) => {
  // const { dish } = props;
  if (dish != null) {
    return (
      <Card>
        <Card.Image style={{ alignItems: 'center', justifyContent: 'center' }} source={ require('./images/uthappizza.png') }>
          <Card.FeaturedTitle>{ dish.name }</Card.FeaturedTitle>
        </Card.Image>
        <Text style={{ margin:10 }}>{ dish.description }</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const { dishes } = this.state;
    const { dishId } =this.props.route.params; // index to select in dishes array. Needs converting to number
    return <RenderDish dish={ dishes[+dishId] } />;
  }
};

export default DishDetail;

