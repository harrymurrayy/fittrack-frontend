"use client";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import { MuscleGroup, Exercise, WorkoutExercise } from "../types";

export default function WorkoutForm({ onSuccess }: { onSuccess: () => void }) {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [sessionDate, setSessionDate] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [workoutExercises, setWorkoutExercises] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [mgData, exData] = await Promise.all([
        api.getMuscleGroups(),
        api.getExercises(),
      ]);
      setMuscleGroups(mgData);
      setExercises(exData);
      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Failed to load exercise data");
    }
  }

  function addExercise() {
    setWorkoutExercises([
      ...workoutExercises,
      {
        muscleGroupId: "",
        exerciseId: "",
        sets: [{ reps: 10, weightKg: 20 }],
      },
    ]);
  }

  function removeExercise(index: number) {
    setWorkoutExercises(workoutExercises.filter((_, i) => i !== index));
  }

  function updateExercise(index: number, field: string, value: any) {
    const updated = [...workoutExercises];
    updated[index][field] = value;
    setWorkoutExercises(updated);
  }

  function addSet(exerciseIndex: number) {
    const updated = [...workoutExercises];
    updated[exerciseIndex].sets.push({ reps: 10, weightKg: 20 });
    setWorkoutExercises(updated);
  }

  function updateSet(
    exerciseIndex: number,
    setIndex: number,
    field: string,
    value: number
  ) {
    const updated = [...workoutExercises];
    updated[exerciseIndex].sets[setIndex][field] = value;
    setWorkoutExercises(updated);
  }

  function removeSet(exerciseIndex: number, setIndex: number) {
    const updated = [...workoutExercises];
    updated[exerciseIndex].sets = updated[exerciseIndex].sets.filter(
      (_: any, i: number) => i !== setIndex
    );
    setWorkoutExercises(updated);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!sessionDate || workoutExercises.length === 0) {
      alert("Please add date and at least one exercise");
      return;
    }

    const payload = {
      takenAt: new Date(sessionDate).toISOString(),
      name: sessionName || "Workout Session",
      notes: "",
      exercises: workoutExercises.map((ex) => {
        const exercise = exercises.find(
          (e) => e.exerciseId === Number(ex.exerciseId)
        );
        return {
          exerciseId: Number(ex.exerciseId),
          muscleGroupId: Number(ex.muscleGroupId),
          freeTextName: exercise?.exerciseName || "",
          sets: ex.sets.map((s: any, i: number) => ({
            set: i + 1,
            reps: Number(s.reps),
            weightKg: Number(s.weightKg),
          })),
          notes: "",
        };
      }),
    };

    try {
      setSubmitting(true);
      await api.createWorkout(payload);
      setSessionDate("");
      setSessionName("");
      setWorkoutExercises([]);
      onSuccess();
    } catch (error) {
      console.error("Error saving workout:", error);
      alert("Failed to save workout");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="card p-8">
        <div className="flex items-center justify-center gap-3">
          <div className="spinner spinner-sm"></div>
          <span className="text-[var(--text-secondary)]">Loading exercises...</span>
        </div>
      </div>
    );
  }

  const getFilteredExercises = (muscleGroupId: string) => {
    return exercises.filter((ex) => ex.muscleGroupId === Number(muscleGroupId));
  };

  return (
    <form onSubmit={handleSubmit} className="card overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center">
            <PlusCircleIcon className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              New Workout
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              Log your exercises and sets
            </p>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-6 space-y-6">
        {/* Session Info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label">
              Date & Time <span className="text-[var(--error)]">*</span>
            </label>
            <input
              type="datetime-local"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
            <label className="label">Session Name</label>
            <input
              type="text"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
              placeholder="e.g., Push Day, Leg Day"
              className="input"
            />
          </div>
        </div>

        {/* Exercises */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="label mb-0">
              Exercises <span className="text-[var(--error)]">*</span>
            </label>
            <span className="text-sm text-[var(--text-muted)]">
              {workoutExercises.length} added
            </span>
          </div>

          {workoutExercises.length === 0 ? (
            <div className="border-2 border-dashed border-[var(--border-default)] rounded-xl p-8 text-center">
              <DumbbellIcon className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-3" />
              <p className="text-[var(--text-secondary)] mb-4">
                No exercises added yet
              </p>
              <button
                type="button"
                onClick={addExercise}
                className="btn btn-secondary"
              >
                <PlusIcon className="w-4 h-4" />
                Add Exercise
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {workoutExercises.map((ex, exIndex) => (
                <div
                  key={exIndex}
                  className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-5"
                >
                  {/* Exercise header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center">
                        <span className="text-sm font-bold text-[var(--accent)]">
                          {exIndex + 1}
                        </span>
                      </div>
                      <span className="font-medium text-[var(--text-primary)]">
                        Exercise {exIndex + 1}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeExercise(exIndex)}
                      className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--error)] hover:bg-[var(--bg-tertiary)] transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Muscle group & exercise selects */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="label">Muscle Group</label>
                      <select
                        value={ex.muscleGroupId}
                        onChange={(e) => {
                          updateExercise(exIndex, "muscleGroupId", e.target.value);
                          updateExercise(exIndex, "exerciseId", "");
                        }}
                        className="select"
                        required
                      >
                        <option value="">Select muscle group</option>
                        {muscleGroups.map((mg) => (
                          <option key={mg.muscleGroupId} value={mg.muscleGroupId}>
                            {mg.muscleGroupName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label">Exercise</label>
                      <select
                        value={ex.exerciseId}
                        onChange={(e) =>
                          updateExercise(exIndex, "exerciseId", e.target.value)
                        }
                        className="select"
                        disabled={!ex.muscleGroupId}
                        required
                      >
                        <option value="">
                          {ex.muscleGroupId ? "Select exercise" : "Select muscle group first"}
                        </option>
                        {getFilteredExercises(ex.muscleGroupId).map((exercise) => (
                          <option key={exercise.exerciseId} value={exercise.exerciseId}>
                            {exercise.exerciseName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sets */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">
                        Sets
                      </label>
                      <button
                        type="button"
                        onClick={() => addSet(exIndex)}
                        className="text-sm font-medium text-[var(--accent)] hover:underline flex items-center gap-1"
                      >
                        <PlusIcon className="w-3 h-3" />
                        Add Set
                      </button>
                    </div>

                    <div className="space-y-2">
                      {/* Header */}
                      <div className="grid grid-cols-[50px_1fr_1fr_40px] gap-2 text-xs font-medium text-[var(--text-muted)] px-1">
                        <span>SET</span>
                        <span>REPS</span>
                        <span>WEIGHT (KG)</span>
                        <span></span>
                      </div>

                      {ex.sets.map((set: any, setIndex: number) => (
                        <div
                          key={setIndex}
                          className="grid grid-cols-[50px_1fr_1fr_40px] gap-2 items-center"
                        >
                          <div className="w-8 h-8 rounded-md bg-[var(--bg-tertiary)] flex items-center justify-center">
                            <span className="text-sm font-medium text-[var(--text-muted)]">
                              {setIndex + 1}
                            </span>
                          </div>
                          <input
                            type="number"
                            value={set.reps}
                            onChange={(e) =>
                              updateSet(exIndex, setIndex, "reps", Number(e.target.value))
                            }
                            placeholder="Reps"
                            className="input py-2"
                            min="1"
                            required
                          />
                          <input
                            type="number"
                            value={set.weightKg}
                            onChange={(e) =>
                              updateSet(exIndex, setIndex, "weightKg", Number(e.target.value))
                            }
                            placeholder="Weight"
                            className="input py-2"
                            min="0"
                            step="0.5"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => removeSet(exIndex, setIndex)}
                            className="w-8 h-8 rounded-md flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--error)] hover:bg-[var(--bg-tertiary)] transition-colors"
                            disabled={ex.sets.length === 1}
                          >
                            <XIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Add more exercise button */}
              <button
                type="button"
                onClick={addExercise}
                className="w-full p-4 border-2 border-dashed border-[var(--border-default)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors flex items-center justify-center gap-2"
              >
                <PlusIcon className="w-4 h-4" />
                Add Another Exercise
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <button
          type="submit"
          disabled={submitting || workoutExercises.length === 0}
          className="btn btn-primary w-full sm:w-auto"
        >
          {submitting ? (
            <>
              <div className="spinner spinner-sm"></div>
              Saving...
            </>
          ) : (
            <>
              <CheckIcon className="w-4 h-4" />
              Save Workout
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// Icons
function PlusCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
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

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
