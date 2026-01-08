"use client";

import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import PhotoUpload from "../../components/PhotoUpload";
import PhotoGallery from "../../components/PhotoGallery";
import { api } from "../../services/api";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch photos on load
  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      const data = await api.getPhotos();
      setPhotos(data);
    } catch (error) {
      console.error("Failed to load photos:", error);
      alert("Failed to load photos");
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUploaded = () => {
    // Reload photos after successful upload
    loadPhotos();
  };

  const handlePhotoDeleted = () => {
    // Reload photos after deletion
    loadPhotos();
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">
              Progress Photos
            </h1>
            <p className="text-gray-600">
              Track your fitness journey with progress photos
            </p>
          </div>

          {/* Upload Section */}
          <div className="mb-12">
            <PhotoUpload onPhotoUploaded={handlePhotoUploaded} />
          </div>

          {/* Gallery Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Your Photos</h2>
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading photos...</p>
              </div>
            ) : photos.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">
                  No photos yet. Upload your first progress photo above!
                </p>
              </div>
            ) : (
              <PhotoGallery
                photos={photos}
                onPhotoDeleted={handlePhotoDeleted}
              />
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
