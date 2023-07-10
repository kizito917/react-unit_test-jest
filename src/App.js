import { useState } from 'react';
import List from './components/List';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const handleGreeting = () => {
    setIsClicked(true);
  }
  return (
    <div className="App">
      <h3>React App with Jest</h3>
      {
        isClicked && <h2>Good evening Sir/Madam</h2>
      }
      <button onClick={handleGreeting}>Click to greet</button>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
