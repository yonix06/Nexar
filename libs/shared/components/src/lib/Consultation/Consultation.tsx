import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import styled from 'styled-components';

const StyledConsultation = styled.div`
  color: pink;
`;

const GET_PUBLIC_DOCUMENTS = gql`
  query GetPublicDocuments {
    documents(where: { isValidated: { _eq: true }, visibility: { _eq: "public" } }) {
      id
      name
      url
    }
  }
`;

export function Consultation() {
  const { loading, error, data } = useQuery(GET_PUBLIC_DOCUMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <StyledConsultation>
      <h1>Welcome to Consultation!</h1>

      <ul>
        {data.documents.map((doc) => (
          <li key={doc.id}>
            <a href={doc.url} target="_blank" rel="noreferrer">
              {doc.name}
            </a>
          </li>
        ))}
        <li>
          <Link to="/">Consultation root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the Consultation root route.</div>}
      />
    </StyledConsultation>
  );
}

export default Consultation;

