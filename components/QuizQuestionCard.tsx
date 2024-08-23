// components/QuizQuestionCard.tsx

import React from 'react';
import Image from 'next/image';

interface Option {
  text: string;
  image: string;
}

interface QuizQuestionCardProps {
  question: string;
  options: Option[];
  type: 'single' | 'multiple';
  onAnswer: (answer: string | string[]) => void;
  selectedAnswers: string | string[];
}

const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({
  question,
  options,
  type,
  onAnswer,
  selectedAnswers,
}) => {
  const handleChange = (optionText: string) => {
    if (type === 'single') {
      onAnswer(optionText);
    } else {
      const currentAnswers = Array.isArray(selectedAnswers) ? selectedAnswers : [];
      const updatedAnswers = currentAnswers.includes(optionText)
        ? currentAnswers.filter((a) => a !== optionText)
        : [...currentAnswers, optionText];
      onAnswer(updatedAnswers);
    }
  };

  return (
    <div className="bg-[var(--color-background-color)] rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-[var(--color-dark-cream)]">{question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <label
            key={index}
            className={`
              flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer
              transition-all duration-200 ease-in-out
              ${
                (type === 'multiple' ? (selectedAnswers as string[]).includes(option.text) : selectedAnswers === option.text)
                  ? 'ring-2 ring-[var(--color-brown)] shadow-md'
                  : 'hover:shadow-md'
              }
            `}
          >
            <div className="relative w-full h-40">
              <Image
                src={option.image}
                alt={option.text}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 w-full">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--color-dark-cream)]">{option.text}</span>
                <input
                  type={type === 'multiple' ? 'checkbox' : 'radio'}
                  name={`question-${question}`}
                  value={option.text}
                  checked={
                    type === 'multiple'
                      ? (selectedAnswers as string[]).includes(option.text)
                      : selectedAnswers === option.text
                  }
                  onChange={() => handleChange(option.text)}
                  className={`form-${type === 'multiple' ? 'checkbox' : 'radio'} h-5 w-5 text-[var(--color-brown)]`}
                />
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestionCard;