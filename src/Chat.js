import ChatBot from 'react-simple-chatbot';
import React from 'react';
  const steps = [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: true,
        },
      ];

 const Chat  = () => (

    <React.StrictMode>
    <ChatBot steps={steps} />
    </React.StrictMode>
 );
 export default Chat;