import React, { useState } from 'react';
import { 
  Bell,
  X,
  Check,
  AlertCircle,
  Calendar,
  Filter,
  ChevronDown,
  Clock,
  Radio
} from 'lucide-react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'announcement',
      title: 'System Maintenance',
      message: 'Scheduled maintenance this weekend from 2 AM to 4 AM EST.',
      priority: 'high',
      timestamp: '2025-02-10T10:00:00',
      read: false
    },
    {
      id: 2,
      type: 'individual',
      title: 'New Task Assigned',
      message: 'You have been assigned to Project X by John Manager',
      priority: 'medium',
      timestamp: '2025-02-10T09:30:00',
      read: true
    },
    {
      id: 3,
      type: 'announcement',
      title: 'New Policy Update',
      message: 'Updated work from home policy now available in HR portal',
      priority: 'low',
      timestamp: '2025-02-09T15:20:00',
      read: false
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-gradient-to-br from-red-500 to-rose-600';
      case 'medium':
        return 'bg-gradient-to-br from-yellow-400 to-orange-500';
      case 'low':
        return 'bg-gradient-to-br from-blue-400 to-indigo-500';
      default:
        return 'bg-gradient-to-br from-gray-400 to-gray-500';
    }
  };

  const getTypeStyle = (type) => {
    return type === 'announcement' 
      ? 'bg-purple-100 text-purple-800 border border-purple-200'
      : 'bg-emerald-100 text-emerald-800 border border-emerald-200';
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInHours = Math.abs(now - date) / 36e5;
    
    if (diffInHours < 1) {
      const minutes = Math.floor((now - date) / 60000);
      return `${minutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)} hours ago`;
    } else {
      const days = Math.floor(diffInHours / 24);
      return `${days} days ago`;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="">
        {/* Header */}
        <div className="border-b border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <Bell className="h-6 w-6 text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Notification Timeline</h1>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              {showFilters && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10 overflow-hidden">
                  {['all', 'announcement', 'individual'].map((filterType) => (
                    <button
                      key={filterType}
                      onClick={() => {
                        setFilter(filterType);
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2
                        ${filter === filterType ? 'bg-blue-50 text-blue-600' : ''}
                      `}
                    >
                      <Radio className="h-4 w-4" />
                      <span>{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="p-6">
          <div className="space-y-8">
            {notifications
              .filter(n => filter === 'all' || n.type === filter)
              .map((notification, index) => (
                <div key={notification.id} className="relative">
                  {/* Timeline line */}
                  {index !== notifications.length - 1 && (
                    <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200" />
                  )}
                  
                  <div className="flex space-x-4">
                    {/* Timeline dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${getPriorityStyle(notification.priority)}`}>
                      <Clock className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className={`rounded-xl border p-4 transition-all duration-200 hover:shadow-md
                        ${!notification.read ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-200'}
                      `}>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-gray-900 text-lg">
                                {notification.title}
                              </h3>
                              <span className={`px-2 py-1 text-sm rounded-full ${getTypeStyle(notification.type)}`}>
                                {notification.type}
                              </span>
                            </div>
                            <p className="text-gray-600">{notification.message}</p>
                            
                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {formatTimestamp(notification.timestamp)}
                              </span>
                              <span className="text-gray-400">•</span>
                              <span>{getRelativeTime(notification.timestamp)}</span>
                            </div>
                          </div>

                          <div className="flex space-x-1">
                            {!notification.read && (
                              <button 
                                onClick={() => markAsRead(notification.id)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                                title="Mark as read"
                              >
                                <Check className="h-5 w-5" />
                              </button>
                            )}
                            <button 
                              onClick={() => deleteNotification(notification.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                              title="Delete"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSystem;