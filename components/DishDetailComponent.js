import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments
  };
};

const RenderDish = ({ dish, favorite, pressFav }) => {
  // const { dish, favorite } = props;

  if (dish != null) {
    return (
      <Card>
        <Card.Image style={{ alignItems: 'center', justifyContent: 'center' }} source={{ uri: baseUrl + dish.image }}>
          <Card.FeaturedTitle>{ dish.name }</Card.FeaturedTitle>
        </Card.Image>
        <Text style={{ margin:10 }}>{ dish.description }</Text>
        <Icon
          raised
          reverse
          name={ favorite ? 'heart' : 'heart-o' }
          type='font-awesome'
          color='#f50'
          onPress={ () => favorite ? console.log('Already favorite') : pressFav() }
        />
      </Card>
    );
  } else {
    return <View></View>;
  }
}

const RenderComments = ({comments}) => {
  // const { comments } = props;
  const renderCommentItem = ({item, index}) => {
    return (
      <View key={index} style={{margin: 10}} >
        <Text style={{fontSize: 14}}>{item.comment}</Text>
        <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
        <Text style={{fontSize: 12}}>{`-- ${item.author}, ${moment(item.date).format('LLL')}`}</Text>
      </View>
    );
  }

  return (
    <Card>
      <Card.Title>Comments</Card.Title>
      <Card.Divider/>
      <FlatList 
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={ item => item.id.toString() }
      />
    </Card>
  );
}

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // dishes: DISHES,
      // comments: COMMENTS,
      favorites: []
    };
    // favorites: array of dishIds
  }

  makeFavorite(dishId) {
    const { favorites } = this.state;
    this.setState({
      favorites: favorites.concat(dishId)
    })
  }

  render() {
    const { favorites } = this.state;
    const { dishes, comments } = this.props
    const { dishId } =this.props.route.params; // index to select in dishes array. Needs converting to number
    return (
      <ScrollView>
        <RenderDish
          dish={ dishes.dishes[+dishId] }
          favorite={ favorites.some(id => id === dishId) }
          pressFav={ () => this.makeFavorite(dishId) }
        />
        <RenderComments comments={ comments.comments.filter(comment => comment.dishId === dishId) } />
      </ScrollView>
    );
  }
};

export default connect(mapStateToProps)(DishDetail);

