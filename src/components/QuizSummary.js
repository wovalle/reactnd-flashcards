import React from 'react';
import { Container, Content, Text, H1, Button } from 'native-base';
import { connect } from 'react-redux';

class QuizSummary extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Summary',
  });

  render() {
    const { quiz } = this.props.navigation.state.params;
    const questionsQuantity = quiz.deck.questions.length;

    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
          <H1>{`You got ${quiz.correctQuestions} out of ${questionsQuantity} questions!`}</H1>
        </Content>
      </Container>
    );
  }
}

export default QuizSummary;