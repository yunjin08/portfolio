import React, { useState } from "react";
import Image from "next/image";

export interface Slide {
  type: "video" | "image";
  src: string;
  description?: string;
  title?: string;
}

interface MobileProjectModalProps {
  open: boolean;
  onClose: () => void;
  slides: Slide[];
}

const MobileProjectModal: React.FC<MobileProjectModalProps> = ({ open, onClose, slides }) => {
  const [current, setCurrent] = useState(0);

  if (!open) return null;

  const handleNext = () => {
    setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const slide = slides[current];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-700/50 overflow-hidden min-h-[600px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <button
            className="text-slate-400 hover:text-white transition-colors duration-200 text-2xl font-light hover:bg-slate-700/50 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col min-h-0">
          <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
            {/* Media Container */}
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="relative w-full max-w-xs h-[450px] flex items-center justify-center">
                {slide.type === "video" ? (
                  <div className="relative rounded-xl overflow-hidden bg-black shadow-2xl w-full h-full">
                    <video
                      src={slide.src}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl w-full h-full">
                    <Image
                      src={slide.src}
                      alt="Project screenshot"
                      className="w-full h-full object-cover"
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {(slide.description) && (
              <div className="flex-1 flex items-start lg:items-center min-h-0">
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm w-full max-h-full overflow-y-auto">
                  <h3 className="text-white text-xl font-semibold mb-3 border-b border-blue-500/30 pb-2">
                    Deductly - Tax Deduction
                  </h3>
                  {slide.description && (
                    <p className="text-slate-200 text-lg leading-relaxed font-light">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 pb-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            {/* Slide Counter */}
            <div className="text-slate-400 text-sm font-medium">
              {current + 1} of {slides.length}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 disabled:bg-slate-800/30 disabled:text-slate-500 text-slate-200 rounded-lg transition-all duration-200 font-medium text-sm border border-slate-600/50 disabled:border-slate-700/30"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                disabled={current === slides.length - 1}
                className="px-4 py-2 bg-blue-600/50 hover:bg-blue-500/50 disabled:bg-slate-800/30 disabled:text-slate-500 text-white rounded-lg transition-all duration-200 font-medium text-sm border border-blue-500/50 disabled:border-slate-700/30"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-slate-700/30 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectModal;
