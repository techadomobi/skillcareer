"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  BookOpen, 
  Video, 
  FileText, 
  Award, 
  Users, 
  MessageSquare, 
  Download, 
  Play, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Home,
  User,
  Settings,
  LogOut
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data and enrolled courses from localStorage
    const userData = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const courses = [];
    
    // Find all enrollment data
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('enrollment_')) {
        const enrollment = JSON.parse(localStorage.getItem(key));
        courses.push(enrollment);
      }
    }
    
    setUser(userData);
    setEnrolledCourses(courses);
  }, []);

  const getCourseProgress = (courseId) => {
    // Mock progress calculation - in real app, this would come from backend
    const progressData = {
      'dm01': 45, // Digital Marketing
      'wd01': 75,  // Web Development
      'da01': 20   // Data Analytics
    };
    return progressData[courseId] || 0;
  };

  const getCourseStatus = (courseId) => {
    const progress = getCourseProgress(courseId);
    if (progress === 100) return 'completed';
    if (progress > 0) return 'in_progress';
    return 'not_started';
  };

  const mockLessons = [
    { id: 1, title: 'Introduction to SEO', type: 'video', duration: '15:30', completed: true },
    { id: 2, title: 'Keyword Research Strategies', type: 'video', duration: '22:15', completed: true },
    { id: 3, title: 'On-Page Optimization', type: 'video', duration: '18:45', completed: false },
    { id: 4, title: 'Link Building Techniques', type: 'article', duration: 'Read', completed: false },
    { id: 5, title: 'SEO Analytics & Reporting', type: 'video', duration: '25:20', completed: false },
  ];

  const mockAssignments = [
    { id: 1, title: 'SEO Audit Assignment', dueDate: '2024-04-20', status: 'pending', score: null },
    { id: 2, title: 'Keyword Research Project', dueDate: '2024-04-25', status: 'completed', score: '85%' },
    { id: 3, title: 'Content Strategy Plan', dueDate: '2024-05-01', status: 'pending', score: null },
  ];

  const mockAnnouncements = [
    { id: 1, title: 'New Live Session Scheduled', date: '2024-04-15', content: 'Join us for a live Q&A session on advanced SEO techniques this Friday at 7 PM IST.' },
    { id: 2, title: 'Assignment Deadline Reminder', date: '2024-04-18', content: 'Reminder: The SEO Audit Assignment is due tomorrow. Submit your work before 11:59 PM.' },
    { id: 3, title: 'Course Materials Updated', date: '2024-04-10', content: 'New study materials and templates have been uploaded to the resources section.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800 mb-8">Student Portal</h1>
          <nav className="space-y-2">
            <Button
              variant={activeTab === 'overview' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('overview')}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === 'courses' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('courses')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              My Courses
            </Button>
            <Button
              variant={activeTab === 'progress' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('progress')}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Progress
            </Button>
            <Button
              variant={activeTab === 'resources' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('resources')}
            >
              <Download className="mr-2 h-4 w-4" />
              Resources
            </Button>
            <Button
              variant={activeTab === 'community' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('community')}
            >
              <Users className="mr-2 h-4 w-4" />
              Community
            </Button>
            <Button
              variant={activeTab === 'profile' ? 'default' : 'ghost'}
              className="w-full justify-start mt-8"
              onClick={() => setActiveTab('profile')}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name || 'Student'}!</h2>
          <p className="text-gray-600 mt-2">Continue your learning journey and track your progress.</p>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                  <p className="text-xs text-gray-600">Currently enrolled</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {enrolledCourses.length > 0 
                      ? Math.round(enrolledCourses.reduce((acc, course) => acc + getCourseProgress(course.courseId), 0) / enrolledCourses.length)
                      : 0}%
                  </div>
                  <p className="text-xs text-gray-600">Average completion rate</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Deadline</CardTitle>
                  <Calendar className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Apr 20</div>
                  <p className="text-xs text-gray-600">SEO Audit Assignment</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Announcements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockAnnouncements.map((announcement) => (
                    <div key={announcement.id} className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                      <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Assignments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {assignment.status === 'completed' ? (
                          <Badge variant="success">Completed</Badge>
                        ) : (
                          <Badge variant="warning">Pending</Badge>
                        )}
                        {assignment.score && (
                          <span className="text-sm font-medium text-green-600">{assignment.score}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Courses</h3>
            {enrolledCourses.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Courses Enrolled</h3>
                  <p className="text-gray-600 mb-6">You haven't enrolled in any courses yet. Browse our course catalog to get started!</p>
                  <Button asChild>
                    <Link href="/courses">Browse Courses</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.courseId} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{course.courseTitle}</span>
                        <Badge variant={getCourseStatus(course.courseId) === 'completed' ? 'success' : 'default'}>
                          {getCourseStatus(course.courseId) === 'completed' ? 'Completed' : 'In Progress'}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{course.batchPreference} Batch</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Progress</span>
                          <span>{getCourseProgress(course.courseId)}%</span>
                        </div>
                        <Progress value={getCourseProgress(course.courseId)} className="h-2" />
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/course/${course.courseId}`}>Continue Learning</Link>
                          </Button>
                          <Button size="sm" variant="outline">
                            <Video className="mr-2 h-4 w-4" />
                            Live Sessions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Learning Progress</h3>
            {enrolledCourses.map((course) => (
              <Card key={course.courseId}>
                <CardHeader>
                  <CardTitle>{course.courseTitle}</CardTitle>
                  <CardDescription>Track your progress and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Overall Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm text-gray-600">{getCourseProgress(course.courseId)}%</span>
                      </div>
                      <Progress value={getCourseProgress(course.courseId)} className="h-3" />
                    </div>

                    {/* Lessons Progress */}
                    <div>
                      <h4 className="font-semibold mb-3">Lessons</h4>
                      <div className="space-y-2">
                        {mockLessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              {lesson.type === 'video' ? <Video className="h-4 w-4 text-blue-600" /> : <FileText className="h-4 w-4 text-green-600" />}
                              <div>
                                <h5 className="font-medium text-gray-900">{lesson.title}</h5>
                                <p className="text-xs text-gray-600">{lesson.duration}</p>
                              </div>
                            </div>
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <Clock className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Assignments */}
                    <div>
                      <h4 className="font-semibold mb-3">Assignments</h4>
                      <div className="space-y-2">
                        {mockAssignments.map((assignment) => (
                          <div key={assignment.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div>
                              <h5 className="font-medium text-gray-900">{assignment.title}</h5>
                              <p className="text-xs text-gray-600">Due: {assignment.dueDate}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {assignment.status === 'completed' ? (
                                <Badge variant="success">Completed</Badge>
                              ) : (
                                <Badge variant="warning">Pending</Badge>
                              )}
                              {assignment.score && (
                                <span className="text-sm font-medium text-green-600">{assignment.score}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Course Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Study Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <span>SEO Guide PDF</span>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <span>Template Pack</span>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <span>Cheat Sheets</span>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Video Library</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <Play className="h-5 w-5 text-blue-600" />
                    <div>
                      <h5 className="font-medium">Advanced SEO Techniques</h5>
                      <p className="text-xs text-gray-600">45 min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <Play className="h-5 w-5 text-blue-600" />
                    <div>
                      <h5 className="font-medium">Content Strategy</h5>
                      <p className="text-xs text-gray-600">32 min</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-6">
                    <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900">Course Completion</h4>
                    <p className="text-sm text-gray-600 mt-2">Complete all modules and assignments to earn your certificate.</p>
                  </div>
                  <Button className="w-full" disabled>
                    Certificate Not Available
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Student Community</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Forums</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">SEO Best Practices</h4>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Has anyone tried the new Google algorithm updates? Any tips for staying ahead?</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>By: Alex Johnson</span>
                        <span>12 replies</span>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Content Marketing Ideas</h4>
                        <span className="text-xs text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Looking for creative content ideas for B2B marketing. Any successful strategies?</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>By: Maya Patel</span>
                        <span>8 replies</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Discussion
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Study Groups</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium mb-2">SEO Mastermind Group</h4>
                      <p className="text-sm text-gray-600 mb-3">Weekly discussions on SEO trends and strategies.</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">15 members</span>
                        <Button size="sm" variant="outline">Join Group</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium mb-2">Content Creators Circle</h4>
                      <p className="text-sm text-gray-600 mb-3">Share content ideas and get feedback.</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">8 members</span>
                        <Button size="sm" variant="outline">Join Group</Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Create Study Group
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Profile Settings</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={user?.name || ''} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue={user?.email || ''} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        defaultValue={user?.phone || ''} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Batch Preference</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Regular (Weekdays)</option>
                        <option>Weekend</option>
                        <option>Fast Track</option>
                      </select>
                    </div>
                  </div>
                  <Button className="mt-4">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-medium">April 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Courses</span>
                      <span className="font-medium">{enrolledCourses.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">In Progress</span>
                      <span className="font-medium">{enrolledCourses.length}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Recent Activity</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>Enrolled in Digital Marketing Masterclass</div>
                      <div>Completed SEO Fundamentals module</div>
                      <div>Submitted first assignment</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;