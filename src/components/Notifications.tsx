'use client';

import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { useNotificationsStore } from '../stores/notifications.store';

export const Notifications = () => {

  // Notifications store
  const notifications = useNotificationsStore(state => state.notifications);
  const markAsRead = useNotificationsStore(state => state.markAsRead);
  const markAllAsRead = useNotificationsStore(state => state.markAllAsRead);
  const clearNotifications = useNotificationsStore(state => state.clearNotifications);

  // Count unread notifications
  const unreadCount = () => notifications.filter(n => !n.read).length;

  // Dropdown state
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Ref for dropdown to handle outside clicks
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      
      <button
        onClick={toggleDropdown}
        className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200"
      >
        <Bell className='text-gray-700' />
        {unreadCount() > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount()}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            
            <h3 className="font-semibold text-gray-900">Notificaciones</h3>

            {unreadCount() > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-sm text-sky-700 hover:text-sky-800"
              >
                Marcar todas como leídas
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                    !notification.read ? 'bg-sky-50' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className={`font-medium text-sm ${
                        !notification.read ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {notification.title}
                      </h4>
                      <span className="text-xs text-gray-500 mt-2 block">
                        {notification.time}
                      </span>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-sky-700 rounded-full ml-2 mt-1"></div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Bell size={32} className="mx-auto mb-2 text-gray-300" />
                <p>No hay notificaciones</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {
            notifications.length > 0 && (
              <div className="p-3 border-t border-gray-200 text-center">
                <button 
                  onClick={clearNotifications}
                  className="text-sm text-sky-700 hover:text-sky-900 font-medium"
                >
                  Eliminar todas las notificaciones
                </button>
              </div>
            )
          }
        </div>
      )}
    </div>
  );
};