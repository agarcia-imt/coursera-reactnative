import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const RenderItem = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return (
      <Loading />
    )
  } else if (errMess) {
    return (
      <View>
        <Text>{errMess}</Text>
      </View>
    )
  } else {
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
}

const Home = ({ dishes, promotions, leaders }) => {
  return (
    <ScrollView>
      <RenderItem 
        item={ dishes.dishes.filter(dish => dish.featured)[0] }
        isLoading={ dishes.isLoading }
        errMess={ dishes.errMess }
      />
      <RenderItem 
        item={ promotions.promotions.filter(promo => promo.featured)[0] }
        isLoading={ promotions.isLoading }
        errMess={ promotions.errMess }
      />
      <RenderItem 
        item={ leaders.leaders.filter(leader => leader.featured)[0] }
        isLoading={ leaders.isLoading }
        errMess={ leaders.errMess }
      />
    </ScrollView>
  )
}

export default connect(mapStateToProps)(Home);

