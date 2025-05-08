import React from 'react';

interface ProsCardProps {
  title: string;
  pros: string[];
}

export function ProsCard({ title, pros }: ProsCardProps) {
  return (
    <div className="border border-green-200 bg-green-50 rounded-lg p-6 my-6">
      <h3 className="text-lg font-medium text-green-800 mb-3">{title}</h3>
      <ul className="space-y-2">
        {pros.map((pro, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="h-5 w-5 text-green-500 mr-2 mt-0.5"
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="text-green-700">{pro}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
