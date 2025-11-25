import { create }  from 'zustand';
import { devtools, persist } from 'zustand/middleware';


interface Notification {
  id: string;
  title: string;
  time: string;
  read: boolean;
}

interface NotificationsState {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

export const useNotificationsStore = create<NotificationsState>()(
  devtools(
    persist(
      (set) => ({
        notifications: [],

        addNotification: (notification) =>
          set((state) => ({
            notifications: [notification, ...state.notifications],
          })),

        markAsRead: (id) =>
          set((state) => ({
            notifications: state.notifications.map((notif) =>
              notif.id === id ? { ...notif, read: true } : notif
            ),
          })),

        markAllAsRead: () =>
          set((state) => ({
            notifications: state.notifications.map((notif) => ({
              ...notif,
              read: true,
            })),
          })),

        clearNotifications: () => set({ notifications: [] }),
      }),
      {
        name: 'notifications-storage',
      }
    )
  )
);
