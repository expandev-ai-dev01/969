import React from 'react';

export const IconPlaceholder: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect width="24" height="24" rx="4" fill="#E5E7EB" />
  </svg>
);

export default IconPlaceholder;
