import React from 'react';

interface MiddlewareLink {
  url: string;
  label: string;
}

const middlewareLinks: MiddlewareLink[] = [
  { url: '/api/middleware1', label: 'Middleware 1' },
  { url: '/api/middleware2', label: 'Middleware 2' },
  // Ajoutez d'autres URL ici
];

const MiddlewareLinks: React.FC = () => {
  return (
    <div>
      {middlewareLinks.map((link, index) => (
        <div key={index}>{link.url}</div>
      ))}
    </div>
  );
};

export default MiddlewareLinks;