import React from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <div className="my-6 rounded-lg overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 text-xs text-gray-200">
        {language}
      </div>
      <pre className="p-4 bg-gray-900 overflow-x-auto">
        <code className="text-gray-100 text-sm">{code}</code>
      </pre>
    </div>
  );
}
