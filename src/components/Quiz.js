import React from 'react';
import { Container, Header, Content, Input, View, Item, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card';

class Quiz extends React.Component {
  state = {
    questionNumber: 0,
    deck: { questions: [] },
    correctQuestions: 0,
    showAnswer: false,
  }

  static navigationOptions = () => {
    return {
      title: 'Quiz'
    };
  };

  componentDidMount() {
    this.setState({
      deck: this.props.navigation.state.params.deck,
    });
  }

  setAnswer(correct = false) {
    return () => {
      this.setState((state) => ({
        questionNumber: state.questionNumber + 1,
        correctQuestions: correct ? state.correctQuestions + 1 : state.correctQuestions,
        showAnswer: false,
      }), () => {
        if (this.state.questionNumber >= this.state.deck.questions.length) {
          this.props.navigation.replace('QuizSummary', { quiz: this.state })
        }
      });
    }
  }

  toggleShowAnswer = () => {
    this.setState((state) => ({
      showAnswer: !state.showAnswer
    }));
  }

  render() {
    const { deck, questionNumber } = this.state;
    const question = deck.questions[questionNumber];

    if (!question) {
      return null;
    }

    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View>
            <Text>{`${this.state.questionNumber + 1} / ${this.state.deck.questions.length}`}</Text>
          </View>
          <View style={styles.question_container}>
            <Text style={styles.question}>{this.state.showAnswer ? question.answer : question.question}</Text>
            <Text style={styles.answer} onPress={this.toggleShowAnswer}>Answer</Text>
          </View>
          <View style={styles.buttons_container}>
            <Button style={[styles.button, styles.button__correct]} onPress={this.setAnswer(true)}>
              <Text>Correct</Text>
            </Button>
            <Button style={[styles.button, styles.button__incorrect]} onPress={this.setAnswer(false)}>
              <Text>Incorrect</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  question_container: {
    paddingTop: 80,
    alignItems: 'center'
  },
  question: {
    fontSize: 40,
    textAlign: 'center',
  },
  answer: {
    marginTop: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  buttons_container: {
    marginTop: 100,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 150
  },
  button__correct: {
    backgroundColor: 'green',
  },
  button__incorrect: {
    backgroundColor: 'red',
    marginTop: 20,
  }
});

export default Quiz;