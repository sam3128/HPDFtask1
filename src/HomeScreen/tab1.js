import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,Content,Tab, Tabs,TabHeading,Card, CardItem, Header,Footer,FooterTab,Text, Left,Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';

export default class HomeTab extends Component{
  static navigationOptions = {
    
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{ color: tintColor}} />
    ),
  };
render()
{
  return(
    <Container>
      
<Content padder>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./images/dp.jpg')} />
                  <Text>Samiya Sayed</Text>
                  <Text note>@samia</Text>
                  <Text note>24min</Text></Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./images/hny.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Button transparent>
                <Icon name="md-chatbubbles" style={{fontSize: 20, color: 'grey'}} />
                  <Text style={{fontSize: 20, color: 'grey'}}>2</Text>
                </Button>
                <Button transparent>
                <Icon name="md-heart" style={{fontSize: 20, color: 'red'}} />
                  <Text style={{fontSize: 20, color: 'grey'}}>12 </Text>
                </Button>
                <Button transparent>
                <Icon name="md-sync" style={{fontSize: 20, color: 'grey'}} />
                  <Text style={{fontSize: 20, color: 'grey'}}>4</Text>
                </Button>
                <Button transparent>
                <Icon name="md-mail"style={{fontSize: 20, color: 'grey'}} />
                </Button>
              </Left>
  
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./images/boy.jpg')} />
                  <Text>Junaid Shaikh</Text>
                  <Text note>@techie</Text>
                  <Text note>2h</Text></Left>
            </CardItem>
            <CardItem cardBody>
              <Text>Learning ReactNative
              </Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./images/reactnative.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Button transparent>
                <Icon name="md-chatbubbles" style={{fontSize: 20, color: 'grey'}} />
                  <Text style={{fontSize: 20, color: 'grey'}}>2</Text>
                </Button>
                <Button transparent>
                <Icon name="md-heart-outline" style={{fontSize: 20, color: 'red'}} />
                  <Text style={{fontSize: 20, color: 'grey'}}>12 </Text>
                </Button>
                <Button transparent>
                <Icon name="md-sync" style={{fontSize: 20, color: 'grey'}} />
                  <Text style={{fontSize: 20, color: 'grey'}}>4</Text>
                </Button>
                <Button transparent>
                <Icon name="md-mail"style={{fontSize: 20, color: 'grey'}} />
                </Button>
              </Left>
            </CardItem>
          </Card>
          </Content>
          </Container>
 );
}
}