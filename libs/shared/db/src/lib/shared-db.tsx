import { Route, Link } from 'react-router-dom';

import styles from './shared-db.module.css';

export function SharedDb() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedDb!</h1>

      <ul>
        <li>
          <Link to="/">libs/shared/db/src/lib/shared-db root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>This is the libs/shared/db/src/lib/shared-db root route.</div>
        }
      />
    </div>
  );
}

export default SharedDb;
