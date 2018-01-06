import React, { Component } from 'react';
import { Image } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import { Container,View,Content,Tab, Drawer, Tabs,TabHeading,Card, CardItem,Fab, Header,Footer,FooterTab,Text, Left,Thumbnail,Icon, Body, Right, Button, Title } from 'native-base';
import HomeTab from './tab1';
import NotificationTab from './tab3';
import InboxTab from './tab4';
import SearchTab from './tab2';
import { TabNavigator } from "react-navigation";
import SideBar from "../SideBar/SideBar.js";
import HeaderTop from './tab/header.js';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={{color: tintColor}} />
   ), }
     

 constructor() {
   super();
   //setting state for FAB to check if pressed
   this.state = {
     active: true,
   };
 
}
  render() {
    const { navigation } = this.props;
    return (

      <Container>
          <HomeTab />
          <Fab
            active={this.state.active}
            style={{ backgroundColor: 'blue', marginBottom: 30 }}
            position="bottomRight"
            onPress={() => this.setState({ active:!this.state.active })}>
            <Icon name="leaf" />
</Fab>
         <Footer style={{ backgroundColor: 'white'}}>
           <Button vertical transparent>
             <Text>All</Text>
           </Button>
           <Button vertical transparent>
           <Text style={{ color: 'black'}} >Mentions</Text>
           </Button>
           <Right>
           <Button vertical transparent>
             <Icon name="ios-settings"  />
           </Button>
           </Right>
       </Footer>
      </Container>
    );
  }
}