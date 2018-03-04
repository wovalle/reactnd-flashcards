import React from 'react';
import { Container, Content, Text, Input, Button, Item } from 'native-base';

class NewCard extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    };
  };

  onPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <Item style={{ paddingTop: 10 }}>
            <Input placeholder="Question" />
          </Item>
          <Item style={{ paddingTop: 20 }}>
            <Input placeholder="Answer" />
          </Item>
          <Button style={{ alignSelf: 'center', width: 120, justifyContent: 'center', marginTop: 10 }} onPress={this.onPress}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default NewCard;