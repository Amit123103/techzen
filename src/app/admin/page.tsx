"use client";

import { DollarSign, Users, Briefcase, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 4000, leads: 24 },
  { name: "Feb", revenue: 3000, leads: 13 },
  { name: "Mar", revenue: 2000, leads: 98 },
  { name: "Apr", revenue: 2780, leads: 39 },
  { name: "May", revenue: 1890, leads: 48 },
  { name: "Jun", revenue: 2390, leads: 38 },
  { name: "Jul", revenue: 3490, leads: 43 },
];

const stats = [
  { name: "Total Revenue", value: "$45,231.89", change: "+20.1%", trend: "up", icon: DollarSign },
  { name: "Active Leads", value: "342", change: "+4.5%", trend: "up", icon: Users },
  { name: "Job Applications", value: "89", change: "-2.3%", trend: "down", icon: Briefcase },
  { name: "Conversion Rate", value: "14.2%", change: "+1.2%", trend: "up", icon: TrendingUp },
];

const recentActivity = [
  { id: 1, type: "lead", message: "New enterprise lead from Quantum Health.", time: "2 hours ago" },
  { id: 2, type: "application", message: "Elena R. applied for Senior Frontend Engineer.", time: "4 hours ago" },
  { id: 3, type: "sale", message: "Invoice #3421 paid by ScaleMetrics.", time: "1 day ago" },
  { id: 4, type: "system", message: "Weekly database backup completed.", time: "2 days ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-text)]">Dashboard Overview</h1>
        <p className="text-[var(--color-muted)] text-sm mt-1">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-muted)]">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stat.change}
                {stat.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              </div>
            </div>
            <div>
              <h3 className="text-[var(--color-muted)] text-sm font-medium mb-1">{stat.name}</h3>
              <p className="text-2xl font-bold text-[var(--color-text)]">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">Revenue & Leads</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-muted)', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-muted)', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)', borderRadius: '8px', color: 'var(--color-text)' }}
                  itemStyle={{ color: 'var(--color-text)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-accent)" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-0 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[var(--color-border)]">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="relative flex items-start gap-4">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-accent)] z-10 translate-y-1"></div>
                  <div className="ml-8">
                    <p className="text-sm text-[var(--color-text)] font-medium leading-tight">{activity.message}</p>
                    <p className="text-xs text-[var(--color-muted)] mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full mt-6 py-2 border border-[var(--color-border)] rounded-lg text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
