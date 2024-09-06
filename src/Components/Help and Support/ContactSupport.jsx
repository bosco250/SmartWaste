import React, { useState } from 'react';

const ContactSupport = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the message to your support system
        console.log('Message sent to support:', message);
        setMessage('');
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
            <p className="text-gray-700 mb-4">
                If you have any questions or need assistance, please contact our support team.
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 mb-4"
                    rows="4"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                >
                    Send Message
                </button>
            </form>
            <p className="mt-4">Or contact us via email: support@smartwaste.example.com</p>
        </div>
    );
};

export default ContactSupport;