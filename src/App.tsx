import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Chat from './components/Chat/Chat';
import Conversations from './components/Conversations/Conversations';
import ChatLayout from './layout/ChatLayout/ChatLayout';

function App() {
  return (
    <div className="container h-screen w-screen mx-auto">
      {/* <Conversations />
      <BottomNavigation /> */}
      <ChatLayout>
        <Chat />
      </ChatLayout>
    </div>
  );
}

export default App;
