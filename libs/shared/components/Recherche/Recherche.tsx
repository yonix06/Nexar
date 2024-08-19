import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import SQLQuery from '../SQLQuery/SQLQuery';

const StyledRecherche = styled.div`
  color: pink;
`;

export function Recherche() {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const formattedSearchText = searchText.replace(/[\s\n]+/g, ' ').trim();

  return (
    <StyledRecherche>
      <h1>Welcome to Recherche!</h1>

      <form>
        <input
          type="search"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Entrez votre recherche"
        />
      </form>

      <ul>
        <li>
          <Link to={`/search?q=${formattedSearchText}`}>
            Recherche: {formattedSearchText}
          </Link>
        </li>
      </ul>

      <Route
        path="/search"
        element={<SQLQuery query={`SELECT * FROM arretes WHERE nom LIKE '%${formattedSearchText}%'`} />}
      />
    </StyledRecherche>
  );
}

export default Recherche;

