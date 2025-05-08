import React from 'react';

interface ConsCardProps {
  title: string;
  cons: string[];
}

export function ConsCard({ title, cons }: ConsCardProps) {
  return (
    <div className="border border-red-200 bg-red-50 rounded-lg p-6 my-6">
      <h3 className="text-lg font-medium text-red-800 mb-3">{title}</h3>
      <ul className="space-y-2">
        {cons.map((con, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="h-5 w-5 text-red-500 mr-2 mt-0.5"
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
            <span className="text-red-700">{con}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
