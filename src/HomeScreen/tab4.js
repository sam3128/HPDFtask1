import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,Content,Tab, Tabs,TabHeading,Card, CardItem, Header,Footer,FooterTab,Text, Left,Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';

export default class InboxTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="mail" style={{ color: tintColor}} />
    ),
  };
render()
{
  return(
    <Container>
     
<Content>
       <Text>There are no new messages in your inbox</Text>
          </Content>
          </Container>
 );
}
}