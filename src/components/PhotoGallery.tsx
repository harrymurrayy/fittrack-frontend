"use client";

import { useState } from "react";

interface Photo {
  id: string;
  blobUrl: string;
  weight?: number;
  notes?: string;
  takenAt: string;
  uploadedAt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  onPhotoDeleted: () => void;
}

export default function PhotoGallery({
  photos,
  onPhotoDeleted,
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [deleting, setDeleting] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleDelete = async (photoId: string) => {
    if (!confirm("Are you sure you want to delete this photo?")) {
      return;
    }

    try {
      setDeleting(true);
      // TODO: Implement delete API call
      // await api.deletePhoto(photoId);
      alert("Delete functionality coming soon!");
      onPhotoDeleted();
    } catch (error) {
      console.error("Failed to delete photo:", error);
      alert("Failed to delete photo");
    } finally {
      setDeleting(false);
    }
  };

  // Sort photos by date (newest first)
  const sortedPhotos = [...photos].sort(
    (a, b) => new Date(b.takenAt).getTime() - new Date(a.takenAt).getTime()
  );

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger-children">
        {sortedPhotos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[var(--bg-tertiary)] card-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {/* Image */}
            <img
              src={photo.blobUrl}
              alt={`Progress photo from ${formatDate(photo.takenAt)}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-medium text-sm">
                  {formatDate(photo.takenAt)}
                </p>
                {photo.weight && (
                  <p className="text-white/70 text-xs mt-0.5">
                    {photo.weight} kg
                  </p>
                )}
              </div>
            </div>

            {/* Date badge (always visible) */}
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur text-white text-xs font-medium">
                {formatDate(photo.takenAt)}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal for full-size view */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

          {/* Modal content */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors z-10"
            >
              <XIcon className="w-6 h-6" />
            </button>

            {/* Image container */}
            <div className="relative flex-1 min-h-0 rounded-t-2xl overflow-hidden bg-[var(--bg-secondary)]">
              <img
                src={selectedPhoto.blobUrl}
                alt="Progress photo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details panel */}
            <div className="bg-[var(--bg-card)] rounded-b-2xl border-t border-[var(--border-subtle)]">
              {/* Info grid */}
              <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Date Taken
                  </p>
                  <p className="font-medium text-[var(--text-primary)]">
                    {formatDate(selectedPhoto.takenAt)}
                  </p>
                </div>

                {selectedPhoto.weight && (
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      Weight
                    </p>
                    <p className="font-medium text-[var(--text-primary)]">
                      {selectedPhoto.weight} kg
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Uploaded
                  </p>
                  <p className="font-medium text-[var(--text-primary)]">
                    {formatDate(selectedPhoto.uploadedAt)}
                  </p>
                </div>

                {selectedPhoto.notes && (
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      Notes
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
                      {selectedPhoto.notes}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 flex gap-3">
                <button
                  onClick={() => window.open(selectedPhoto.blobUrl, "_blank")}
                  className="btn btn-secondary flex-1"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Open Original
                </button>
                <button
                  onClick={() => handleDelete(selectedPhoto.id)}
                  disabled={deleting}
                  className="btn btn-danger flex-1"
                >
                  {deleting ? (
                    <>
                      <div className="spinner spinner-sm"></div>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <TrashIcon className="w-4 h-4" />
                      Delete
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Icons
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
