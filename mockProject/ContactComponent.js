import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';

const contactInfo = `121, Clear Water Bay Road

Clear Water Bay, Kowloon

HONG KONG

Tel: +852 1234 5678

Fax: +852 8765 4321

Email:confusion@food.net`;

static navigationOptions = {
  title: 'Contact Information'
};

const Contact = () => {
  return (
  <View>
    <Card
      title='Contact Information'
    >
      <Text style={{margin: 10}}>{contactInfo}</Text>
    </Card>
  </View>
  );
}

export default Contact;
