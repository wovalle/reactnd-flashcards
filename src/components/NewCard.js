import React from 'react';
import { Container, Content, Text, Input, Button, Item } from 'native-base';
import { Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';

import { saveQuestion } from '../actions/deck.actions';

class NewCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    };
  };

  onPress = () => {
    if (!this.state.answer.trim() || !this.state.question.trim()) {
      Keyboard.dismiss();

      Alert.alert(
        'Error',
        'Question and answer fields are required.',
        [{ text: 'OK' }]
      );

      return;
    }

    const { deck } = this.props.navigation.state.params;
    this.props.saveQuestion(deck.title, this.state.question, this.state.answer, () => this.props.navigation.goBack());
  }

  onChangeText = (field) => {
    return (val) => {
      this.setState({
        [field]: val
      });
    }
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <Item style={{ paddingTop: 10 }}>
            <Input placeholder="Question" value={this.state.question} onChangeText={this.onChangeText('question')} />
          </Item>
          <Item style={{ paddingTop: 20 }}>
            <Input placeholder="Answer" value={this.state.answer} onChangeText={this.onChangeText('answer')} />
          </Item>
          <Button style={{ alignSelf: 'center', width: 120, justifyContent: 'center', marginTop: 10 }} onPress={this.onPress}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(() => ({}), { saveQuestion })(NewCard);