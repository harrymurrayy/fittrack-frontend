"use client";

import { useState } from "react";
import { api } from "../services/api";

interface PhotoUploadProps {
  onPhotoUploaded: () => void;
}

export default function PhotoUpload({ onPhotoUploaded }: PhotoUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check file type
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setFile(selectedFile);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a photo");
      return;
    }

    try {
      setUploading(true);

      const photoData = {
        file,
        weight: weight ? parseFloat(weight) : undefined,
        notes,
        takenAt: date,
      };

      await api.uploadPhoto(photoData);

      alert("Photo uploaded successfully!");

      // Reset form
      setFile(null);
      setPreview(null);
      setWeight("");
      setNotes("");
      setDate(new Date().toISOString().split("T")[0]);

      // Notify parent
      onPhotoUploaded();
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload photo");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-black mb-4">
        Upload New Photo
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Input */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Select Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
          <p className="mt-1 text-sm text-gray-500">PNG, JPG, JPEG up to 5MB</p>
        </div>

        {/* Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-black mb-2">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-full max-w-xs h-auto rounded-lg border border-gray-200"
            />
          </div>
        )}

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Date Taken
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            required
          />
        </div>

        {/* Weight (Optional) */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Weight (kg) - Optional
          </label>
          <input
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="75.5"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
          />
        </div>

        {/* Notes (Optional) */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Notes - Optional
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes about your progress..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!file || uploading}
          className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {uploading ? "Uploading..." : "Upload Photo"}
        </button>
      </form>
    </div>
  );
}
