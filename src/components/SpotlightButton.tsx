import React, { useState, useRef, useEffect } from 'react';

interface SpotlightButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({ 
  children, 
  onClick, 
  className = '' 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
    >
      <div
        className="spotlight"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {children}
    </button>
  );
};

export default SpotlightButton;