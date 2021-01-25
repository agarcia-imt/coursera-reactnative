import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

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

const DishDetail = ({ dish }) => {
  // const { dish } = props;
  return <RenderDish dish={ dish } />;
};

export default DishDetail;

