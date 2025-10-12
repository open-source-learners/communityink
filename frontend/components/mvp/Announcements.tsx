import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Search, 
  Filter, 
  Pin, 
  MessageSquare, 
  Heart,
  Share2,
  ChevronDown,
  Calendar
} from 'lucide-react';

const ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Mid-Semester Break Schedule',
    author: 'Academic Registry',
    authorRole: 'Administration',
    date: '2 hours ago',
    fullDate: 'Oct 11, 2025',
    tag: 'Academic',
    tagColor: 'bg-blue-500',
    content: 'The mid-semester break will run from October 15-22. Classes resume on October 23. Please plan your travel accordingly and ensure all pending assignments are submitted before the break.',
    likes: 45,
    comments: 12,
    isPinned: true,
  },
  {
    id: 2,
    title: 'SRC General Meeting - All Students Invited',
    author: 'Student Representative Council',
    authorRole: 'SRC',
    date: '5 hours ago',
    fullDate: 'Oct 11, 2025',
    tag: 'SRC',
    tagColor: 'bg-purple-500',
    content: 'Join us for the monthly SRC meeting this Friday at 4pm in the Main Hall. We will discuss upcoming events, student concerns, and budget allocation for clubs. Your voice matters!',
    likes: 78,
    comments: 23,
    isPinned: true,
  },
  {
    id: 3,
    title: 'Tech Club Workshop: React Basics',
    author: 'Tech Innovation Club',
    authorRole: 'Club',
    date: '1 day ago',
    fullDate: 'Oct 10, 2025',
    tag: 'Club',
    tagColor: 'bg-green-500',
    content: 'Learn React fundamentals this Saturday from 2-5pm in CS Lab 1. Bring your laptop! Topics covered: Components, Props, State, and Hooks. Perfect for beginners.',
    likes: 124,
    comments: 34,
    isPinned: false,
  },
  {
    id: 4,
    title: 'Library Extended Hours During Exam Period',
    author: 'University Library',
    authorRole: 'Faculty',
    date: '1 day ago',
    fullDate: 'Oct 10, 2025',
    tag: 'Academic',
    tagColor: 'bg-blue-500',
    content: 'Starting next week, the library will be open 24/7 during the exam period. Study rooms available for booking online. Please maintain silence in designated quiet zones.',
    likes: 89,
    comments: 15,
    isPinned: false,
  },
  {
    id: 5,
    title: 'Career Fair: Meet Top Tech Companies',
    author: 'Career Development Office',
    authorRole: 'Administration',
    date: '2 days ago',
    fullDate: 'Oct 9, 2025',
    tag: 'Career',
    tagColor: 'bg-orange-500',
    content: 'Join us on October 20th for the annual career fair. Companies attending include: Microsoft, Google, IBM, and 15+ local tech startups. Bring multiple copies of your CV!',
    likes: 203,
    comments: 56,
    isPinned: false,
  },
  {
    id: 6,
    title: 'Photography Exhibition Opening',
    author: 'Photography Club',
    authorRole: 'Club',
    date: '3 days ago',
    fullDate: 'Oct 8, 2025',
    tag: 'Club',
    tagColor: 'bg-green-500',
    content: 'Showcasing the best student photography from the semester. Exhibition opens on October 18th at 2pm in the Art Gallery. Free entry for all students.',
    likes: 67,
    comments: 18,
    isPinned: false,
  },
  {
    id: 7,
    title: 'Campus WiFi Maintenance Notice',
    author: 'IT Department',
    authorRole: 'Administration',
    date: '4 days ago',
    fullDate: 'Oct 7, 2025',
    tag: 'Facility',
    tagColor: 'bg-gray-500',
    content: 'Scheduled maintenance on October 14th from 2am-6am. Internet services may be intermittent during this period. We apologize for any inconvenience.',
    likes: 34,
    comments: 8,
    isPinned: false,
  },
];

export function Announcements() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredAnnouncements = ANNOUNCEMENTS.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || announcement.tag === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const pinnedAnnouncements = filteredAnnouncements.filter(a => a.isPinned);
  const regularAnnouncements = filteredAnnouncements.filter(a => !a.isPinned);

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl">Announcements</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Stay updated with campus news and events
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search announcements..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-3 md:flex w-full md:w-auto">
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Academic">Academic</TabsTrigger>
                <TabsTrigger value="Club">Clubs</TabsTrigger>
                <TabsTrigger value="SRC" className="hidden md:inline-flex">SRC</TabsTrigger>
                <TabsTrigger value="Career" className="hidden md:inline-flex">Career</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2">
            <Pin className="w-4 h-4 text-primary" />
            <h2 className="text-lg md:text-xl">Pinned</h2>
          </div>
          {pinnedAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      )}

      {/* Regular Announcements */}
      <div className="space-y-3 md:space-y-4">
        {pinnedAnnouncements.length > 0 && (
          <h2 className="text-lg md:text-xl">Recent</h2>
        )}
        {regularAnnouncements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>

      {filteredAnnouncements.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Search className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">No announcements found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function AnnouncementCard({ announcement }: { announcement: typeof ANNOUNCEMENTS[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge className={`${announcement.tagColor} text-white border-0`}>
                {announcement.tag}
              </Badge>
              {announcement.isPinned && (
                <Pin className="w-3 h-3 text-primary fill-primary" />
              )}
            </div>
            <CardTitle className="text-base md:text-lg mb-2 break-words">
              {announcement.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <span className="font-medium">{announcement.author}</span>
              <span>•</span>
              <span className="hidden sm:inline">{announcement.date}</span>
              <span className="sm:hidden">{announcement.fullDate}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 md:space-y-4">
        <p className={`text-sm md:text-base text-muted-foreground ${
          !expanded && 'line-clamp-2'
        }`}>
          {announcement.content}
        </p>

        {announcement.content.length > 150 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:text-primary/80 -ml-2"
          >
            {expanded ? 'Show less' : 'Read more'}
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
              expanded && 'rotate-180'
            }`} />
          </Button>
        )}

        <div className="flex items-center gap-2 md:gap-4 pt-2 border-t border-border flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            className={`gap-1 md:gap-2 ${liked ? 'text-red-500' : ''}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`w-4 h-4 ${liked && 'fill-red-500'}`} />
            <span className="text-xs md:text-sm">
              {announcement.likes + (liked ? 1 : 0)}
            </span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 md:gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs md:text-sm">{announcement.comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 md:gap-2">
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline text-xs md:text-sm">Share</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
