import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, View } from 'native-base';

class Decks extends React.Component {
  render() {
    const DeckItems = [1, 2, 3, 4].map((i) => (
      <ListItem style={{ height: 150 }} key={i}>
        <Body style={{ alignItems: 'center' }}>
          <Text>{i}</Text>
          <Text note>{`Item #${i}`}</Text>
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

export default Decks;