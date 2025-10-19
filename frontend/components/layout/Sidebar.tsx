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
  ChevronLeft,
  Menu,
  Settings,
  HelpCircle,
  ChevronRight,
  X,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", screen: "home" as const },
  { icon: Bell, label: "Announcements", screen: "announcements" as const },
  { icon: Calendar, label: "Timetable & Calendar", screen: "timetable" as const },
  { icon: Users, label: "Clubs", screen: "clubs" as const },
  { icon: Building, label: "Departments", screen: "departments" as const },
];

const bottomNavItems = [
  { icon: Settings, label: "Settings", screen: "settings" as const },
  { icon: HelpCircle, label: "Help", screen: "help" as const },
];

type Screen = 'home' | 'announcements' | 'timetable' | 'calendar' | 'clubs' | 'departments' | 'profile' | 'settings' | 'help' | 'logout';

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
      <motion.button
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 z-20 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-md cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: isCollapsed ? 0 : 180 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ChevronRight className="h-4 w-4" />
        </motion.span>
      </motion.button>

      <motion.div
        initial={{ width: 240 }}
        animate={{ 
          width: isCollapsed ? 64 : 240,
          transition: { 
            type: "spring", 
            damping: 25,
            stiffness: 300,
            mass: 0.5
          } 
        }}
        className={cn(
          "relative flex h-full flex-col border-r bg-card text-card-foreground overflow-hidden",
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
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.15 }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                  className="relative"
                >
                  <button
                    onClick={() => handleItemClick(item.label)}
                    className={cn(
                      "group flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-out cursor-pointer",
                      isActive
                        ? "bg-green-600/10 text-green-600"
                        : "text-muted-foreground hover:bg-accent/80 hover:text-accent-foreground"
                    )}
                  >
                    <motion.div
                      layout
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 0.5
                      }}
                    >
                      <Icon className={cn("h-5 w-5 flex-shrink-0", isCollapsed ? "mx-auto" : "mr-3")} />
                    </motion.div>
                    <AnimatePresence mode="wait">
                      {!isCollapsed && (
                        <motion.span
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              type: "spring",
                              stiffness: 300,
                              damping: 25
                            }
                          }}
                          exit={{ 
                            opacity: 0, 
                            x: -10,
                            transition: { duration: 0.1 }
                          }}
                          className="whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {isActive && !isCollapsed && (
                      <motion.div
                        layoutId="activeNavItem"
                        className="absolute right-0 h-6 w-1 rounded-l-full bg-green-600"
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30,
                          mass: 0.5
                        }}
                      />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Bottom Navigation */}
        <div className="mt-auto border-t p-2 space-y-1">
          {bottomNavItems.map((item) => {
            const isActive = currentScreen === item.screen;
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.label}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
                className="relative"
              >
                <button
                  onClick={() => handleItemClick(item.label)}
                  className={cn(
                    "group flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-out",
                    isActive
                      ? "bg-green-600/10 text-green-600"
                      : "text-muted-foreground hover:bg-accent/80 hover:text-accent-foreground"
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
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => onOpenChange(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: "spring", 
                damping: 30,
                stiffness: 400,
                mass: 0.5
              }}
              className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-background shadow-2xl"
            >
              {/* Header */}
              <div className="flex h-16 items-center justify-between border-b px-6">
                <div className="text-xl font-bold tracking-tight">CommunityInk</div>
                <button
                  onClick={() => onOpenChange(false)}
                  className="rounded-full p-1.5 hover:bg-accent transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Main Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-4">
                  {navItems.map((item) => {
                    const isActive = currentScreen === item.screen;
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={item.label}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                      >
                        <button
                          onClick={() => {
                            handleItemClick(item.label);
                            onOpenChange(false);
                          }}
                          className={cn(
                            "flex w-full items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer",
                            isActive
                              ? "bg-green-50 text-green-700"
                              : "text-foreground/80 hover:bg-accent/80"
                          )}
                        >
                          <Icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-green-600" : "text-muted-foreground")} />
                          <span className="ml-3">{item.label}</span>
                          {isActive && (
                            <motion.span
                              layoutId="activeIndicator"
                              className="absolute right-4 h-1.5 w-1.5 rounded-full bg-green-600"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                              }}
                            />
                          )}
                        </button>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
              
              {/* Bottom Navigation */}
              <div className="border-t bg-muted/30 p-4">
                <div className="space-y-1">
                  {bottomNavItems.map((item) => {
                    const isActive = currentScreen === item.screen;
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={item.label}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={() => {
                            handleItemClick(item.label);
                            onOpenChange(false);
                          }}
                          className={cn(
                            "flex w-full items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-green-50 text-green-700"
                              : "text-foreground/80 hover:bg-accent/80"
                          )}
                        >
                          <Icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-green-600" : "text-muted-foreground")} />
                          <span className="ml-3">{item.label}</span>
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}