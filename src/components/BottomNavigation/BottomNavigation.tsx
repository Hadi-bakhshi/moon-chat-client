import {
  ChatBubbleOvalLeftEllipsisIcon,
  CogIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const BottomNavigation = () => {
  return (
    <footer className="flex items-center absolute bottom-0 w-full bg-gray-50 h-14">
      <div className="w-full flex justify-around items-center p-2">
        {/* Contact button */}
        <button className="flex flex-col items-center w-full">
          <UserCircleIcon className="h-6 w-6 text-gray-600" />
          <p className="text-gray-500 text-xs">Contacts</p>
        </button>

        {/* Chats Button */}
        <button className="flex flex-col items-center w-full">
          <ChatBubbleOvalLeftEllipsisIcon className="h6 w-6 text-gray-600" />
          <p className="text-gray-500 text-xs">Chats</p>
        </button>

        {/* Settings Button */}
        <button className="flex flex-col items-center w-full">
          <CogIcon className="h-6 w-6 text-gray-600" />
          <p className="text-gray-500 text-xs">Settings</p>
        </button>
      </div>
    </footer>
  );
};

export default BottomNavigation;
