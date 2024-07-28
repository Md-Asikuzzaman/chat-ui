'use client';

import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

interface CType {
  id: any;
  text: string;
}

const useSocket = () => {
  const socketRef = useRef<any | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [typing, setTyping] = useState<string>('');
  const [conversations, setConversations] = useState<CType[]>([]);

  useEffect(() => {
    const newSocket = io('http://localhost:8080');
    socketRef.current = newSocket;

    newSocket.on('connect', () => {
      setIsConnected(true);
    });

    newSocket.on('welcome', (data) => {
      console.log(data);
    });

    newSocket.on('typing', (data) => {
      setTyping(data);

      console.log(data);
    });

    newSocket.on('chats', (data: CType) => {
      console.log(data);
      setConversations((prevConversations) => [...prevConversations, data]);
    });

    // ... other socket event handlers

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  return { socket: socketRef.current, isConnected, conversations, typing };
};

const MyComponent = () => {
  const { socket, isConnected, conversations, typing } = useSocket();
  const [text, setText] = useState<string>('');

  console.log(typing);

  console.log(conversations);

  const handleForm = () => {
    if (isConnected && socket) {
      socket.emit('userMessage', { id: Math.random(), text });
      socket.emit('isTyping', false);
      setText('');
    } else {
      console.error('Socket not connected');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    if (isConnected && socket) {
      if (e.target.value.length > 0) {
        socket.emit('isTyping', true);
      } else {
        socket.emit('isTyping', false);
      }
    }
  };

  return (
    <div>
      <div className='p-6 flex'>
        <input
          value={text}
          onChange={handleChange}
          type='text'
          placeholder='Type...'
          className='border-2 p-4 border-black-700 flex-1'
          required
        />
        <button
          onClick={handleForm}
          className='p-[18px] bg-violet-700 text-white rounded-5'
        >
          Send
        </button>
      </div>

      <div className='space-y-2 p-12'>
        {conversations &&
          conversations.map((conversation) => (
            <p
              className='bg-violet-700 py-2 px-4 rounded-lg text-white'
              key={conversation.id}
            >
              {conversation.text}
            </p>
          ))}

        {typing && <span className='text-sm mt-3'>Typing...</span>}
      </div>
    </div>
  );
};

export default MyComponent;
