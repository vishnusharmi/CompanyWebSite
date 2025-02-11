import React, { useState } from 'react';
import { Bell, Mail, Star, Trash2 } from 'lucide-react';
import './CommunicationDashboard.css'; // Import custom CSS

const CommunicationDashboard = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'System Admin', subject: 'New Task Guidelines Update', content: 'We have updated our task submission guidelines. Please review the new requirements before your next submission.', date: '2025-02-11T10:30:00', status: 'unread', priority: 'high', type: 'announcement' },
    { id: 2, sender: 'Project Manager', subject: 'Quarterly Performance Review', content: 'Your performance metrics for Q1 2025 have been reviewed. Schedule a meeting to discuss your achievements.', date: '2025-02-10T15:45:00', status: 'read', priority: 'medium', type: 'notification' },
    { id: 3, sender: 'Technical Lead', subject: 'System Maintenance Notice', content: 'The task management system will undergo maintenance this weekend. Please complete any pending submissions.', date: '2025-02-09T09:15:00', status: 'read', priority: 'low', type: 'announcement' },
    { id: 4, sender: 'Technical Lead', subject: 'Reminder: Submit Weekly Reports', content: 'Please ensure your weekly reports are submitted before Friday EOD.', date: '2025-02-08T14:20:00', status: 'unread', priority: 'medium', type: 'notification' },
    { id: 5, sender: 'HR Department', subject: 'Annual Leave Policy Update', content: 'We’ve updated our annual leave policy for 2025. Please check the document attached in your inbox.', date: '2025-02-08T11:20:00', status: 'unread', priority: 'medium', type: 'notification' },
{ id: 6, sender: 'Team Lead', subject: 'Code Review Reminder', content: 'Kindly ensure your code is reviewed before the sprint deadline tomorrow.', date: '2025-02-07T14:00:00', status: 'read', priority: 'high', type: 'announcement' },
{ id: 7, sender: 'IT Support', subject: 'VPN Downtime Notification', content: 'The VPN will be temporarily unavailable due to scheduled maintenance tonight from 11 PM to 3 AM.', date: '2025-02-06T18:30:00', status: 'unread', priority: 'low', type: 'notification' },
{ id: 8, sender: 'CEO Office', subject: 'Company Town Hall Meeting', content: 'Join us for the upcoming town hall meeting where we’ll discuss company performance and future goals.', date: '2025-02-05T09:00:00', status: 'read', priority: 'high', type: 'announcement' },
{ id: 9, sender: 'Security Team', subject: 'Password Change Required', content: 'For security reasons, please change your account password before February 15th.', date: '2025-02-04T12:45:00', status: 'unread', priority: 'high', type: 'notification' },
{ id: 10, sender: 'Marketing Team', subject: 'New Campaign Launch', content: 'Our new marketing campaign goes live next week. Review the attached materials to stay updated.', date: '2025-02-03T10:00:00', status: 'read', priority: 'medium', type: 'announcement' }

  ]);

  const getPriorityColor = (priority) => {
    const colors = { high: 'text-red-500', medium: 'text-amber-500', low: 'text-blue-500' };
    return colors[priority] || 'text-gray-500';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date);
  };

  const filteredMessages = messages.filter(message => filter === 'all' || message.type === filter);

  const deleteMessage = (id) => {
    setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
    if (selectedMessage?.id === id) setSelectedMessage(null);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Communications</h1>
        <button className="relative p-3 bg-white shadow rounded-full hover:bg-gray-100 transition">
          <Bell className="w-6 h-6 text-gray-700" />
          {messages.filter(m => m.status === 'unread').length > 0 && (
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          )}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 bg-white shadow-md rounded-xl p-4 space-y-4">
          {['all', 'announcement', 'notification'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`w-full flex items-center p-3 rounded-lg transition shadow-sm ${
                filter === type ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-blue-50 text-gray-700'
              }`}
            >
              {type === 'all' ? <Mail className="w-5 h-5" /> : type === 'announcement' ? <Star className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
              <span className="ml-3 capitalize flex-1">{type === 'all' ? 'All Messages' : type}</span>
              <span className="bg-white text-gray-800 px-2 py-0.5 rounded-full text-xs">
                {type === 'all' ? messages.length : messages.filter(m => m.type === type).length}
              </span>
            </button>
          ))}
        </aside>

        <main className="lg:col-span-3 bg-white shadow-md rounded-xl p-4 h-[560px] overflow-y-auto custom-scrollbar space-y-4">
          {filteredMessages.length ? (
            filteredMessages.map(message => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(message)}
                className={`p-4 bg-gray-50 rounded-xl shadow hover:bg-blue-50 transition cursor-pointer border-l-4 ${
                  message.status === 'unread' ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-gray-800">{message.subject}</h3>
                  <button onClick={(e) => { e.stopPropagation(); deleteMessage(message.id); }} className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">{message.sender} - <span className={getPriorityColor(message.priority)}>{formatDate(message.date)}</span></p>
                <p className="text-gray-700 mt-2 line-clamp-2">{message.content}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No messages found.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default CommunicationDashboard;