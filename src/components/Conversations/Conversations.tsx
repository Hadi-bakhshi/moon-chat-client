import { PencilSquareIcon } from '@heroicons/react/24/outline';

import Conversation from './Conversation/Conversation';

const Conversations = () => {
  return (
    <div className="w-full h-full">
      {/* Top bar */}
      <div className="flex justify-between px-2 mt-2">
        <button className="text-blue-500 font-medium">Edit</button>
        <h3 className="font-semibold">Chats</h3>
        <button>
          <PencilSquareIcon className="h-5 w-5 text-blue-500" />
        </button>
      </div>
      {/* Search bar */}
      <div className="my-3 mx-2">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="text-center h-8 block rounded-md w-full bg-gray-200 border-transparent focus:border-gray-500 focus:bg-gray-50 focus:ring-1"
        />
      </div>
      <div className="w-full h-full">
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
};

export default Conversations;
