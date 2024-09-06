import React from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: 'What should I do if my waste collection is missed?',
            answer: 'If your waste collection is missed, please contact our support team immediately for assistance.',
        },
        {
            question: 'How can I schedule a special waste collection?',
            answer: 'You can schedule a special waste collection by contacting our support team or using the scheduling feature in the app.',
        },
        {
            question: 'What types of waste can be recycled?',
            answer: 'Common recyclable materials include paper, cardboard, glass, and certain plastics. Please refer to your local recycling guidelines for specifics.',
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions (FAQ)</h2>
            <ul className="list-disc list-inside">
                {faqs.map((faq, index) => (
                    <li key={index} className="mb-2">
                        <strong>{faq.question}</strong>
                        <p className="text-gray-700">{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQSection;