import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import sqlite3 from 'sqlite3';
import styled from 'styled-components';

const StyledSQLQuery = styled.div`
  color: pink;
`;

const SQLQueryComponent = ({ requete, DATABASE_URL }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = new sqlite3.Database(DATABASE_URL);
    db.all(requete, (err, rows) => {
      if (err) {
        setError(err.message);
      } else {
        setResult(rows);
      }
      db.close();
    });
  }, [requete, DATABASE_URL]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StyledSQLQuery>
      <h2>Résultat de la requête</h2>
      <ul>
        {result.map((row, index) => (
          <li key={index}>
            {Object.keys(row).map((key) => (
              <span key={key}>{row[key]} </span>
            ))}
          </li>
        ))}
      </ul>
      </StyledSQLQuery>
    </div>
  );
};

export default SQLQueryComponent;

