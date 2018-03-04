import React from 'react';
import { Container, Content, Text, H1, Button } from 'native-base';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deckId
  });

  addCard = () => {
    const { deckId } = this.props.navigation.state.params;
    this.props.navigation.navigate('NewCard', { deckId });
  }

  startQuiz = () => {
    const { deckId } = this.props.navigation.state.params;
    this.props.navigation.navigate('Quiz', { deckId });
  }

  render() {
    const { deckId } = this.props.navigation.state.params;

    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
          <H1>{deckId}</H1>
          <Text style={{ color: 'gray', marginBottom: 150 }}>My freeeen</Text>
          <Button style={{ alignSelf: 'center', width: 120, justifyContent: 'center' }} onPress={this.addCard}>
            <Text>Add Card</Text>
          </Button>
          <Button style={{ alignSelf: 'center', width: 120, justifyContent: 'center', marginTop: 10 }} onPress={this.startQuiz}>
            <Text>Start Quiz</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Deck;