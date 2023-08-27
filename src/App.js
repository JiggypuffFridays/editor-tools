import { useNavigate } from 'react-router-dom';

import './App.css';

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => () => {
    navigate(path);
  };

  return (
    
    <div className="App">
      <h1>Editor Tools</h1>
      <br />
      
      Create Twitch Chat Message Graphics In Seconds
      <br/><br/>
      <button style={{fontSize:'15px'}} onClick={handleButtonClick("/editor-tools/auto-twitch-chat")}>AutoTwitchChat</button>
      
    </div>
  );
}


export default App;