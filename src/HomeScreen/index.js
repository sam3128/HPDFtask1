import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { TabNavigator,DrawerNavigator } from "react-navigation";
import HomeTab from './tab1';
import NotificationTab from './tab3';
import InboxTab from './tab4';
import SearchTab from './tab2';
import TabBarComponent from './tab/tabbar.js';
//import tabBar from './tabBar.js';
const HomeNav =  TabNavigator(
{
  Home : { screen: HomeScreen },
  Search : {screen : SearchTab },
  Notifications : { screen : NotificationTab},
  Inbox : { screen : InboxTab}
},
{
  tabBarComponent:props =>(<TabBarComponent{...props} />),
  tabBarPosition: 'top',
  tabBarOptions: {
    pressColor: 'white',
    activeTintColor: 'blue',
    inactiveTintColor : 'grey'
  },
  indicatorStyle :{
    backgroundColor: 'blue',
  },
  },

);

const HomeScreenRouter = DrawerNavigator(
  {
   Home : { screen : HomeNav}
  }, {
    headerMode: 'float',
      drawerPosition: 'left',
     drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <SideBar {...props} />
  }
);


export default HomeScreenRouter;