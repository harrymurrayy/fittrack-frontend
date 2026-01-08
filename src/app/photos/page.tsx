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
  const [showUpload, setShowUpload] = useState(false);

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
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUploaded = () => {
    setShowUpload(false);
    loadPhotos();
  };

  const handlePhotoDeleted = () => {
    loadPhotos();
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in-up">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Progress Photos
              </h1>
              <p className="text-[var(--text-secondary)] mt-1">
                Document your fitness transformation
              </p>
            </div>
            <button
              onClick={() => setShowUpload(!showUpload)}
              className={`btn ${showUpload ? "btn-secondary" : "btn-primary"}`}
            >
              {showUpload ? (
                <>
                  <XIcon className="w-4 h-4" />
                  Cancel
                </>
              ) : (
                <>
                  <CameraIcon className="w-4 h-4" />
                  Upload Photo
                </>
              )}
            </button>
          </div>

          {/* Upload Section */}
          {showUpload && (
            <div className="mb-10 animate-fade-in-up">
              <PhotoUpload onPhotoUploaded={handlePhotoUploaded} />
            </div>
          )}

          {/* Gallery Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Your Photos
                </h2>
                <p className="text-sm text-[var(--text-muted)]">
                  {photos.length} {photos.length === 1 ? "photo" : "photos"} in your collection
                </p>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-square skeleton rounded-xl"></div>
                ))}
              </div>
            ) : photos.length === 0 ? (
              <div className="card p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4">
                  <CameraIcon className="w-8 h-8 text-[var(--text-muted)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  No progress photos yet
                </h3>
                <p className="text-[var(--text-secondary)] mb-6 max-w-sm mx-auto">
                  Start documenting your fitness journey by uploading your first progress photo
                </p>
                <button
                  onClick={() => setShowUpload(true)}
                  className="btn btn-primary"
                >
                  <CameraIcon className="w-4 h-4" />
                  Upload First Photo
                </button>
              </div>
            ) : (
              <PhotoGallery
                photos={photos}
                onPhotoDeleted={handlePhotoDeleted}
              />
            )}
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}

// Icons
function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
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

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
