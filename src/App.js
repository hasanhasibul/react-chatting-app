import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed/ChatFeed';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const projectId = '963211d1-95c7-4b3f-b361-ae10b351c7b5';
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password')
  if(!username){
      return <LoginForm></LoginForm>
  }
  return (
    <div className="App">
      <div>logOut</div>
      <ChatEngine
        projectID={projectId}
        userName={username}
        userSecret={password}
        height="100vh"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} ></ChatFeed>}
      />
    </div>
  );
}

export default App;
