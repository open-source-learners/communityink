"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Bell,
  Calendar,
  Users,
  Building,
  User,
  ChevronLeft,
  Menu,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", screen: "home" as const },
  { icon: Bell, label: "Announcements", screen: "announcements" as const },
  { icon: Calendar, label: "Timetable & Calendar", screen: "timetable" as const },
  { icon: Users, label: "Clubs", screen: "clubs" as const },
  { icon: Building, label: "Departments", screen: "departments" as const },
  { icon: User, label: "Profile", screen: "profile" as const },
];

const bottomNavItems = [
  { icon: Settings, label: "Settings", screen: "settings" as const },
  { icon: LogOut, label: "Logout", screen: "logout" as const },
];

type Screen = 'home' | 'announcements' | 'timetable' | 'calendar' | 'clubs' | 'departments' | 'profile' | 'settings' | 'logout';

interface SidebarProps {
  currentScreen?: Screen;
  onNavigate?: (screen: Screen) => void;
}

export function Sidebar({ currentScreen = 'home', onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (label: string) => {
    if (onNavigate) {
      const screenMap: Record<string, Screen> = {
        'Home': 'home',
        'Announcements': 'announcements',
        'Timetable & Calendar': 'timetable',
        'Clubs': 'clubs',
        'Departments': 'departments',
        'Profile': 'profile',
        'Settings': 'settings',
        'Logout': 'logout'
      };
      onNavigate(screenMap[label] || 'home');
    }
  };

  return (
    <div className="relative h-screen flex">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={cn(
          "absolute -right-3 top-6 z-20 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-md transition-all hover:scale-105",
          isCollapsed ? "rotate-180" : ""
        )}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>

      <motion.div
        initial={{ width: 240 }}
        animate={{ width: isCollapsed ? 64 : 240 }}
        className={cn(
          "relative flex h-full flex-col border-r bg-card text-card-foreground transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-60"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b px-4">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isCollapsed ? 0 : 1 }}
            className={cn("whitespace-nowrap font-bold")}
          >
            CommunityInk
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isCollapsed ? 1 : 0,
              scale: isCollapsed ? 1 : 0.8,
            }}
            className={cn("absolute text-xl font-bold")}
          >
            CI
          </motion.div>
        </div>

        {/* Navigation Items */}
        <ScrollArea className="flex-1">
          <nav className="space-y-1 p-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <button
                    onClick={() => handleItemClick(item.label)}
                    className={cn(
                      "group flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-green-600/10 text-green-600"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className={cn("h-5 w-5", isCollapsed ? "mx-auto" : "mr-3")} />
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {isActive && !isCollapsed && (
                      <motion.div
                        layoutId="activeNavItem"
                        className="absolute right-0 h-6 w-1 rounded-l-full bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Bottom Navigation */}
        <div className="border-t p-2">
          {bottomNavItems.map((item) => {
            const isActive = currentScreen === item.screen;
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <button
                  onClick={() => handleItemClick(item.label)}
                  className={cn(
                    "group flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-green-600/10 text-green-600"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isCollapsed ? "mx-auto" : "mr-3")} />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.15 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* User Profile */}
        <div className="border-t p-3">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User className="h-4 w-4" />
            </div>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                  className="ml-3"
                >
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Student</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface MobileSidebarProps {
  currentScreen?: Screen;
  onNavigate?: (screen: Screen) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileSidebar({ currentScreen = 'home', onNavigate, isOpen, onOpenChange }: MobileSidebarProps) {
  const handleItemClick = (label: string) => {
    if (onNavigate) {
      const screenMap: Record<string, Screen> = {
        'Home': 'home',
        'Announcements': 'announcements',
        'Timetable & Calendar': 'timetable',
        'Clubs': 'clubs',
        'Departments': 'departments',
        'Profile': 'profile',
        'Settings': 'settings',
        'Logout': 'logout'
      };
      onNavigate(screenMap[label] || 'home');
    }
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 z-50 h-full w-64 bg-card shadow-lg md:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b px-4">
              <div className="font-bold">CommunityInk</div>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-full p-1 hover:bg-accent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <ScrollArea className="h-[calc(100%-4rem)]">
              <nav className="space-y-1 p-2">
                {[...navItems, ...bottomNavItems].map((item) => {
                  const isActive = currentScreen === item.screen;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleItemClick(item.label)}
                      className={cn(
                        "flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-green-600/10 text-green-600"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </ScrollArea>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}