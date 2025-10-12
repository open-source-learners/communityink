import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Search, 
  Users, 
  Calendar,
  TrendingUp,
  Heart,
  ChevronRight
} from 'lucide-react';

const CLUBS = [
  {
    id: 1,
    name: 'Tech Innovation Club',
    category: 'Technology',
    members: 234,
    description: 'Building the future through technology and innovation. We organize workshops, hackathons, and tech talks.',
    founded: '2020',
    president: 'Adamu Ibrahim',
    upcomingEvents: 3,
    isJoined: true,
  },
  {
    id: 2,
    name: 'Debate Society',
    category: 'Academic',
    members: 156,
    description: 'Developing critical thinking and public speaking skills through structured debates and competitions.',
    founded: '2018',
    president: 'Fatima Yusuf',
    upcomingEvents: 2,
    isJoined: false,
  },
  {
    id: 3,
    name: 'Photography Club',
    category: 'Arts',
    members: 89,
    description: 'Capturing campus life through the lens. Weekly photo walks and exhibitions.',
    founded: '2021',
    president: 'Ibrahim Sani',
    upcomingEvents: 1,
    isJoined: false,
  },
  {
    id: 4,
    name: 'Entrepreneurship Club',
    category: 'Business',
    members: 198,
    description: 'Fostering innovation and business skills. Connect with mentors and investors.',
    founded: '2019',
    president: 'Aisha Mohammed',
    upcomingEvents: 4,
    isJoined: true,
  },
  {
    id: 5,
    name: 'Drama & Theatre Club',
    category: 'Arts',
    members: 112,
    description: 'Bringing stories to life on stage. Annual performances and drama workshops.',
    founded: '2017',
    president: 'Musa Bello',
    upcomingEvents: 2,
    isJoined: false,
  },
  {
    id: 6,
    name: 'Environmental Club',
    category: 'Community',
    members: 145,
    description: 'Making campus greener. Tree planting, recycling initiatives, and awareness campaigns.',
    founded: '2020',
    president: 'Zainab Hassan',
    upcomingEvents: 1,
    isJoined: false,
  },
  {
    id: 7,
    name: 'Sports & Fitness Club',
    category: 'Sports',
    members: 267,
    description: 'Promoting health and wellness through sports activities and fitness programs.',
    founded: '2016',
    president: 'Usman Garba',
    upcomingEvents: 5,
    isJoined: true,
  },
  {
    id: 8,
    name: 'Writers\' Guild',
    category: 'Academic',
    members: 78,
    description: 'For those who love words. Creative writing workshops, poetry slams, and publications.',
    founded: '2021',
    president: 'Halima Ahmad',
    upcomingEvents: 1,
    isJoined: false,
  },
];

export function ClubsDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [clubs, setClubs] = useState(CLUBS);

  const toggleJoin = (clubId: number) => {
    setClubs(clubs.map(club =>
      club.id === clubId ? { ...club, isJoined: !club.isJoined, members: club.isJoined ? club.members - 1 : club.members + 1 } : club
    ));
  };

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(CLUBS.map(c => c.category)))];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl">Clubs & Societies</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Discover and join student organizations
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <Users className="w-4 h-4 mr-2" />
          Create New Club
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Total Clubs</p>
                <p className="text-xl md:text-2xl font-semibold">{CLUBS.length}</p>
              </div>
              <Users className="w-8 h-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Your Clubs</p>
                <p className="text-xl md:text-2xl font-semibold">
                  {clubs.filter(c => c.isJoined).length}
                </p>
              </div>
              <Heart className="w-8 h-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Total Members</p>
                <p className="text-xl md:text-2xl font-semibold">
                  {CLUBS.reduce((sum, club) => sum + club.members, 0)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Events</p>
                <p className="text-xl md:text-2xl font-semibold">
                  {CLUBS.reduce((sum, club) => sum + club.upcomingEvents, 0)}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search clubs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-3 md:flex w-full md:w-auto">
                {categories.slice(0, 5).map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs md:text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredClubs.map((club) => (
          <Card key={club.id} className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">{club.category}</Badge>
              </div>
              <CardTitle className="text-base md:text-lg break-words">{club.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {club.description}
              </p>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Members</span>
                  <span className="font-medium">{club.members}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-medium">{club.founded}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">President</span>
                  <span className="font-medium truncate ml-2">{club.president}</span>
                </div>
                {club.upcomingEvents > 0 && (
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span>{club.upcomingEvents} upcoming event{club.upcomingEvents > 1 ? 's' : ''}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-auto">
                <Button
                  className={`flex-1 ${
                    club.isJoined
                      ? 'bg-muted text-foreground hover:bg-muted/80'
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="sm"
                  onClick={() => toggleJoin(club.id)}
                >
                  {club.isJoined ? (
                    <>
                      <Heart className="w-4 h-4 mr-2 fill-current" />
                      Joined
                    </>
                  ) : (
                    'Join Club'
                  )}
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredClubs.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Search className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">No clubs found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
