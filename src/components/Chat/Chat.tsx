import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const dummyData = [
  {
    id: 1,
    isOwn: true,
    date: new Date().getFullYear(),
    message: 'Hello Friend',
  },
  {
    id: 2,
    isOwn: false,
    date: new Date().getFullYear(),
    message: 'Hello Hadi',
  },
  {
    id: 3,
    isOwn: true,
    date: new Date().getFullYear(),
    message: 'Go home',
  },
];

const Chat = () => {
  const socket = useRef<any>();

  useEffect(() => {
    socket.current = io('ws://localhost:8000');
  }, []);

  return (
    <div className="w-full h-[93%] bg-blue-100 pt-2">
      {dummyData.map((message) => (
        <div
          className={
            !message.isOwn
              ? 'w-full flex flex-col items-start'
              : 'w-full flex flex-col items-end'
          }
          key={message.id}
        >
          <div
            className={
              !message.isOwn
                ? 'bg-white shadow-sm rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 ml-1'
                : 'bg-[#E7FDCC] shadow-sm rounded-tl-xl rounded-tr-xl rounded-bl-xl flex items-center justify-start  p-3 mr-1'
            }
          >
            <p className="max-w-[300px]">{message.message}</p>
            {/* <span className="">{message.date.toString()}</span> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
