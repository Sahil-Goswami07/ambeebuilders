// src/components/SmoothCursor.jsx
import { useEffect, useRef } from "react";

const SmoothCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const speed = 0.2; // lower = slower lag

    const moveCursor = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(moveCursor);
    };

    const updateMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", updateMouse);
    requestAnimationFrame(moveCursor);

    return () => document.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-[#80AF81] rounded-full pointer-events-none z-[9999]  transition-opacity duration-350"
    />
  );
};

export default SmoothCursor;
