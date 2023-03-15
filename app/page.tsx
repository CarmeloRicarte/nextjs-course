import { Navigator } from '../components';
import { Routes } from '../models';

function App() {
  return (
    <div>
      <h1>Welcome to Rick and Morty app</h1>
      <h2>What do you want to see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
    </div>
  );
}

export default App;
