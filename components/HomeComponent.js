import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

const RenderItem = ({ item }) => {
  // const { item } = props;
  if (item != null) {
    return (
      <Card>
        <Card.Image style={{ alignItems: 'center', justifyContent: 'center' }} source={require('./images/uthappizza.png')}>
          <Card.FeaturedTitle>{item.name}</Card.FeaturedTitle>
          <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
        </Card.Image>
        <Text style={{ margin:10 }}>{item.description}</Text>
      </Card>
    );
  } else  {
    return (<View></View>);
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  render() {
    const { dishes, promotions, leaders } = this.state;
    return (
      <ScrollView>
        <RenderItem item={ dishes.filter(dish => dish.featured)[0] } />
        <RenderItem item={ promotions.filter(promo => promo.featured)[0] } />
        <RenderItem item={ leaders.filter(leader => leader.featured)[0] } />
      </ScrollView>
    )
  }
}

export default Home;

