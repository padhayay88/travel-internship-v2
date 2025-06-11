import React, { useState } from 'react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const faqs = {
    'how to cancel': 'To cancel, go to "My Bookings" and click "Cancel".',
    'refund': 'Refunds are processed within 5-7 business days.',
    'change flight': 'You can change your flight from "My Bookings". Fees may apply.'
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    // Simple FAQ match
    const answer = Object.keys(faqs).find((q) =>
      input.toLowerCase().includes(q)
    );
    const botReply = answer
      ? faqs[answer]
      : "I'm not sure. Please contact support@example.com.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="p-4 border rounded shadow-md w-full max-w-md mx-auto mt-4 bg-white">
      <h2 className="text-xl font-bold mb-2">💬 Support Chat</h2>
      <div className="h-60 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-1 ${
              msg.sender === 'bot' ? 'text-blue-600' : 'text-black'
            }`}
          >
            <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow border p-1 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-3 py-1 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSupport;
