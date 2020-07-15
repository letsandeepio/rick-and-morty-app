import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column has-text-centered is-half">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
