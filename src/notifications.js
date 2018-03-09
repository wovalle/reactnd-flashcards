import { Notifications, Permissions } from 'expo';
import { getNotifications, setNotifications } from './api';

export function clearNotifications() {
  return AsyncStorage.removeItem(notificationsKey).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

const createNotification = () => {
  return {
    title: 'Mobile flashcards',
    body: "Let's check some cards!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
};

export const setAppNotifications = () => {
  getNotifications()
    .then(notifications => {
      if (notifications === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let scheduleDate = new Date();
            scheduleDate.setMinutes(scheduleDate.getMinutes() + 1);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: scheduleDate,
              repeat: 'day'
            });

            setNotifications(true);
          }
        });
      }
    });
};
