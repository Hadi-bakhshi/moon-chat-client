import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Chat from './components/Chat/Chat';
import Conversation from './components/Conversations/Conversation/Conversation';
import Conversations from './components/Conversations/Conversations';
import Login from './components/Forms/Login/Login';
import ChatLayout from './layout/ChatLayout/ChatLayout';

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="container h-full mx-auto">
        {/* <Conversations>
          <Conversation />
        </Conversations> */}
        {/* <ChatLayout>
          <Chat />
        </ChatLayout> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
