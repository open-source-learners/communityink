import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { 
  Clock, 
  MapPin, 
  User, 
  Calendar as CalendarIcon,
  Download,
  ChevronLeft,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const WEEKLY_TIMETABLE = {
  Monday: [
    { time: '8:00 AM', course: 'Data Structures & Algorithms', code: 'CS301', room: 'CS Lab 2', lecturer: 'Dr. Aminu Ibrahim', duration: '2 hours' },
    { time: '11:00 AM', course: 'Database Management Systems', code: 'CS302', room: 'LT3', lecturer: 'Prof. Fatima Bello', duration: '2 hours' },
  ],
  Tuesday: [
    { time: '9:00 AM', course: 'Web Development', code: 'CS303', room: 'CS Lab 1', lecturer: 'Mr. Ibrahim Sani', duration: '3 hours' },
    { time: '2:00 PM', course: 'Computer Networks', code: 'CS304', room: 'LT2', lecturer: 'Dr. Aisha Mohammed', duration: '2 hours' },
  ],
  Wednesday: [
    { time: '10:00 AM', course: 'Software Engineering', code: 'CS305', room: 'LT1', lecturer: 'Dr. Zainab Hassan', duration: '2 hours' },
    { time: '1:00 PM', course: 'Operating Systems', code: 'CS306', room: 'CS Lab 3', lecturer: 'Mr. Usman Garba', duration: '2 hours' },
  ],
  Thursday: [
    { time: '8:00 AM', course: 'Artificial Intelligence', code: 'CS307', room: 'LT4', lecturer: 'Prof. Ahmed Yusuf', duration: '2 hours' },
    { time: '11:00 AM', course: 'Mobile App Development', code: 'CS308', room: 'CS Lab 1', lecturer: 'Ms. Halima Ahmad', duration: '3 hours' },
  ],
  Friday: [
    { time: '9:00 AM', course: 'Professional Ethics', code: 'GS201', room: 'LT5', lecturer: 'Dr. Musa Bello', duration: '2 hours' },
  ],
};

const CALENDAR_EVENTS = [
  { date: new Date(2025, 9, 15), title: 'Mid-Semester Break Starts', type: 'holiday' },
  { date: new Date(2025, 9, 22), title: 'Classes Resume', type: 'academic' },
  { date: new Date(2025, 9, 20), title: 'Career Fair', type: 'event' },
  { date: new Date(2025, 9, 18), title: 'Photography Exhibition', type: 'event' },
  { date: new Date(2025, 10, 5), title: 'Campus Hackathon', type: 'event' },
  { date: new Date(2025, 10, 10), title: 'Assignment Deadline - CS301', type: 'deadline' },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export function TimetableCalendar() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentWeek, setCurrentWeek] = useState(0);

  const currentDayIndex = DAYS.indexOf(selectedDay);

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl">Timetable & Calendar</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Your academic schedule and important dates
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <Download className="w-4 h-4 mr-2" />
          Export Timetable
        </Button>
      </div>

      <Tabs defaultValue="timetable" className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timetable">Weekly Timetable</TabsTrigger>
          <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
        </TabsList>

        {/* Timetable Tab */}
        <TabsContent value="timetable" className="space-y-4">
          {/* Week Navigation - Mobile */}
          <Card className="md:hidden">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentWeek(currentWeek - 1)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="font-medium">
                  Week {currentWeek === 0 ? 'Current' : currentWeek > 0 ? `+${currentWeek}` : currentWeek}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentWeek(currentWeek + 1)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Day Selector - Mobile */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {DAYS.map((day) => (
                  <Button
                    key={day}
                    variant={selectedDay === day ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedDay(day)}
                    className={`flex-shrink-0 ${
                      selectedDay === day ? 'bg-primary' : ''
                    }`}
                  >
                    {day.slice(0, 3)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Desktop Week View */}
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Weekly Schedule</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground px-4">Current Week</span>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedDay === day
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedDay(day)}
                    >
                      <h3 className="font-medium text-center mb-2">{day}</h3>
                      <div className="space-y-1">
                        {WEEKLY_TIMETABLE[day as keyof typeof WEEKLY_TIMETABLE].map((cls, idx) => (
                          <div
                            key={idx}
                            className="text-xs p-2 bg-muted rounded text-center"
                          >
                            <p className="font-medium truncate">{cls.course}</p>
                            <p className="text-muted-foreground">{cls.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selected Day Details */}
          <Card>
            <CardHeader>
              <CardTitle>{selectedDay}'s Classes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {WEEKLY_TIMETABLE[selectedDay as keyof typeof WEEKLY_TIMETABLE].length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No classes scheduled</p>
                </div>
              ) : (
                WEEKLY_TIMETABLE[selectedDay as keyof typeof WEEKLY_TIMETABLE].map((cls, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-muted/50 rounded-lg border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-base md:text-lg">{cls.course}</h4>
                          <Badge variant="secondary" className="text-xs">{cls.code}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {cls.time}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3" />
                            {cls.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{cls.room}</span>
                      </span>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4 flex-shrink-0" />
                        <span>{cls.lecturer}</span>
                      </span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Card>
              <CardContent className="pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-muted-foreground">Total Courses</p>
                <p className="text-xl md:text-2xl font-semibold">9</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-muted-foreground">Hours/Week</p>
                <p className="text-xl md:text-2xl font-semibold">18</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-muted-foreground">Lab Sessions</p>
                <p className="text-xl md:text-2xl font-semibold">5</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-muted-foreground">Lecturers</p>
                <p className="text-xl md:text-2xl font-semibold">8</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Calendar Tab */}
        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Calendar */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Academic Calendar</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {CALENDAR_EVENTS.slice(0, 5).map((event, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-muted/50 rounded-lg border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs text-primary font-medium">
                          {event.date.toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {event.date.getDate()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm break-words">{event.title}</h4>
                        <Badge
                          variant="secondary"
                          className={`mt-1 text-xs ${
                            event.type === 'holiday' ? 'bg-red-100 text-red-700' :
                            event.type === 'deadline' ? 'bg-orange-100 text-orange-700' :
                            event.type === 'academic' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
