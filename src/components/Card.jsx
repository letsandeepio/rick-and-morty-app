import React from 'react';
import './Card.scss';

export default function Card({ image, name, status, location }) {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <img src={image} alt="yekkow"></img>
        <div className="card-content">
          <ul>
            <li className="name">{name}</li>
            <li className="satus">{status}</li>
            <li className="lastseen">
              <em>
                <strong>Last Seen:</strong>
              </em>{' '}
              {location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
