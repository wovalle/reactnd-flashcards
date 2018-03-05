import React from 'react';
import { Container, Header, Content, Input, View, Item, Button, Text, H2 } from 'native-base';
import { Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';

import { saveNewDeck } from '../actions/deck.actions';

class NewDeck extends React.Component {
  state = {
    title: ''
  }

  onPress = () => {
    Keyboard.dismiss();
    const title = this.state.title.trim();

    if (!title) {
      Alert.alert(
        'Error',
        'Invalid title',
        [{ text: 'OK' }]
      );
    } else if (this.props.decks[title]) {
      Alert.alert(
        'Info',
        `There is already one deck with the title ${title}`,
        [{ text: 'OK' }]
      );
    } else {
      Keyboard.dismiss();
      this.props.saveNewDeck(title, this.props.navigation.navigate);
    }
  }

  onChangeText = (title) => {
    this.setState({ title });
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
          <View>
            <H2>What is the title of your new deck?</H2>
            <Item style={{ paddingTop: 20, marginBottom: 20 }}>
              <Input placeholder="Deck Title" onChangeText={this.onChangeText} />
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

const mapStateToProps = (state) => ({
  decks: state.decks,
});

export default connect(mapStateToProps, { saveNewDeck })(NewDeck);
