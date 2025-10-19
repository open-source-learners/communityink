"use client";

import { Button } from "@/components/ui/button";
import { Menu, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NotificationDropdown } from "@/components/ui/notification-dropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HeaderProps = {
  onMenuClick: () => void;
  userName?: string;
};

export function Header({ onMenuClick, userName = "User" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 h-16 flex items-center px-6 backdrop-blur-md bg-background/80 border-b border-border/80">
      <div className="w-full flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-lg font-medium">Welcome back, {userName} 👋</h1>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Here's what's happening on campus today
          </p>
        </div>
        <div className="flex items-center gap-2">
          <NotificationDropdown />
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="border border-green-400 rounded-full cursor-pointer">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 mt-2 border border-green-400/50 rounded-lg shadow-lg" 
                align="end" 
                sideOffset={8}
                collisionPadding={8}
              >
                <DropdownMenuGroup>
                  <div className="px-2 py-2">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">
                      {userName.toLowerCase().replace(/\s+/g, '.')}@university.edu
                    </p>
                  </div>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="my-1" />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}