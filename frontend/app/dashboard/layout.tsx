import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Shared Header / Navbar */}
      <header className="bg-blue-70 shadow p-4">
        <h1 className="text-xl font-bold text-black">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="p-8">{children}</main>
    </div>
  );
}

