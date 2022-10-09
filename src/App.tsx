import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Conversations from './components/Conversations/Conversations';

function App() {
  return (
    <div className="container mx-auto">
      <Conversations />
      <BottomNavigation />
    </div>
  );
}

export default App;
