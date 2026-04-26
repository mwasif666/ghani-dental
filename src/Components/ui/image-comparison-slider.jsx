import React, { useCallback, useEffect, useRef, useState } from "react";

export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
  className = "",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updateSliderPosition = useCallback((clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, nextPosition)));
  }, []);

  const handleMouseDown = useCallback((event) => {
    setIsDragging(true);
    updateSliderPosition(event.clientX);
  }, [updateSliderPosition]);

  const handleTouchStart = useCallback((event) => {
    setIsDragging(true);
    updateSliderPosition(event.touches[0].clientX);
  }, [updateSliderPosition]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSliderPosition((position) => Math.max(0, position - 4));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setSliderPosition((position) => Math.min(100, position + 4));
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      updateSliderPosition(event.clientX);
    };

    const handleTouchMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      updateSliderPosition(event.touches[0].clientX);
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, updateSliderPosition]);

  return (
    <div
      ref={containerRef}
      className={`cs_image_comparison ${className}${
        isDragging ? " cs_dragging" : ""
      }`}
    >
      <img
        src={afterImage}
        alt={altAfter}
        className="cs_image_comparison_img"
        draggable="false"
      />

      <div
        className="cs_image_comparison_layer"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={altBefore}
          className="cs_image_comparison_img"
          draggable="false"
        />
      </div>

      <button
        type="button"
        className="cs_image_comparison_handle"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        aria-label="Move before and after comparison slider"
      >
        <span className="cs_image_comparison_handle_icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="15" y1="18" x2="9" y2="12" />
            <line x1="9" y1="6" x2="15" y2="12" />
          </svg>
        </span>
      </button>
    </div>
  );
};
