import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import  ChatFeed  from './components/ChatFeed' ;

const App = () => {
  //not loggin in
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="182f9df3-5958-4db9-9c18-56e6df21345c"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;