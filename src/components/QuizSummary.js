import React from 'react';
import { Container, Content, Text, H1, Button } from 'native-base';
import { connect } from 'react-redux';

class QuizSummary extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Summary',
  });

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
          <H1>Summary</H1>
        </Content>
      </Container>
    );
  }
}

export default QuizSummary;