import React from 'react';

export default function Notification({ error }) {
  return (
    <div className="container" style={{ width: '50%' }}>
      <div className="notification is-info is-light">{error}</div>
    </div>
  );
}
