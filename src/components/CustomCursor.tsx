import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isHidden ? 'opacity-0' : ''} ${
          isPointer ? 'scale-150' : ''
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${isHidden ? 'opacity-0' : ''} ${
          isPointer ? 'scale-150' : ''
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="cursor-trail"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="trail-particle"
            style={{
              '--delay': `${i * 0.05}s`,
              '--size': `${12 - i}px`,
              '--opacity': `${1 - i * 0.1}`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor;