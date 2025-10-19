"use client";

import { Button } from "@/components/ui/button";
import { Menu, Bell } from "lucide-react";
import { useState } from "react";

type HeaderProps = {
  onMenuClick: () => void;
  userName?: string;
};

export function Header({ onMenuClick, userName = "User" }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 md:px-8 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl">Welcome back, {userName} 👋</h1>
            <p className="text-sm text-muted-foreground hidden sm:block">
              Here's what's happening on campus today
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </Button>
      </div>
    </header>
  );
}