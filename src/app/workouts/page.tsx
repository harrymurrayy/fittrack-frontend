"use client";

import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import WorkoutForm from "../../components/WorkoutForm";
import { api } from "../../services/api";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWorkouts();
  }, []);

  async function loadWorkouts() {
    try {
      setLoading(true);
      const data = await api.getWorkouts();
      setWorkouts(data);
    } catch (error) {
      console.error("Error loading workouts:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in-up">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Workouts
              </h1>
              <p className="text-[var(--text-secondary)] mt-1">
                Track and log your gym sessions
              </p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className={`btn ${showForm ? "btn-secondary" : "btn-primary"}`}
            >
              {showForm ? (
                <>
                  <XIcon className="w-4 h-4" />
                  Cancel
                </>
              ) : (
                <>
                  <PlusIcon className="w-4 h-4" />
                  New Workout
                </>
              )}
            </button>
          </div>

          {/* Workout Form */}
          {showForm && (
            <div className="mb-10 animate-fade-in-up">
              <WorkoutForm
                onSuccess={() => {
                  setShowForm(false);
                  loadWorkouts();
                }}
              />
            </div>
          )}

          {/* Workout History */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center">
                <HistoryIcon className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Workout History
                </h2>
                <p className="text-sm text-[var(--text-muted)]">
                  {workouts.length} {workouts.length === 1 ? "session" : "sessions"} logged
                </p>
              </div>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="card p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="skeleton h-6 w-40"></div>
                      <div className="skeleton h-5 w-24"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="skeleton h-4 w-32"></div>
                      <div className="skeleton h-4 w-28"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : workouts.length === 0 ? (
              <div className="card p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4">
                  <DumbbellIcon className="w-8 h-8 text-[var(--text-muted)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  No workouts yet
                </h3>
                <p className="text-[var(--text-secondary)] mb-6 max-w-sm mx-auto">
                  Start tracking your gym sessions to see your progress over time
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn btn-primary"
                >
                  <PlusIcon className="w-4 h-4" />
                  Create First Workout
                </button>
              </div>
            ) : (
              <div className="space-y-4 stagger-children">
                {workouts.map((workout) => (
                  <WorkoutCard key={workout.id} workout={workout} />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}

// Workout Card Component
function WorkoutCard({ workout }: { workout: any }) {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const totalSets = workout.exercises?.reduce(
    (acc: number, ex: any) => acc + (ex.sets?.length || 0),
    0
  ) || 0;

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left hover:bg-[var(--bg-card-hover)] transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0">
              <DumbbellIcon className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {workout.name || "Workout Session"}
              </h3>
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <span>{formatDate(workout.takenAt)}</span>
                <span className="text-[var(--text-muted)]">•</span>
                <span>{formatTime(workout.takenAt)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-lg font-bold text-[var(--text-primary)]">
                  {workout.exercises?.length || 0}
                </p>
                <p className="text-xs text-[var(--text-muted)]">exercises</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-[var(--text-primary)]">{totalSets}</p>
                <p className="text-xs text-[var(--text-muted)]">sets</p>
              </div>
            </div>
            <ChevronIcon
              className={`w-5 h-5 text-[var(--text-muted)] transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {expanded && workout.exercises && workout.exercises.length > 0 && (
        <div className="border-t border-[var(--border-subtle)] p-6 bg-[var(--bg-secondary)] animate-fade-in">
          <div className="space-y-4">
            {workout.exercises.map((ex: any, i: number) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-[var(--text-muted)]">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[var(--text-primary)]">
                    {ex.freeTextName || "Unknown Exercise"}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {ex.sets?.map((set: any, j: number) => (
                      <span key={j} className="badge">
                        {set.reps} × {set.weightKg}kg
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Icons
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function DumbbellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10" />
    </svg>
  );
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
