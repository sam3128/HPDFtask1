import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content,Button,Thumbnail,Icon, Text, List, ListItem, Footer,Left,Right,Body, FooterTab } from "native-base";
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
         <Content padder>
        <Thumbnail large source={require('./dp.jpg')}
        style={{marginTop: 20, marginLeft:20}} />
        <Text style={{fontWeight : 'bold',marginTop: 20, marginLeft:20, color: 'black'}}>Samiya Sayed</Text>
        <Text note style={{ marginLeft:20 ,color: 'grey'}}>@samia</Text>
        <Text note style={{fontWeight: "bold", marginLeft:20 ,color: 'black'}}>89 Following 90 Followers</Text>
        <List style={{ marginLeft:20, color: 'black'}}>
            <ListItem>
              <Icon name="person" />
              <Body>
                <Text>Profile</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Icon name="reorder" />
              <Body>
                <Text>Lists</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Icon name="flash" />
              <Body>
                <Text>Moments</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Icon name="star" />
              <Body>
                <Text>Highlights</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Settings and privacy</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Help Centre</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <Footer style={{ marginLeft:20 , backgroundColor: 'white'}}>
           <Left>
           <Button vertical transparent>
             <Icon name="moon" style={{ color: 'grey'}} />
           </Button>
           </Left>
           <Right>
           <Button vertical transparent>
             <Icon name="apps" style={{ color: 'grey'}} />
           </Button>
             </Right>
        
       </Footer>
      </Container>
    );
  }
}
