import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,Content,Tab, Tabs,TabHeading,Card, CardItem, Header,Footer,FooterTab,Text, Left,Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';

export default class NotificationTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-notifications" style={{ color: tintColor}} />
    ),
  };

render()
{
  return(
    <Container>

<Content>
       <Text>There are no new Notifications</Text>
          </Content>
          </Container>
 );
}
}