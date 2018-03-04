import React from 'react';
import { Container, Header, Content, Input, View, Item, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card';

class Quiz extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View>
            <Text>{`2 / 2`}</Text>
          </View>
          <View style={styles.question_container}>
            <Text style={styles.question}>Does React Native works with Android?</Text>
            <Text style={styles.answer}>Answer</Text>
          </View>
          <View style={styles.buttons_container}>
            <Button style={[styles.button, styles.button__correct]}>
              <Text>Correct</Text>
            </Button>
            <Button style={[styles.button, styles.button__incorrect]}>
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
    fontSize: 40
  },
  answer: {
    marginTop: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  buttons_container: {
    marginTop: 160,
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