import React from 'react';
import { Container, Content, Text, H1, Button } from 'native-base';
import { connect } from 'react-redux';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deckId,
  });

  addCard = () => {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate('NewCard', { deck });
  }

  startQuiz = () => {
    const { deckId } = this.props.navigation.state.params;
    this.props.navigation.navigate('Quiz', { deckId });
  }

  render() {
    const { title, questions } = this.props.deck;

    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
          <H1>{title}</H1>
          <Text style={{ color: 'gray', marginBottom: 150 }}>{`${questions.length} card${questions.length === 1 ? '' : 's'}`}</Text>
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

const mapStateToProps = (state, props) => {
  return {
    deck: state.decks[props.navigation.state.params.deck.title],
  }
};

export default connect(mapStateToProps, {})(Deck);