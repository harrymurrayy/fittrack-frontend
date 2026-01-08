const API_BASE =
  "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api";
const USER_ID = "user_12345";

export const api = {
  // Get all muscle groups
  async getMuscleGroups() {
    const response = await fetch(`${API_BASE}/musclegroups`);
    if (!response.ok) throw new Error("Failed to fetch muscle groups");
    return response.json();
  },

  // Get exercises (optionally filtered by muscle group)
  async getExercises(muscleGroupId?: number) {
    const url = muscleGroupId
      ? `${API_BASE}/exercises?muscleGroupId=${muscleGroupId}`
      : `${API_BASE}/exercises`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch exercises");
    return response.json();
  },

  // Get workouts for user
  async getWorkouts() {
    const response = await fetch(`${API_BASE}/workouts?userId=${USER_ID}`);
    if (!response.ok) throw new Error("Failed to fetch workouts");
    return response.json();
  },

  // Create new workout
  async createWorkout(workout: any) {
    const response = await fetch(`${API_BASE}/workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...workout, userId: USER_ID }),
    });
    if (!response.ok) throw new Error("Failed to create workout");
    return response.json();
  },

  // Upload photo
  async uploadPhoto(photoData: {
    file: File;
    weight?: number;
    notes?: string;
    takenAt: string;
  }) {
    // Create FormData for file upload
    const formData = new FormData();
    formData.append("file", photoData.file);
    formData.append("userId", USER_ID);
    formData.append("takenAt", photoData.takenAt);

    if (photoData.weight) {
      formData.append("weight", photoData.weight.toString());
    }

    if (photoData.notes) {
      formData.append("notes", photoData.notes);
    }

    const response = await fetch(`${API_BASE}/photos`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to upload photo");
    return response.json();
  },

  // Get user's photos
  async getPhotos() {
    const response = await fetch(`${API_BASE}/photos?userId=${USER_ID}`);
    if (!response.ok) throw new Error("Failed to fetch photos");
    return response.json();
  },

  // Delete photo
  async deletePhoto(photoId: string) {
    const response = await fetch(`${API_BASE}/photos/${photoId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete photo");
    return response.json();
  },
};
