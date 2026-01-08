"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMsal } from "@azure/msal-react";
import Navigation from "../components/Navigation";
import { api } from "../services/api";

interface Workout {
  id: string;
  name: string;
  takenAt: string;
  exercises?: {
    freeTextName: string;
    sets?: { reps: number; weightKg: number }[];
  }[];
}

interface Stats {
  thisWeek: number;
  totalWorkouts: number;
  totalPhotos: number;
  streak: number;
}

export default function Home() {
  const router = useRouter();
  const { accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;
  const user = accounts[0];

  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [stats, setStats] = useState<Stats>({
    thisWeek: 0,
    totalWorkouts: 0,
    totalPhotos: 0,
    streak: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (isAuthenticated) {
      loadDashboardData();
    }
  }, [isAuthenticated]);

  async function loadDashboardData() {
    try {
      setLoading(true);
      const [workoutsData, photosData] = await Promise.all([
        api.getWorkouts(),
        api.getPhotos(),
      ]);

      setWorkouts(workoutsData);

      // Calculate stats
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const thisWeekWorkouts = workoutsData.filter(
        (w: Workout) => new Date(w.takenAt) >= weekAgo
      ).length;

      const streak = calculateStreak(workoutsData);

      setStats({
        thisWeek: thisWeekWorkouts,
        totalWorkouts: workoutsData.length,
        totalPhotos: photosData.length,
        streak: streak,
      });
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  }

  function calculateStreak(workouts: Workout[]): number {
    if (workouts.length === 0) return 0;

    // Sort by date descending
    const sorted = [...workouts].sort(
      (a, b) => new Date(b.takenAt).getTime() - new Date(a.takenAt).getTime()
    );

    // Get unique workout dates (just the date part, no time)
    const uniqueDates = new Set<string>();
    sorted.forEach((w) => {
      const date = new Date(w.takenAt).toDateString();
      uniqueDates.add(date);
    });

    const dates = Array.from(uniqueDates).sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime()
    );

    if (dates.length === 0) return 0;

    // Check if the most recent workout was today or yesterday
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
    
    if (dates[0] !== today && dates[0] !== yesterday) {
      return 0; // Streak is broken
    }

    let streak = 1;
    for (let i = 1; i < dates.length; i++) {
      const current = new Date(dates[i - 1]);
      const previous = new Date(dates[i]);
      const diffDays = Math.round(
        (current.getTime() - previous.getTime()) / (24 * 60 * 60 * 1000)
      );

      if (diffDays === 1) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  // Get recent workouts (last 5)
  const recentWorkouts = [...workouts]
    .sort((a, b) => new Date(b.takenAt).getTime() - new Date(a.takenAt).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-12 animate-fade-in-up">
          <p className="text-[var(--text-secondary)] text-lg mb-2">
            {greeting}, <span className="text-[var(--text-primary)]">{user?.name?.split(" ")[0] || "there"}</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Ready to <span className="gradient-text">crush it</span> today?
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            Track your workouts, document your progress, and watch yourself transform.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="grid sm:grid-cols-2 gap-6 mb-12">
          <QuickActionCard
            title="Log Workout"
            description="Record your exercises, sets, and reps"
            icon={<DumbbellIcon />}
            onClick={() => router.push("/workouts")}
            accentColor="var(--accent)"
            delay={100}
          />
          <QuickActionCard
            title="Take Progress Photo"
            description="Document your physical transformation"
            icon={<CameraIcon />}
            onClick={() => router.push("/photos")}
            accentColor="var(--accent)"
            delay={200}
          />
        </section>

        {/* Stats Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Your Journey</h2>
          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="card p-5">
                  <div className="skeleton h-4 w-20 mb-3"></div>
                  <div className="skeleton h-8 w-16"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
              <StatCard
                label="This Week"
                value={stats.thisWeek.toString()}
                subtext="workouts"
                icon={<CalendarIcon />}
              />
              <StatCard
                label="Total"
                value={stats.totalWorkouts.toString()}
                subtext="workouts"
                icon={<FireIcon />}
              />
              <StatCard
                label="Progress"
                value={stats.totalPhotos.toString()}
                subtext="photos"
                icon={<TrendingIcon />}
              />
              <StatCard
                label="Streak"
                value={stats.streak.toString()}
                subtext={stats.streak === 1 ? "day" : "days"}
                icon={<ZapIcon />}
                highlight={stats.streak > 0}
              />
            </div>
          )}
        </section>

        {/* Recent Activity */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">Recent Activity</h2>
            {workouts.length > 0 && (
              <button
                onClick={() => router.push("/workouts")}
                className="text-sm text-[var(--accent)] hover:underline"
              >
                View all →
              </button>
            )}
          </div>

          {loading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="card p-4">
                  <div className="flex items-center gap-4">
                    <div className="skeleton w-12 h-12 rounded-xl"></div>
                    <div className="flex-1">
                      <div className="skeleton h-5 w-32 mb-2"></div>
                      <div className="skeleton h-4 w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : recentWorkouts.length === 0 ? (
            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4">
                <DumbbellIcon className="w-8 h-8 text-[var(--text-muted)]" />
              </div>
              <p className="text-[var(--text-secondary)] mb-4">
                No recent workouts yet. Start tracking your progress!
              </p>
              <button
                onClick={() => router.push("/workouts")}
                className="btn btn-primary"
              >
                Log Your First Workout
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {recentWorkouts.map((workout, index) => (
                <RecentWorkoutCard 
                  key={workout.id} 
                  workout={workout} 
                  onClick={() => router.push("/workouts")}
                  style={{ animationDelay: `${index * 50}ms` }}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Recent Workout Card
function RecentWorkoutCard({ 
  workout, 
  onClick,
  style 
}: { 
  workout: Workout; 
  onClick: () => void;
  style?: React.CSSProperties;
}) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      });
    }
  };

  const totalSets = workout.exercises?.reduce(
    (acc, ex) => acc + (ex.sets?.length || 0),
    0
  ) || 0;

  const exerciseCount = workout.exercises?.length || 0;

  return (
    <button
      onClick={onClick}
      className="card w-full p-4 text-left hover:bg-[var(--bg-card-hover)] transition-colors animate-fade-in-up"
      style={style}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0">
          <DumbbellIcon className="w-6 h-6 text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--text-primary)] truncate">
            {workout.name || "Workout Session"}
          </h3>
          <p className="text-sm text-[var(--text-muted)]">
            {exerciseCount} {exerciseCount === 1 ? "exercise" : "exercises"} • {totalSets} sets
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            {formatDate(workout.takenAt)}
          </p>
        </div>
      </div>
    </button>
  );
}

// Quick Action Card
function QuickActionCard({
  title,
  description,
  icon,
  onClick,
  accentColor,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  accentColor: string;
  delay: number;
}) {
  return (
    <button
      onClick={onClick}
      className="card card-glow p-6 text-left group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `color-mix(in srgb, ${accentColor} 15%, transparent)`, color: accentColor }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
        Get started
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </button>
  );
}

// Stat Card
function StatCard({
  label,
  value,
  subtext,
  icon,
  highlight = false,
}: {
  label: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className={`card p-5 ${highlight ? "border-[var(--accent)]/30" : ""}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
          {label}
        </span>
        <span className={highlight ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}>
          {icon}
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-3xl font-bold ${highlight ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}>
          {value}
        </span>
        <span className="text-sm text-[var(--text-secondary)]">{subtext}</span>
      </div>
    </div>
  );
}

// Icons
function DumbbellIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10" />
    </svg>
  );
}

function CameraIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function FireIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  );
}

function TrendingIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function ZapIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
