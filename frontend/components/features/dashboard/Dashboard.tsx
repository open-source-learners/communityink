import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { 
  Home, 
  Calendar, 
  Users, 
  Building,
  User,
  Clock,
  MapPin,
  Bell
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Announcements } from '../announcements/Announcements';
import { TimetableCalendar } from '../timetable/TimetableCalendar';
import { ClubsDirectory } from '../clubs/ClubsDirectory';
import { DepartmentsDirectory } from '../departments/DepartmentsDirectory';
import { Sidebar, MobileSidebar } from '@/components/layout/Sidebar';

const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Mid-Semester Break Schedule',
    author: 'Academic Registry',
    date: '2 hours ago',
    tag: 'Academic',
    snippet: 'The mid-semester break will run from October 15-22. Classes resume on October 23.',
  },
  {
    id: 2,
    title: 'SRC General Meeting',
    author: 'Student Representative Council',
    date: '5 hours ago',
    tag: 'SRC',
    snippet: 'Join us for the monthly SRC meeting this Friday at 4pm in the Main Hall.',
  },
  {
    id: 3,
    title: 'Tech Club Workshop: React Basics',
    author: 'Tech Innovation Club',
    date: '1 day ago',
    tag: 'Club',
    snippet: 'Learn React fundamentals this Saturday. Bring your laptop!',
  },
];

const MOCK_TIMETABLE = [
  { day: 'Monday', time: '8:00 AM', course: 'Data Structures', room: 'CS Lab 2', lecturer: 'Dr. Aminu' },
  { day: 'Monday', time: '11:00 AM', course: 'Database Systems', room: 'LT3', lecturer: 'Prof. Fatima' },
  { day: 'Tuesday', time: '9:00 AM', course: 'Web Development', room: 'CS Lab 1', lecturer: 'Mr. Ibrahim' },
  { day: 'Wednesday', time: '10:00 AM', course: 'Software Engineering', room: 'LT1', lecturer: 'Dr. Zainab' },
];

const MOCK_CLUBS = [
  { name: 'Tech Innovation Club', members: 234, category: 'Technology' },
  { name: 'Debate Society', members: 156, category: 'Academic' },
  { name: 'Photography Club', members: 89, category: 'Arts' },
];

type Screen = 'home' | 'announcements' | 'timetable' | 'calendar' | 'clubs' | 'departments' | 'profile' | 'settings' | 'help' | 'logout';

export function Dashboard() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar currentScreen={currentScreen} onNavigate={navigateTo} />
      </div>
      
      {/* Mobile Sidebar */}
      <MobileSidebar 
        currentScreen={currentScreen} 
        onNavigate={navigateTo}
        isOpen={isMobileSidebarOpen}
        onOpenChange={setIsMobileSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Header 
          onMenuClick={() => setIsMobileSidebarOpen(true)} 
          userName="AdamsGeeky" 
        />

        <div className="p-4 md:p-8">
          {currentScreen === 'home' && <HomeScreen navigateTo={navigateTo} />}
          {currentScreen === 'announcements' && <Announcements />}
          {currentScreen === 'timetable' && <TimetableCalendar />}
          {currentScreen === 'clubs' && <ClubsDirectory />}
          {currentScreen === 'departments' && <DepartmentsDirectory />}
          {currentScreen === 'profile' && <ProfileScreen />}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
        active
          ? 'bg-green-600 text-white hover:bg-green-700'
          : 'text-foreground hover:bg-muted'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function HomeScreen({ navigateTo }: { navigateTo: (screen: Screen) => void }) {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('timetable')}>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Today's Classes</p>
            <p className="text-xl md:text-2xl font-semibold">4</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('announcements')}>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between mb-2">
              <Bell className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">New Announcements</p>
            <p className="text-xl md:text-2xl font-semibold">7</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('clubs')}>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">My Clubs</p>
            <p className="text-xl md:text-2xl font-semibold">3</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('timetable')}>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Upcoming Events</p>
            <p className="text-xl md:text-2xl font-semibold">5</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="announcements" className="space-y-4 md:space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="timetable">Timetable</TabsTrigger>
          <TabsTrigger value="clubs">Clubs</TabsTrigger>
        </TabsList>

        <TabsContent value="announcements" className="space-y-3 md:space-y-4">
          {MOCK_ANNOUNCEMENTS.slice(0, 3).map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 flex-1 min-w-0">
                    <CardTitle className="text-base md:text-lg break-words">{announcement.title}</CardTitle>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground flex-wrap">
                      <span>{announcement.author}</span>
                      <span>•</span>
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                  <Badge variant={announcement.tag === 'Academic' ? 'default' : 'secondary'} className="flex-shrink-0">
                    {announcement.tag}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground line-clamp-2">{announcement.snippet}</p>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full" onClick={() => navigateTo('announcements')}>
            View All Announcements
          </Button>
        </TabsContent>

        <TabsContent value="timetable" className="space-y-3 md:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base md:text-lg">Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {MOCK_TIMETABLE.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-lg"
                >
                  <div className="flex-shrink-0 text-center">
                    <p className="text-xs text-muted-foreground">{item.day}</p>
                    <p className="text-sm md:text-base font-medium">{item.time}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm md:text-base break-words">{item.course}</p>
                    <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground mt-1 flex-wrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.room}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">{item.lecturer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Button variant="outline" className="w-full" onClick={() => navigateTo('timetable')}>
            View Full Timetable
          </Button>
        </TabsContent>

        <TabsContent value="clubs" className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {MOCK_CLUBS.slice(0, 3).map((club, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{club.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {club.members} members • {club.category}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full" onClick={() => navigateTo('clubs')}>
            Explore All Clubs
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="space-y-4 md:space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl mb-2">AdamsGeeky</h2>
              <p className="text-muted-foreground mb-4">UG20/SCCS/1001</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Course</p>
                  <p className="font-medium">Computer Science</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Year</p>
                  <p className="font-medium">4th Year</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Department</p>
                  <p className="font-medium">School of Computer Science</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">ug20sccs1001@gsu.edu.ng</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Notification Settings
          </Button>
          <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
