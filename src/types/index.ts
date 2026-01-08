// API Types
export interface MuscleGroup {
  muscleGroupId: number;
  muscleGroupName: string;
}

export interface Exercise {
  exerciseId: number;
  exerciseName: string;
  equipment: string;
  isActive: boolean;
  muscleGroupId: number;
  muscleGroupName: string;
}

export interface WorkoutSet {
  set: number;
  reps: number;
  weightKg: number;
}

export interface WorkoutExercise {
  exerciseId: number;
  muscleGroupId: number;
  freeTextName: string;
  sets: WorkoutSet[];
  notes?: string;
}

export interface Workout {
  id?: string;
  userId: string;
  takenAt: string;
  name: string;
  notes?: string;
  exercises: WorkoutExercise[];
  createdAt?: string;
}
