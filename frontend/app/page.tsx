"use client";

// MVP Dashboard
import { Dashboard } from '@/components/mvp/Dashboard';

export default function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 overflow-auto bg-background">
       <Dashboard />
      </main>
    </div>
  );
}

