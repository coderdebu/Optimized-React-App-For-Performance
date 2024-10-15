import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-300">
            <div
                className={`flex justify-between items-center py-4 cursor-pointer ${isOpen ? 'text-blue-500' : 'text-white'}`} // Set to white when not active
                onClick={onToggle}
            >
                <h3 className="font-medium text-white">{question}</h3> {/* Ensure question text is white */}
                <svg
                    className={`w-5 h-5 transition-transform text-white ${isOpen ? 'rotate-180' : 'rotate-0'}`} // Set icon color to white
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <div className="text-gray-400 text-md mb-4"> {/* Set answer text color to white */}
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Mauris ornare est nec ultrices rhoncus morbi faucibus consectetur ornare?",
            answer: "Vestibulum tempus et turpis at pretium. Nam cursus purus lacus, vitae pharetra quam ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non tincidunt risus. Sed aliquam fringilla diam, nec sollicitudin arcu aliquet efficitur. Etiam at justo vel augue ornare mollis sagittis non tortor. Duis eu libero elit. Vivamus risus felis, auctor id ullamcorper a, tincidunt sed magna."
        },
        {
            question: "Nulla pulvinar a neque sed scelerisque phasellus porta odio dolor?",
            answer: "Vestibulum tempus et turpis at pretium. Nam cursus purus lacus, vitae pharetra quam ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non tincidunt risus. Sed aliquam fringilla diam, nec sollicitudin arcu aliquet efficitur. Etiam at justo vel augue ornare mollis sagittis non tortor. Duis eu libero elit. Vivamus risus felis, auctor id ullamcorper a, tincidunt sed magna."
        },
        {
            question: "Vestibulum in feugiat metus aenean quis risus nibh etiam rhoncus egestas gravida?",
            answer: "We accept all major credit cards, PayPal, and bank transfers."
        },
        {
            question: "Cras vel nunc sed massa tristique auctor vestibulum facilisis aliquet lectus vel congue?",
            answer: "You can reach us via email at support@example.com or call us at (123) 456-7890."
        },
        {
            question: "Donec eget ante ipsum. Nam vestibulum maximus venenatis?",
            answer: "You can reach us via email at support@example.com or call us at (123) 456-7890."
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-[104px] gap-48 bg-[#161D3A] text-white">
            <h2 className="text-2xl font-bold text-left mb-4">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default FAQ;
