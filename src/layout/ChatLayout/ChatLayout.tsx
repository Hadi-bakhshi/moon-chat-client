import {
  ChevronLeftIcon,
  MicrophoneIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';
import EmojiPicker from 'emoji-picker-react';

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* Top section */}
      <div className="sticky top-0 bg-white">
        <div className="flex justify-between items-center px-2 mt-2">
          {/* Back button */}
          <div>
            <button className="text-indigo-500 font-medium flex flex-row">
              <ChevronLeftIcon className="w-6 h-6" />
              Chats
            </button>
            {/* Username and status */}
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">Hadi Bakhshi</h3>
            <p className="text-sm font-thin text-gray-500">
              Last seen a minute ago
            </p>
          </div>
          {/* Avatar */}
          <span className="w-8 h-8 block rounded-full bg-indigo-500"></span>
        </div>
      </div>
      {/* Children */}
      {children}

      {/* bottom section */}
      <div className="flex items-center px-2 justify-between gap-1 sticky bottom-0  w-full bg-gray-50 h-14">
        <button>
          <PaperClipIcon className="h-7 w-7 text-gray-500" />
        </button>
        <textarea
          name="search"
          rows={1}
          cols={8}
          placeholder="Write Your Message..."
          className="text-center max-h-[80%] w-full block rounded-xl bg-white border-gray-300 focus:border-gray-500 focus:bg-gray-50 focus:ring-1"
        />
        <button>
          <MicrophoneIcon className="h-7 w-7 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default ChatLayout;
