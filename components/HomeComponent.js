import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const RenderItem = ({ item }) => {
  // const { item } = props;
  if (item != null) {
    return (
      <Card>
        <Card.Image style={{ alignItems: 'center', justifyContent: 'center' }} source={{ uri: baseUrl + item.image }}>
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
    // this.state = {
    //   dishes: DISHES,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    // }
  }
  render() {
    // const { dishes, promotions, leaders } = this.state;
    const { dishes, promotions, leaders } = this.props;
    return (
      <ScrollView>
        <RenderItem item={ dishes.dishes.filter(dish => dish.featured)[0] } />
        <RenderItem item={ promotions.promotions.filter(promo => promo.featured)[0] } />
        <RenderItem item={ leaders.leaders.filter(leader => leader.featured)[0] } />
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(Home);

