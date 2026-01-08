"use client";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import { MuscleGroup, Exercise, WorkoutExercise } from "../types";

export default function WorkoutForm({ onSuccess }: { onSuccess: () => void }) {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

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
      await api.createWorkout(payload);
      alert("Workout saved!");
      setSessionDate("");
      setSessionName("");
      setWorkoutExercises([]);
      onSuccess();
    } catch (error) {
      console.error("Error saving workout:", error);
      alert("Failed to save workout");
    }
  }

  if (loading) return <div>Loading...</div>;

  const getFilteredExercises = (muscleGroupId: string) => {
    return exercises.filter((ex) => ex.muscleGroupId === Number(muscleGroupId));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Create Workout</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2 font-semibold">Date</label>
          <input
            type="datetime-local"
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Session Name</label>
          <input
            type="text"
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
            placeholder="e.g., Chest Day"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {workoutExercises.map((ex, exIndex) => (
        <div key={exIndex} className="border p-4 rounded mb-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">Exercise {exIndex + 1}</h3>
            <button
              type="button"
              onClick={() => removeExercise(exIndex)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block mb-1 text-sm">Muscle Group</label>
              <select
                value={ex.muscleGroupId}
                onChange={(e) => {
                  updateExercise(exIndex, "muscleGroupId", e.target.value);
                  updateExercise(exIndex, "exerciseId", "");
                }}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select</option>
                {muscleGroups.map((mg) => (
                  <option key={mg.muscleGroupId} value={mg.muscleGroupId}>
                    {mg.muscleGroupName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm">Exercise</label>
              <select
                value={ex.exerciseId}
                onChange={(e) =>
                  updateExercise(exIndex, "exerciseId", e.target.value)
                }
                className="w-full p-2 border rounded"
                disabled={!ex.muscleGroupId}
                required
              >
                <option value="">Select</option>
                {getFilteredExercises(ex.muscleGroupId).map((exercise) => (
                  <option key={exercise.exerciseId} value={exercise.exerciseId}>
                    {exercise.exerciseName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">Sets</label>
              <button
                type="button"
                onClick={() => addSet(exIndex)}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                + Add Set
              </button>
            </div>

            {ex.sets.map((set: any, setIndex: number) => (
              <div key={setIndex} className="flex gap-2 items-center">
                <span className="text-sm w-16">Set {setIndex + 1}</span>
                <input
                  type="number"
                  value={set.reps}
                  onChange={(e) =>
                    updateSet(exIndex, setIndex, "reps", Number(e.target.value))
                  }
                  placeholder="Reps"
                  className="p-2 border rounded w-24"
                  min="1"
                  required
                />
                <input
                  type="number"
                  value={set.weightKg}
                  onChange={(e) =>
                    updateSet(
                      exIndex,
                      setIndex,
                      "weightKg",
                      Number(e.target.value)
                    )
                  }
                  placeholder="Weight (kg)"
                  className="p-2 border rounded w-24"
                  min="0"
                  step="0.5"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeSet(exIndex, setIndex)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addExercise}
        className="w-full p-2 bg-gray-200 rounded mb-4 hover:bg-gray-300"
      >
        + Add Exercise
      </button>

      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
      >
        Save Workout
      </button>
    </form>
  );
}
