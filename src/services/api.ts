import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../lib/authConfig";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api";

// Initialize MSAL to get tokens
const msalInstance = new PublicClientApplication(msalConfig);

// Initialize the instance once
let isInitialized = false;
async function ensureInitialized() {
  if (!isInitialized) {
    await msalInstance.initialize();
    isInitialized = true;
  }
}

// Helper to get access token
async function getAccessToken(): Promise<string> {
  await ensureInitialized();

  const accounts = msalInstance.getAllAccounts();
  if (accounts.length === 0) {
    throw new Error("No authenticated user");
  }

  try {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0],
    });
    return response.accessToken;
  } catch (error) {
    console.error("Token acquisition failed:", error);
    throw error;
  }
}

// Helper to get user ID from token
async function getUserIdFromToken(): Promise<string> {
  await ensureInitialized();

  const accounts = msalInstance.getAllAccounts();
  if (accounts.length === 0) {
    throw new Error("No authenticated user");
  }
  // Use the unique object ID from Azure AD as userId
  return accounts[0].localAccountId;
}

export const api = {
  // Get all muscle groups
  async getMuscleGroups() {
    const token = await getAccessToken();
    const response = await fetch(`${API_BASE}/musclegroups`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch muscle groups");
    return response.json();
  },

  // Get exercises (optionally filtered by muscle group)
  async getExercises(muscleGroupId?: number) {
    const token = await getAccessToken();
    const url = muscleGroupId
      ? `${API_BASE}/exercises?muscleGroupId=${muscleGroupId}`
      : `${API_BASE}/exercises`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch exercises");
    return response.json();
  },

  // Get workouts for user
  async getWorkouts() {
    const token = await getAccessToken();
    const userId = await getUserIdFromToken();
    const response = await fetch(`${API_BASE}/workouts?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch workouts");
    return response.json();
  },

  // Create new workout
  async createWorkout(workout: any) {
    const token = await getAccessToken();
    const userId = await getUserIdFromToken();
    const response = await fetch(`${API_BASE}/workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...workout, userId }),
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
    const token = await getAccessToken();
    const userId = await getUserIdFromToken();

    const formData = new FormData();
    formData.append("file", photoData.file);
    formData.append("userId", userId);
    formData.append("takenAt", photoData.takenAt);

    if (photoData.weight) {
      formData.append("weight", photoData.weight.toString());
    }

    if (photoData.notes) {
      formData.append("notes", photoData.notes);
    }

    const response = await fetch(`${API_BASE}/photos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to upload photo");
    return response.json();
  },

  // Get user's photos
  async getPhotos() {
    const token = await getAccessToken();
    const userId = await getUserIdFromToken();
    const response = await fetch(`${API_BASE}/photos?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch photos");
    return response.json();
  },

  // Delete photo
  async deletePhoto(photoId: string) {
    const token = await getAccessToken();
    const response = await fetch(`${API_BASE}/photos/${photoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to delete photo");
    return response.json();
  },
};
