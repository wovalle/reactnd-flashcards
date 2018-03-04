import { AsyncStorage } from 'react-native';
import { storageKey } from './constants';

export const fetchDecks = async () => {
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
}

export function getDeck(id) {
  return AsyncStorage.getItem(storageKey);
}

export function saveDeckTitle(title) {
  return AsyncStorage.getItem(storageKey);
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(storageKey);
}