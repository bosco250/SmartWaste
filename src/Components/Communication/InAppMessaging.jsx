import React, { useState } from 'react';

const InAppMessaging = ({ messages, onSendMessage }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {
            id: Date.now(),
            sender: 'User',
            content: newMessage,
        };
        onSendMessage(message);
        setNewMessage('');
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">In-App Messaging</h2>
            <div className="chat-container mb-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`chat-message ${message.sender === 'User' ? 'sent' : 'received'}`}
                    >
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow border border-gray-300 rounded-md px-4 py-2 mr-2"
                />
                <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default InAppMessaging;