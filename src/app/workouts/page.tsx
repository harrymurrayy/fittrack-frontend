"use client";

import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import WorkoutForm from "../../components/WorkoutForm";
import { api } from "../../services/api";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadWorkouts();
  }, []);

  async function loadWorkouts() {
    try {
      const data = await api.getWorkouts();
      setWorkouts(data);
    } catch (error) {
      console.error("Error loading workouts:", error);
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Workouts</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              {showForm ? "Cancel" : "Create Workout"}
            </button>
          </div>

          {showForm && (
            <div className="mb-8">
              <WorkoutForm
                onSuccess={() => {
                  setShowForm(false);
                  loadWorkouts();
                }}
              />
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Workout History</h2>
            {workouts.length === 0 ? (
              <p className="text-gray-500">
                No workouts yet. Create your first one!
              </p>
            ) : (
              workouts.map((workout) => (
                <div key={workout.id} className="bg-white p-4 rounded shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{workout.name}</h3>
                    <span className="text-gray-500 text-sm">
                      {new Date(workout.takenAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {workout.exercises?.map((ex: any, i: number) => (
                      <div key={i} className="text-sm">
                        <strong>{ex.freeTextName}</strong>: {ex.sets?.length}{" "}
                        sets
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
