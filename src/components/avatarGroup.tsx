import React from 'react';

interface AvatarGroupProps {
  names: string[];
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0]?.toUpperCase())
    .slice(0, 2)
    .join('');
};

const AvatarGroup = ({ names }: AvatarGroupProps) => {
  return (
    <div className="flex -space-x-3">
      {names.map((name, index) => (
        <div
          key={index}
          className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow"
        >
          {getInitials(name)}
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
