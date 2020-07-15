import React from 'react';

export default function LiveSearch({ query, onChange }) {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column has-text-centered is-one-third">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Wubba Lubba Dub Dub!"
            value={query}
            onChange={onChange}
          ></input>
        </div>
      </div>
    </section>
  );
}
