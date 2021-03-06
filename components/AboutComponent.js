import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
  return {
    leaders: state.leaders
  };
}

const aboutInfo = `Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.`;

const History = () => {
  return (
    <Card>
      <Card.Title>Our History</Card.Title>
      <Card.Divider/>
      <Text>{aboutInfo}</Text>
    </Card>
  );
}

const About = ({ leaders }) => {

  const renderLeader = ({item}) => {
    return (
      <ListItem>
        <Avatar rounded source={{ uri: baseUrl + item.image }}/>
        <ListItem.Content>
          <ListItem.Title>{ item.name }</ListItem.Title>
          <ListItem.Subtitle>{ item.description }</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  if (leaders.isLoading) {
    return (
      <ScrollView>
        <History/>
        <Card>
          <Card.Title>Corporate Leadership</Card.Title>
          <Card.Divider/>
          <Loading />
        </Card>
      </ScrollView>
    );
  } else if (leaders.errMess) {
    return (
      <ScrollView>
          <History/>
          <Card>
            <Card.Title>Corporate Leadership</Card.Title>
            <Card.Divider/>
            <Text>{leaders.errMess}</Text>
          </Card>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <History/>
        <Card>
          <Card.Title>Corporate Leadership</Card.Title>
          <Card.Divider/>
          <FlatList
            data={leaders.leaders}
            renderItem={renderLeader}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
  
};

export default connect(mapStateToProps)(About);
