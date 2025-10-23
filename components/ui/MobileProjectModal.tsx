import React, { useState, useEffect } from "react";
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

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

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const slide = slides[current];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-700/50 overflow-hidden h-[500px] sm:h-[600px] lg:h-[650px] max-h-[95vh] sm:max-h-[90vh] flex flex-col"
           onTouchStart={handleTouchStart}
           onTouchMove={handleTouchMove}
           onTouchEnd={handleTouchEnd}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700/50 flex-shrink-0">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <button
            className="text-slate-400 hover:text-white transition-colors duration-200 text-xl sm:text-2xl font-light hover:bg-slate-700/50 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center touch-manipulation"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col min-h-0">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 flex-1 min-h-0">
            {/* Media Container */}
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-[250px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
                {slide.type === "video" ? (
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-black shadow-2xl w-full h-full">
                    <video
                      src={slide.src}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl w-full h-full">
                    <Image
                      src={slide.src}
                      alt="Project screenshot"
                      className="w-full h-full object-cover"
                      width={1000}
                      height={1000}
                      priority
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 flex items-start lg:items-center min-h-0">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-y-auto flex flex-col">
                <h3 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 border-b border-blue-500/30 pb-2 flex-shrink-0">
                  Deductly - Tax Deduction
                </h3>
                {slide.description ? (
                  <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-light flex-1">
                    {slide.description}
                  </p>
                ) : (
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light flex-1 italic">
                    No description available for this slide.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            {/* Slide Counter */}
            <div className="text-slate-400 text-xs sm:text-sm font-medium order-2 sm:order-1">
              {current + 1} of {slides.length}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 order-1 sm:order-2">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-700/50 hover:bg-slate-600/50 disabled:bg-slate-800/30 disabled:text-slate-500 text-slate-200 rounded-lg transition-all duration-200 font-medium text-xs sm:text-sm border border-slate-600/50 disabled:border-slate-700/30 touch-manipulation"
              >
                ← Prev
              </button>
              <button
                onClick={handleNext}
                disabled={current === slides.length - 1}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600/50 hover:bg-blue-500/50 disabled:bg-slate-800/30 disabled:text-slate-500 text-white rounded-lg transition-all duration-200 font-medium text-xs sm:text-sm border border-blue-500/50 disabled:border-slate-700/30 touch-manipulation"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 w-full bg-slate-700/30 rounded-full h-1">
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
