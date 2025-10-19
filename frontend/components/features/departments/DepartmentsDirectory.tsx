import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  GraduationCap, 
  Users, 
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const DEPARTMENTS = [
  {
    id: 1,
    name: 'Computer Science',
    faculty: 'School of Computing',
    hod: 'Prof. Ahmed Hassan',
    students: 450,
    programs: 3,
    description: 'Leading the way in software development, AI, and cybersecurity education.',
    email: 'cs@university.edu',
    phone: '+234 803 123 4567',
    location: 'CS Building, Block A',
    courses: ['B.Sc Computer Science', 'M.Sc Software Engineering', 'Ph.D Computer Science'],
  },
  {
    id: 2,
    name: 'Electrical Engineering',
    faculty: 'School of Engineering',
    hod: 'Dr. Fatima Bello',
    students: 380,
    programs: 2,
    description: 'Specializing in power systems, electronics, and telecommunications.',
    email: 'ee@university.edu',
    phone: '+234 803 123 4568',
    location: 'Engineering Complex, Block B',
    courses: ['B.Eng Electrical Engineering', 'M.Eng Power Systems'],
  },
  {
    id: 3,
    name: 'Business Administration',
    faculty: 'School of Management',
    hod: 'Prof. Ibrahim Yusuf',
    students: 520,
    programs: 4,
    description: 'Preparing future business leaders and entrepreneurs.',
    email: 'biz@university.edu',
    phone: '+234 803 123 4569',
    location: 'Management Building',
    courses: ['B.Sc Business Admin', 'MBA', 'M.Sc Finance', 'M.Sc Marketing'],
  },
  {
    id: 4,
    name: 'Mathematics',
    faculty: 'School of Sciences',
    hod: 'Dr. Aisha Mohammed',
    students: 280,
    programs: 3,
    description: 'Excellence in pure and applied mathematics education.',
    email: 'math@university.edu',
    phone: '+234 803 123 4570',
    location: 'Science Complex, Block C',
    courses: ['B.Sc Mathematics', 'M.Sc Applied Mathematics', 'Ph.D Mathematics'],
  },
  {
    id: 5,
    name: 'Mass Communication',
    faculty: 'School of Arts & Social Sciences',
    hod: 'Mr. Musa Bello',
    students: 340,
    programs: 2,
    description: 'Training the next generation of journalists and media professionals.',
    email: 'masscom@university.edu',
    phone: '+234 803 123 4571',
    location: 'Arts Building, Block D',
    courses: ['B.Sc Mass Communication', 'M.Sc Journalism'],
  },
  {
    id: 6,
    name: 'Medicine & Surgery',
    faculty: 'School of Medicine',
    hod: 'Prof. Zainab Hassan',
    students: 420,
    programs: 2,
    description: 'Committed to excellence in medical education and healthcare.',
    email: 'medicine@university.edu',
    phone: '+234 803 123 4572',
    location: 'Medical School Complex',
    courses: ['MBBS', 'MD'],
  },
  {
    id: 7,
    name: 'Civil Engineering',
    faculty: 'School of Engineering',
    hod: 'Dr. Usman Garba',
    students: 310,
    programs: 2,
    description: 'Building infrastructure for tomorrow.',
    email: 'civil@university.edu',
    phone: '+234 803 123 4573',
    location: 'Engineering Complex, Block A',
    courses: ['B.Eng Civil Engineering', 'M.Eng Structural Engineering'],
  },
  {
    id: 8,
    name: 'Law',
    faculty: 'Faculty of Law',
    hod: 'Prof. Halima Ahmad',
    students: 290,
    programs: 2,
    description: 'Shaping legal minds for justice and advocacy.',
    email: 'law@university.edu',
    phone: '+234 803 123 4574',
    location: 'Law Faculty Building',
    courses: ['LLB', 'LLM'],
  },
];

export function DepartmentsDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<typeof DEPARTMENTS[0] | null>(null);

  const filteredDepartments = DEPARTMENTS.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedDepartment) {
    return <DepartmentDetails department={selectedDepartment} onBack={() => setSelectedDepartment(null)} />;
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl">Departments</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Explore academic departments and programs
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Departments</p>
                <p className="text-xl md:text-2xl font-semibold">{DEPARTMENTS.length}</p>
              </div>
              <GraduationCap className="w-8 h-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Total Students</p>
                <p className="text-xl md:text-2xl font-semibold">
                  {DEPARTMENTS.reduce((sum, dept) => sum + dept.students, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1">
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Programs</p>
                <p className="text-xl md:text-2xl font-semibold">
                  {DEPARTMENTS.reduce((sum, dept) => sum + dept.programs, 0)}
                </p>
              </div>
              <BookOpen className="w-8 h-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-4 md:pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search departments..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Departments List */}
      <div className="space-y-3 md:space-y-4">
        {filteredDepartments.map((dept) => (
          <Card
            key={dept.id}
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedDepartment(dept)}
          >
            <CardContent className="pt-4 md:pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base md:text-lg break-words">{dept.name}</h3>
                      <p className="text-sm text-muted-foreground">{dept.faculty}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {dept.description}
                  </p>

                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{dept.students} students</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{dept.programs} programs</span>
                    </div>
                    <div className="hidden md:flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{dept.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDepartments.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Search className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">No departments found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function DepartmentDetails({ department, onBack }: { department: typeof DEPARTMENTS[0]; onBack: () => void }) {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Back Button */}
      <Button variant="outline" onClick={onBack} size="sm">
        <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
        Back to Departments
      </Button>

      {/* Department Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl mb-2">{department.name}</h1>
              <Badge variant="secondary" className="mb-3">{department.faculty}</Badge>
              <p className="text-muted-foreground mb-4">{department.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Head of Department</p>
                  <p className="font-medium">{department.hod}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Students</p>
                  <p className="font-medium">{department.students}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Programs Offered</p>
                  <p className="font-medium">{department.programs}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{department.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{department.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{department.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Programs Offered */}
      <Card>
        <CardHeader>
          <CardTitle>Programs Offered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {department.courses.map((course, idx) => (
              <div
                key={idx}
                className="p-3 bg-muted/50 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{course}</span>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
