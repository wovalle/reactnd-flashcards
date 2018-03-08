import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import Decks from './Decks';
import Deck from './Deck';
import Home from '../containers/Home';
import Quiz from './Quiz';
import QuizSummary from './QuizSummary';
import NewCard from './NewCard';
import NewDeck from './NewDeck';

const TabComponent = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks'
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
      }
    }
  },
  {
    navigationOptions: {
      headerTitle: 'Mobile Flashcards'
    }
  }
);

export default StackNavigator({
  Home: {
    screen: TabComponent
  },
  Deck: {
    screen: Deck
  },
  Quiz: {
    screen: Quiz
  },
  QuizSummary: {
    screen: QuizSummary
  },
  NewCard: {
    screen: NewCard
  }
});
