"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');

    // Redirect to login page
    window.location.href = '/login';
  };

  const menuItems = [
    { icon: 'fas fa-home', label: 'Dashboard', path: '/dashboard' },
    { icon: 'fas fa-book', label: 'Courses', path: '/dashboard/courses' },
    { icon: 'fas fa-tasks', label: 'Assignments', path: '/dashboard/assignments' },
    { icon: 'fas fa-chart-bar', label: 'Grades', path: '/dashboard/grades' },
    { icon: 'fas fa-calendar-alt', label: 'Calendar', path: '/dashboard/calendar' },
    { icon: 'fas fa-users', label: 'Classmates', path: '/dashboard/classmates' },
    { icon: 'fas fa-comment-alt', label: 'Messages', path: '/dashboard/messages' },
    { icon: 'fas fa-bell', label: 'Notifications', path: '/dashboard/notifications' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64'
        } h-screen fixed left-0 top-0 z-10`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <i className="fas fa-graduation-cap text-purple-600 text-2xl mr-3"></i>
            {!collapsed && <span className="text-xl font-bold text-gray-800">EduLearn</span>}
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-purple-600 focus:outline-none"
          >
            <i className={`fas ${collapsed ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-6">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <Link href={item.path}>
                  <div
                    className={`flex items-center py-3 px-4 ${
                      pathname === item.path
                        ? 'bg-purple-50 text-purple-600 border-r-4 border-purple-600'
                        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                    } transition-colors duration-200`}
                  >
                    <i className={`${item.icon} ${collapsed ? 'text-xl' : 'mr-4'}`}></i>
                    {!collapsed && <span>{item.label}</span>}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 w-full border-t p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-600">
                <i className="fas fa-user"></i>
              </div>
              {!collapsed && (
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">Deva</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${
        collapsed ? 'ml-20' : 'ml-64'
      }`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm h-16 flex items-center px-6">
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-800">
              {pathname === '/dashboard' ? 'Dashboard' :
               pathname.split('/').pop().charAt(0).toUpperCase() + pathname.split('/').pop().slice(1)}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-purple-600 relative">
              <i className="fas fa-bell text-xl"></i>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-gray-500 hover:text-purple-600">
              <i className="fas fa-cog text-xl"></i>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
