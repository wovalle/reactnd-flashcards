import React from 'react';
import { Container, Content, Text, H1, Button, View } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

class QuizSummary extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Summary',
  });

  goBack = () => {
    this.props.navigation.goBack();
  }

  restart = () => {
    const { quiz } = this.props.navigation.state.params;
    this.props.navigation.replace('Quiz', { deck: quiz.deck });
  }

  render() {
    const { quiz } = this.props.navigation.state.params;
    const questionsQuantity = quiz.deck.questions.length;

    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
          <H1>{`You got ${quiz.correctQuestions} out of ${questionsQuantity} questions!`}</H1>
          <View style={styles.buttons_container}>
            <Button>
              <Text onPress={this.goBack}>Back to deck</Text>
            </Button>
            <Button style={styles.button_restart}>
              <Text onPress={this.restart}>Restart Quiz</Text>
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
  buttons_container: {
    marginTop: 140,
  },
  button_restart: {
    marginTop: 20,
  }
});

export default QuizSummary;