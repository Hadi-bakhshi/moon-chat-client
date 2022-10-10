import { PencilSquareIcon } from '@heroicons/react/24/outline';
import React from 'react';

import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Conversations = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="sticky top-0 bg-white">
        {/* Top bar */}
        <div className="flex justify-between px-2 pt-2">
          <button className="text-blue-500 font-medium">Edit</button>
          <h3 className="font-semibold">Chats</h3>
          <button>
            <PencilSquareIcon className="h-5 w-5 text-blue-500" />
          </button>
        </div>
        {/* Search bar */}
        <div className="mt-3 mx-2">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="text-center h-8 block rounded-md w-full bg-gray-200 border-transparent focus:border-gray-500 focus:bg-gray-50 focus:ring-1"
          />
        </div>
      </div>

      <div className="">{children}</div>
      <BottomNavigation />
    </div>
  );
};

export default Conversations;
