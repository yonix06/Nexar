import React from 'react';
import MiddlewareLinks from '../MiddlewareLinks/MiddlewareLinks';

interface ButtonGridProps {
  links: MiddlewareLink[];
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {links.map((link, index) => (
        <button key={index} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          {link.label}
        </button>
      ))}
    </div>
  );
};

const links = MiddlewareLinks();

const ButtonGridContainer: React.FC = () => {
  return <ButtonGrid links={links} />;
};

export default ButtonGridContainer;