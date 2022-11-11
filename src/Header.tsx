import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="navbar navbar-dark bg-dark">
      <div  className="navbar-brand">
        JSON Visual Editor <span className="badge badge-secondary">v2</span>
      </div>
      <ul className="nav justify-content-end">
        <li>
          <div>
            <i className="fas fa-comment" />
          </div>
        </li>
      </ul>
    </header>
  );
};
