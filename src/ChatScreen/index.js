import React, { Component } from "react";
import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon,Header, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    LucyChat: { screen: LucyChat },
    JadeChat: { screen: JadeChat }
  },
  {
    tabBarPosition: "top",
    tabBarComponent: props => {
      return (
        <Header hasTabs/>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}>
              <Icon name="bowtie" />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}>
              <Icon name="briefcase" />
            </Button>
      );
    }
  }
));
