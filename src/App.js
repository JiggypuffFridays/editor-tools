import { useNavigate } from 'react-router-dom';

import './App.css';

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => () => {
    navigate(path);
  };

  return (
    
    <div className="App">
      <h1>Homepage</h1>
      <br />
      <button onClick={handleButtonClick("/editor-tools/auto-twitch-chat")}>Go To AutoTwitchChat</button>
    </div>
  );
}


export default App;