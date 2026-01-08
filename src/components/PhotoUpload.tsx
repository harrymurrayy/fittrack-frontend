"use client";

import { useState, useRef } from "react";
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
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
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

      setFile(null);
      setPreview(null);
      setWeight("");
      setNotes("");
      setDate(new Date().toISOString().split("T")[0]);

      onPhotoUploaded();
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload photo");
    } finally {
      setUploading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center">
            <UploadIcon className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Upload Photo
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Add a new progress photo to your collection
            </p>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-6 space-y-6">
        {/* File Upload Area */}
        <div>
          <label className="label">Photo</label>
          
          {!preview ? (
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                dragActive
                  ? "border-[var(--accent)] bg-[var(--accent-muted)]"
                  : "border-[var(--border-default)] hover:border-[var(--border-hover)]"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-7 h-7 text-[var(--text-muted)]" />
              </div>
              <p className="text-[var(--text-primary)] font-medium mb-1">
                Drop your image here, or{" "}
                <span className="text-[var(--accent)]">browse</span>
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                PNG, JPG, JPEG up to 5MB
              </p>
            </div>
          ) : (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-[400px] object-contain rounded-xl border border-[var(--border-subtle)]"
              />
              <button
                type="button"
                onClick={clearFile}
                className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[var(--bg-primary)]/80 backdrop-blur flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[var(--bg-primary)]/80 backdrop-blur">
                <p className="text-sm text-[var(--text-secondary)]">
                  {file?.name}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Date & Weight */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Date Taken</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
            <label className="label">Weight (kg) — Optional</label>
            <input
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="75.5"
              className="input"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="label">Notes — Optional</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes about your progress..."
            rows={3}
            className="textarea"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <button
          type="submit"
          disabled={!file || uploading}
          className="btn btn-primary w-full sm:w-auto"
        >
          {uploading ? (
            <>
              <div className="spinner spinner-sm"></div>
              Uploading...
            </>
          ) : (
            <>
              <UploadIcon className="w-4 h-4" />
              Upload Photo
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// Icons
function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
