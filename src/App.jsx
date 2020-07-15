import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import LiveSearch from './components/LiveSearch.jsx';
import CardList from './components/CardList.jsx';
import Notification from './components/Notification.jsx';
import axios from 'axios';

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [maxResults, setMaxResults] = useState(20);
  const [maxCharacters, setMaxCharacters] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getCharacters() {
      let tempResults = [];
      let page = 1;
      while (tempResults.length < maxResults) {
        try {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${page}`
          );
          if (page === 1) setMaxCharacters(response.data.info.count);
          tempResults = tempResults.concat(response.data.results);
          setResults(tempResults);
          setError('');
          page++;
        } catch (error) {
          setError(error.message);
        }
      }
    }
    getCharacters();
  }, [maxResults]);

  useEffect(() => {
    if (query.toLowerCase().includes('activate plumbus')) {
      setQuery('');
      setMaxResults(maxCharacters);
    }
  }, [query, maxCharacters]);

  function handleInput(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <Header />
      <LiveSearch query={query} onChange={handleInput} />
      {error && <Notification error={error} />}
      <CardList
        results={results.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )}
      />
    </>
  );
}
