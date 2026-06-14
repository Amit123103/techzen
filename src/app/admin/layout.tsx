import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, FileText, Settings, Briefcase, Bell, Search, LogOut } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | ReInformTech",
};

const navigation = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard, current: true },
  { name: "Leads", href: "#", icon: Users, current: false },
  { name: "Blog Posts", href: "#", icon: FileText, current: false },
  { name: "Job Applications", href: "#", icon: Briefcase, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--color-background)] border-r border-[var(--color-border)] flex-shrink-0 fixed inset-y-0 z-10 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-[var(--color-border)]">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-[var(--color-text)] flex items-center justify-center">
              <span className="text-[var(--color-background)] font-bold text-lg leading-none">R</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--color-text)]">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                item.current
                  ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.current ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"}`} />
              {item.name}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-[var(--color-border)]">
          <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[var(--color-muted)] hover:text-red-500 w-full rounded-lg transition-colors hover:bg-red-500/10">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-64 flex flex-col min-w-0">
        <header className="h-16 bg-[var(--color-background)] border-b border-[var(--color-border)] sticky top-0 z-10 flex items-center justify-between px-6 lg:px-8">
          <div className="flex flex-1">
            <div className="w-full max-w-lg relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[var(--color-muted)]" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border-none bg-transparent text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[var(--color-muted)] hover:text-[var(--color-text)] relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[var(--color-background)]"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
