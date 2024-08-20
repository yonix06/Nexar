import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';


export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Portail</Link>
          </li>
          <li>
            <Link to="/page-2">Gestion Arrêtés</Link>
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <NxWelcome title="portail" />
    </div>
  );
}

export default App;
