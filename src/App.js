import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
        projectID='963211d1-95c7-4b3f-b361-ae10b351c7b5'
        userName='hasib'
        userSecret='123123'
        height="100vh"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} ></ChatFeed>}
      />
    </div>
  );
}

export default App;
