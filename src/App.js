import { ChatEngine } from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed' ;

const App = () => {
    return (
      <ChatEngine
        height="100vh"
        projectID="182f9df3-5958-4db9-9c18-56e6df21345c"
        userName="Zera"
        userSecret="12345678"
        renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}
        />}
      />
    );
};

export default App;