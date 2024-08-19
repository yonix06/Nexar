import NxWelcome from './nx-welcome';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <div>
      <NxWelcome title="Nexar" />
    </div>
  </>);
}
export default App;
