"use client"

import * as React from "react"
import { Bell, Calendar, User as UserIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NotificationDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  align?: "center" | "end" | "start"
  sideOffset?: number
}

export function NotificationDropdown({
  className,
  align = "end",
  sideOffset = 8,
  ...props
}: NotificationDropdownProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="border border-green-400 rounded-full cursor-pointer">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border border-background" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-80 mt-2 border border-green-400/50 rounded-lg shadow-xl shadow-black/10 dark:shadow-black/30" 
          align={align}
          sideOffset={sideOffset}
          collisionPadding={8}
        >
          <div className="px-3 py-2">
            <p className="text-sm font-medium">Notifications</p>
          </div>
          <DropdownMenuSeparator className="my-1" />
          <div className="max-h-80 overflow-y-auto">
            <DropdownMenuItem className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-accent">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Bell className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm">New announcement from Computer Science Club</p>
                <p className="text-xs text-muted-foreground mt-0.5">2 minutes ago</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-accent">
              <div className="bg-blue-500/10 p-1.5 rounded-full">
                <UserIcon className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm">John Doe accepted your friend request</p>
                <p className="text-xs text-muted-foreground mt-0.5">1 hour ago</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-start gap-3 px-3 py-2 cursor-pointer hover:bg-accent">
              <div className="bg-amber-500/10 p-1.5 rounded-full">
                <Calendar className="h-4 w-4 text-amber-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm">Upcoming event: Hackathon 2023 starts tomorrow</p>
                <p className="text-xs text-muted-foreground mt-0.5">5 hours ago</p>
              </div>
            </DropdownMenuItem>
          </div>
          <DropdownMenuSeparator className="my-1" />
          <div className="px-3 py-1.5">
            <Button variant="ghost" size="sm" className="w-full text-sm text-primary hover:text-primary">
              View all notifications
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
