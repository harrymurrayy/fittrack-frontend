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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedPhotos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Photo */}
            <div className="aspect-square bg-gray-100 relative">
              <img
                src={photo.blobUrl}
                alt={`Progress photo from ${formatDate(photo.takenAt)}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold text-black">
                  {formatDate(photo.takenAt)}
                </p>
                {photo.weight && (
                  <p className="text-sm text-gray-600">{photo.weight} kg</p>
                )}
              </div>

              {photo.notes && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {photo.notes}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size view */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-black">
                Progress Photo
              </h3>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-gray-500 hover:text-black text-2xl"
              >
                ×
              </button>
            </div>

            {/* Image */}
            <div className="p-4">
              <img
                src={selectedPhoto.blobUrl}
                alt="Progress photo"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Details */}
            <div className="p-4 border-t border-gray-200 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-black">
                  Date Taken:
                </span>
                <span className="text-sm text-gray-600">
                  {formatDate(selectedPhoto.takenAt)}
                </span>
              </div>

              {selectedPhoto.weight && (
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-black">
                    Weight:
                  </span>
                  <span className="text-sm text-gray-600">
                    {selectedPhoto.weight} kg
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-sm font-medium text-black">
                  Uploaded:
                </span>
                <span className="text-sm text-gray-600">
                  {formatDate(selectedPhoto.uploadedAt)}
                </span>
              </div>

              {selectedPhoto.notes && (
                <div>
                  <p className="text-sm font-medium text-black mb-1">Notes:</p>
                  <p className="text-sm text-gray-600">{selectedPhoto.notes}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => window.open(selectedPhoto.blobUrl, "_blank")}
                className="flex-1 bg-gray-100 text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Open Original
              </button>
              <button
                onClick={() => handleDelete(selectedPhoto.id)}
                disabled={deleting}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 transition-colors"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
