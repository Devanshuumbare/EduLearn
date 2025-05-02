"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Course Card Component
const CourseCard = ({ course }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('timeline');

  // Animation classes for the expanded content
  const expandedContentClasses = expanded
    ? "max-h-[800px] opacity-100 transition-all duration-500 ease-in-out"
    : "max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Course Header with Image */}
      <div
        className="h-40 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="text-xs font-medium bg-purple-600 inline-block px-2 py-1 rounded mb-2">
              {course.code}
            </div>
            <h3 className="text-xl font-bold">{course.title}</h3>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        {/* Faculty Info */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            <i className="fas fa-user text-gray-500"></i>
          </div>
          <div>
            <p className="text-sm text-gray-500">Instructor</p>
            <p className="font-medium">{course.instructor}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <button className="flex flex-col items-center justify-center p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <i className="fas fa-book text-blue-600 mb-1"></i>
            <span className="text-xs text-gray-700">Syllabus</span>
          </button>
          <button className="flex flex-col items-center justify-center p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <i className="fas fa-file-alt text-green-600 mb-1"></i>
            <span className="text-xs text-gray-700">Materials</span>
          </button>
          <button className="flex flex-col items-center justify-center p-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <i className="fas fa-video text-red-600 mb-1"></i>
            <span className="text-xs text-gray-700">Lectures</span>
          </button>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full py-2 px-4 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-600 hover:text-purple-800 text-sm font-medium focus:outline-none transition-all duration-300 flex items-center justify-center"
        >
          {expanded ? 'Show Less' : 'Course Details'}
          <i className={`fas fa-chevron-${expanded ? 'up' : 'down'} ml-2 transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}></i>
        </button>

        {/* Expanded Content */}
        <div className={expandedContentClasses}>
          <div className="mt-4 pt-4 border-t border-gray-100">
            {/* Tabs Navigation */}
            <div className="flex border-b mb-4">
              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'timeline' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Timeline
              </button>
              <button
                onClick={() => setActiveTab('announcements')}
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'announcements' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <i className="fas fa-bullhorn mr-2"></i>
                Announcements
              </button>
              <button
                onClick={() => setActiveTab('peers')}
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'peers' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <i className="fas fa-users mr-2"></i>
                Peers
              </button>
            </div>

            {/* Tab Content */}
            <div className="transition-opacity duration-300">
              {/* Course Timeline */}
              {activeTab === 'timeline' && (
                <div className="space-y-3 animate-fadeIn">
                  {course.timeline.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-10 flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-purple-200 border-2 border-purple-600 mx-auto"></div>
                        {index < course.timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-purple-200 mx-auto"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Announcements */}
              {activeTab === 'announcements' && (
                <div className="space-y-3 animate-fadeIn">
                  {course.announcements.length > 0 ? (
                    course.announcements.map((announcement, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="text-sm font-medium">{announcement.title}</p>
                        <p className="text-xs text-gray-500 mb-1">{announcement.date}</p>
                        <p className="text-sm text-gray-600">{announcement.content}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      <i className="fas fa-bell-slash text-2xl mb-2"></i>
                      <p>No announcements yet</p>
                    </div>
                  )}
                </div>
              )}

              {/* Peers */}
              {activeTab === 'peers' && (
                <div className="animate-fadeIn">
                  <div className="flex flex-wrap">
                    {course.peers.map((peer, index) => (
                      <div key={index} className="flex items-center mr-4 mb-3 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <i className="fas fa-user text-gray-500 text-xs"></i>
                        </div>
                        <span className="text-sm">{peer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CoursesPage() {
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

  // Sample courses data
  const courses = [
    {
      id: 1,
      code: 'CS101',
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Alan Turing',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      progress: 75,
      timeline: [
        { title: 'Introduction to Programming', date: 'Week 1' },
        { title: 'Data Structures', date: 'Week 3' },
        { title: 'Algorithms', date: 'Week 5' },
        { title: 'Object-Oriented Programming', date: 'Week 7' }
      ],
      announcements: [
        {
          title: 'Midterm Exam Schedule',
          date: '2 days ago',
          content: 'The midterm exam will be held on October 15th. Please review chapters 1-5.'
        },
        {
          title: 'Project Groups',
          date: '1 week ago',
          content: 'Project groups have been assigned. Check the course portal for your team members.'
        }
      ],
      peers: ['John Smith', 'Emma Watson', 'Michael Brown', 'Sarah Davis', 'Robert Johnson']
    },
    {
      id: 2,
      code: 'MATH202',
      title: 'Advanced Calculus',
      instructor: 'Prof. Katherine Johnson',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
      progress: 60,
      timeline: [
        { title: 'Limits and Continuity', date: 'Week 1' },
        { title: 'Differentiation', date: 'Week 3' },
        { title: 'Integration', date: 'Week 5' },
        { title: 'Series and Sequences', date: 'Week 7' }
      ],
      announcements: [
        {
          title: 'Office Hours Change',
          date: '3 days ago',
          content: 'Office hours will be moved to Thursdays 2-4 PM starting next week.'
        }
      ],
      peers: ['Alex Turner', 'Jessica Lee', 'David Wilson', 'Lisa Chen']
    },
    {
      id: 3,
      code: 'PHYS101',
      title: 'Physics I: Mechanics',
      instructor: 'Dr. Richard Feynman',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa',
      progress: 40,
      timeline: [
        { title: 'Kinematics', date: 'Week 1' },
        { title: 'Newton\'s Laws', date: 'Week 3' },
        { title: 'Work and Energy', date: 'Week 5' },
        { title: 'Momentum', date: 'Week 7' }
      ],
      announcements: [
        {
          title: 'Lab Equipment',
          date: '1 day ago',
          content: 'New lab equipment has arrived. We will be using it in next week\'s lab session.'
        },
        {
          title: 'Study Group',
          date: '5 days ago',
          content: 'A study group will meet in the library on Wednesdays at 6 PM.'
        }
      ],
      peers: ['Thomas Green', 'Olivia Martinez', 'James Taylor', 'Sophia Kim', 'Daniel Clark']
    },
    {
      id: 4,
      code: 'ENG205',
      title: 'Creative Writing',
      instructor: 'Prof. Jane Austen',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
      progress: 85,
      timeline: [
        { title: 'Narrative Techniques', date: 'Week 1' },
        { title: 'Character Development', date: 'Week 3' },
        { title: 'Plot Structure', date: 'Week 5' },
        { title: 'Dialogue', date: 'Week 7' }
      ],
      announcements: [
        {
          title: 'Guest Speaker',
          date: '4 days ago',
          content: 'We will have a guest speaker, novelist Mark Johnson, on Friday.'
        }
      ],
      peers: ['Emily White', 'Christopher Adams', 'Amanda Scott', 'Ryan Miller']
    }
  ];

  // Search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">My Courses</h2>
          <p className="text-gray-600">Access your enrolled courses and learning materials</p>
        </div>
        <div className="mt-4 md:mt-0 relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-search text-gray-400 text-xl"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-1">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search terms</p>
        </div>
      )}

      {/* Join Live Session Modal (Hidden by default) */}
      {/* This would be implemented with state management to show/hide */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-lg w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Join Live Session</h3>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="mb-6">
            <p className="text-gray-600 mb-4">You are about to join a live session for <span className="font-medium">Introduction to Computer Science</span>.</p>
            <div className="bg-blue-50 p-4 rounded-lg flex items-center mb-4">
              <i className="fas fa-info-circle text-blue-600 mr-3"></i>
              <p className="text-sm text-blue-800">Make sure your camera and microphone are working properly before joining.</p>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10">
                <i className="fas fa-microphone text-gray-700"></i>
              </button>
              <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10">
                <i className="fas fa-video text-gray-700"></i>
              </button>
              <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10">
                <i className="fas fa-cog text-gray-700"></i>
              </button>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium">
              Cancel
            </button>
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium">
              Join Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
