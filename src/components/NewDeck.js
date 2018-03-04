import React from 'react';
import { Container, Header, Content, Input, View, Item, Button, Text, H2 } from 'native-base';


class NewDeck extends React.Component {
  onPress = () => {
    this.props.navigation.navigate('Deck', { deckId: 'klk' });
  }
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
          <View>
            <H2>What is the title of your new deck?</H2>
            <Item style={{ paddingTop: 20, marginBottom: 20 }}>
              <Input placeholder="Deck Title" />
            </Item>
            <Button style={{ alignSelf: 'center' }} onPress={this.onPress}>
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container >
    );
  }
}


export default NewDeck;