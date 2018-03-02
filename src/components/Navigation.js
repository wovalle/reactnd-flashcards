import { StackNavigator, TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import Decks from './Decks';
import Home from '../containers/Home';
import Quiz from './Quiz';
import NewCard from './NewCard';
import NewDeck from './NewDeck';

const TabComponent = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Deck List',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      headerTitle: 'Deck List'
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'purple' : 'white',
      style: {
        height: 56,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default StackNavigator({
  Home: {
    screen: TabComponent
  },
  Decks: {
    screen: Decks
  }
});
