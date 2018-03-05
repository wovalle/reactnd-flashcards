import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, View } from 'native-base';
import { connect } from 'react-redux';

import { getDecks } from '../actions/deck.actions';

class Decks extends React.Component {
  componentDidMount() {
    this.props.getDecks();
  }

  onDeckClick = (deck) => {
    return () => {
      this.props.navigation.navigate('Deck', { deck })
    }
  }

  render() {
    const DeckItems = this.props.decks.map(({ title, questions }) => (
      <ListItem style={{ height: 150 }} key={title} onPress={this.onDeckClick({ title, questions })}>
        <Body style={{ alignItems: 'center' }}>
          <Text>{title}</Text>
          <Text note>{`${questions.length} card${questions.length !== 1 ? 's' : ''}`}</Text>
        </Body>
      </ListItem>
    ));

    return (
      <Container>
        <Content>
          <List>
            {DeckItems}
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: Object.values(state.decks),
});

export default connect(mapStateToProps, { getDecks })(Decks);
