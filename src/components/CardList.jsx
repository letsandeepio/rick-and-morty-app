import React from 'react';
import Card from './Card.jsx';

export default function CardList({ results }) {
  return (
    <section className="section">
      <div className="container" style={{ width: '75%' }}>
        <div className="columns is-multiline is-centered">
          {results.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
