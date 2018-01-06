import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,Content,Item ,Left, Title,Body,Thumbnail,Input, Header,Text, Button, Icon } from 'native-base';

export default class SearchTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" style={{ color: tintColor}} />
    ),
    headerStyle:{backgroundColor :'#FFF'},
    headerTitleStyle: {color:'blue'},
  };   
render()
{
  return(
    <Container>
       
      </Container>
 );
}
}