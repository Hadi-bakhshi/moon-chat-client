import { CheckIcon } from '@heroicons/react/24/outline';

const Conversation = () => {
  return (
    <>
      <div className="w-full flex flex-row px-2 py-4 items-center gap-2 border-b border-gray-100">
        <div className="w-12 h-10 rounded-full bg-indigo-500"></div>
        <div className="w-full flex flex-row justify-between">
          <div>
            <h6 className="font-medium">Hadi Bakhshi</h6>
            <p className="font-normal text-xs">Go home!</p>
          </div>
          <div className="flex flex-row-reverse items-center gap-1">
            <span>{`${new Date().getHours()}:${new Date().getMinutes()}`}</span>
            <CheckIcon className="h-4 w-4 text-indigo-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
