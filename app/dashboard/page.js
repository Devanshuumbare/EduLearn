"use client";

import React from 'react';

// Quick Stats Component
const QuickStat = ({ icon, title, value, color }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 flex items-center border-l-4 ${color}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color.replace('border-', 'bg-').replace('-600', '-100')} ${color.replace('border-', 'text-')}`}>
        <i className={`${icon} text-xl`}></i>
      </div>
      <div className="ml-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

// Quick Link Component
const QuickLink = ({ icon, title, description, color, href }) => {
  return (
    <a
      href={href}
      className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
          <i className={`${icon} text-white`}></i>
        </div>
        <h3 className="ml-3 text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </a>
  );
};



export default function Dashboard() {
  // Check if user is logged in (client-side only)
  React.useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        // Redirect to login if not logged in
        window.location.href = '/login';
      }
    }
  }, []);

  // Get user data from localStorage
  const [userName, setUserName] = React.useState('User');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.name) {
          setUserName(userData.name);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  // Sample data for today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Sample data for quick stats
  const quickStats = [
    { icon: 'fas fa-user-check', title: 'Attendance', value: '92%', color: 'border-green-600' },
    { icon: 'fas fa-file-alt', title: 'Submissions', value: '8/10', color: 'border-blue-600' },
    { icon: 'fas fa-users', title: 'Meetings', value: '3', color: 'border-purple-600' },
    { icon: 'fas fa-bullhorn', title: 'Notices', value: '5', color: 'border-yellow-600' },
  ];

  // Sample data for quick links
  const quickLinks = [
    {
      icon: 'fas fa-book',
      title: 'My Courses',
      description: 'Access your enrolled courses and learning materials',
      color: 'bg-blue-600',
      href: '/dashboard/courses'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Assignments',
      description: 'View and submit your pending assignments',
      color: 'bg-green-600',
      href: '/dashboard/assignments'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Progress',
      description: 'Track your academic progress and achievements',
      color: 'bg-purple-600',
      href: '/dashboard/progress'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Schedule',
      description: 'View your complete academic calendar and events',
      color: 'bg-red-600',
      href: '/dashboard/calendar'
    },
    {
      icon: 'fas fa-comment-alt',
      title: 'Discussions',
      description: 'Participate in course discussions and forums',
      color: 'bg-yellow-600',
      href: '/dashboard/discussions'
    },
    {
      icon: 'fas fa-file-download',
      title: 'Resources',
      description: 'Download study materials and resources',
      color: 'bg-indigo-600',
      href: '/dashboard/resources'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userName}</h2>
        <p className="text-gray-600">{formattedDate}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => (
          <QuickStat key={index} {...stat} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6">
        {/* Quick Links */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <QuickLink key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">View All</a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div>
                  <p className="text-gray-800">You submitted <span className="font-medium">Physics Assignment 3</span></p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <p className="text-gray-800">You completed <span className="font-medium">Mathematics Quiz 2</span></p>
                  <p className="text-sm text-gray-500">Yesterday at 3:45 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                  <i className="fas fa-comment-alt"></i>
                </div>
                <div>
                  <p className="text-gray-800">New comment on your post in <span className="font-medium">CS101 Discussion</span></p>
                  <p className="text-sm text-gray-500">Yesterday at 1:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
