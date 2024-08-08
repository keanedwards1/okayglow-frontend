/* import { useState } from 'react'
import Layout from '../components/Layout'
import QuizQuestion from '../components/QuizQuestion'

export default function Quiz() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({})

  const handleAnswer = (question: string, answer: string) => {
    setAnswers({ ...answers, [question]: answer })
    setStep(step + 1)
  }

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return <QuizQuestion question="Question 1" onAnswer={(answer) => handleAnswer("q1", answer)} />
      case 2:
        return <QuizQuestion question="Question 2" onAnswer={(answer) => handleAnswer("q2", answer)} />
      // Add more cases for additional questions
      default:
        return (
          <div>
            <h2 className="text-2xl mb-4">Thank you!</h2>
            <p>We&apos;ll analyze your answers and provide your personalized formula.</p>
          </div>
        )
    }
  }

  return (
    <Layout title="Okay Glow Quiz" description="Take the Okay Glow quiz for your personalized skincare formula">
      {renderQuestion()}
    </Layout>
  )
} */

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type AnswerType = string | string[];

interface Question {
  id: number;
  text: string;
  type: "single" | "multiple";
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How would you describe your skin type?",
    type: "multiple",
    options: [
      "Oily: Shiny all over, prone to breakouts",
      "Dry: Tight, flaky, sometimes rough",
      "Combination: Oily T-zone, normal or dry cheeks",
      "Sensitive: Easily irritated, prone to redness",
      "Normal: Neither too oily nor too dry",
    ],
  },
  {
    id: 2,
    text: "What climate are you in?",
    type: "multiple",
    options: ["Humid", "Dry", "Temperate", "Cold", "Tropical"],
  },
  {
    id: 3,
    text: "How old are you?",
    type: "single",
    options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55+"],
  },
  {
    id: 4,
    text: "What's your main skin concern right now?",
    type: "multiple",
    options: [
      "Acne or breakouts",
      "Fine lines or wrinkles",
      "Uneven skin tone or dark spots",
      "Dryness or flakiness",
      "Excess oil or shine",
      "Large pores",
      "Redness or irritation",
      "Dullness or lack of glow",
    ],
  },
  {
    id: 5,
    text: "How much sun exposure does your skin typically get?",
    type: "multiple",
    options: [
      "Minimal: Mostly indoors",
      "Low: Short periods outside",
      "Moderate: Regular outdoor activities",
      "High: Outdoor job or hobby",
    ],
  },
  {
    id: 6,
    text: "What products do you use right now?",
    type: "multiple",
    options: [
      "Cleanser",
      "Toner",
      "Serum",
      "Moisturizer",
      "Sunscreen",
      "Acne treatment",
      "Retinoid",
      "Exfoliant",
      "Other (please specify)",
    ],
  },
  {
    id: 7,
    text: "How often are you stressed out?",
    type: "single",
    options: ["Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 8,
    text: "How many hours of sleep do you get a night?",
    type: "single",
    options: [
      "Less than 4 hours",
      "4-6 hours",
      "6-8 hours",
      "More than 8 hours",
    ],
  },
  {
    id: 9,
    text: "Are you currently:",
    type: "multiple",
    options: [
      "Pregnant",
      "Trying to get pregnant",
      "Gave birth within the last 12 months",
      "Experiencing menopause, perimenopause, or andropause",
      "Diabetic or hypoglycemic",
      "None of the above",
    ],
  },
  {
    id: 10,
    text: "How does your skin feel in the morning before washing your face?",
    type: "multiple",
    options: ["Oily", "Dry", "Normal", "Sensitive", "Combination"],
  },
  {
    id: 11,
    text: "How does your face feel right after you wash it?",
    type: "multiple",
    options: ["Tight", "Smooth", "Dry", "Normal", "Oily"],
  },
  {
    id: 12,
    text: "How much time can you dedicate to your skincare routine?",
    type: "multiple",
    options: [
      "1-2 minutes: Quick and simple",
      "5-10 minutes: A bit more thorough",
      "15-20 minutes: Enjoy a more extensive routine",
      "30+ minutes: Love to indulge in skincare",
    ],
  },
  {
    id: 13,
    text: "Are there any ingredients your skin doesn't agree with?",
    type: "multiple",
    options: [
      "Fragrance",
      "Essential oils",
      "Alcohol",
      "Silicones",
      "Sulfates",
      "Parabens",
      "Other (please specify)",
      "No known sensitivities",
    ],
  },
  {
    id: 14,
    text: "Have you used any of these active ingredients before?",
    type: "multiple",
    options: [
      "Retinol",
      "Vitamin C",
      "AHAs (like glycolic acid)",
      "BHAs (like salicylic acid)",
      "Niacinamide",
      "Hyaluronic acid",
      "None of these",
    ],
  },
  {
    id: 15,
    text: "What's your skincare budget range (for a complete routine)?",
    type: "multiple",
    options: ["Under $50", "$50-$100", "$100-$200", "$200+"],
  },
  {
    id: 16,
    text: "Which best describes your typical day?",
    type: "multiple",
    options: [
      "Early riser, busy days",
      "Standard 9-5 schedule",
      "Night owl, late sleeper",
      "Irregular schedule, shift work",
    ],
  },
  {
    id: 17,
    text: "Are you currently using any of the following?",
    type: "multiple",
    options: [
      "Acne medications",
      "Prescription retinoids",
      "Oral contraceptives",
      "Hormone treatments",
      "None of the above",
    ],
  },
  {
    id: 18,
    text: "What's your primary skincare goal?",
    type: "multiple",
    options: [
      "Achieve a natural, healthy glow",
      "Reduce signs of aging",
      "Clear up acne or breakouts",
      "Even out skin tone",
      "Hydrate and nourish dry skin",
      "Control oil and shine",
    ],
  },
  {
    id: 19,
    text: "How do you feel about fragrances in your products?",
    type: "multiple",
    options: [
      "Prefer fragranced products",
      "Enjoy light, natural scents",
      "Prefer unscented products",
      "No preference",
    ],
  },
  {
    id: 20,
    text: "How important is using eco-friendly and sustainable products to you?",
    type: "multiple",
    options: [
      "Very important, it's a top priority",
      "Somewhat important, I consider it",
      "Not a deciding factor for me",
    ],
  },
  {
    id: 21,
    text: "Are there any specific areas of your face that need extra attention?",
    type: "multiple",
    options: [
      "Forehead",
      "Nose and surrounding area",
      "Cheeks",
      "Chin and jawline",
      "Under-eye area",
      "No specific areas",
    ],
  },
  {
    id: 22,
    text: "How does your skin react to changes in seasons or travel?",
    type: "multiple",
    options: [
      "Becomes drier",
      "Becomes oilier",
      "More prone to breakouts",
      "More sensitive or irritated",
      "No significant changes",
    ],
  },
  {
    id: 23,
    text: "Are you interested in multi-use products that can simplify your routine?",
    type: "multiple",
    options: [
      "Very interested, I love multitasking products",
      "Somewhat interested, depends on the product",
      "Prefer separate products for each step",
    ],
  },
];

const SkincareQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerType>>({});

  const handleAnswer = (questionId: number, answer: AnswerType) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md flex flex-col h-[80vh]">
    <div className="p-6 border-b">
      <h1 className="text-2xl font-bold">Skincare Questionnaire</h1>
    </div>
    
    <div className="flex-grow overflow-y-auto p-6">
      <h2 className="text-lg font-semibold mb-4">{currentQuestion.text}</h2>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
            <input
              type={currentQuestion.type === "multiple" ? "checkbox" : "radio"}
              name={`question-${currentQuestion.id}`}
              value={option}
              checked={
                currentQuestion.type === "multiple"
                  ? ((answers[currentQuestion.id] as string[]) || []).includes(option)
                  : answers[currentQuestion.id] === option
              }
              onChange={(e) => {
                if (currentQuestion.type === "multiple") {
                  const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
                  const newAnswers = e.target.checked
                    ? [...currentAnswers, option]
                    : currentAnswers.filter((a) => a !== option);
                  handleAnswer(currentQuestion.id, newAnswers);
                } else {
                  handleAnswer(currentQuestion.id, option);
                }
              }}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
    
    <div className="p-6 border-t flex justify-between">
      <button
        onClick={handlePrev}
        disabled={currentStep === 0}
        className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50 hover:underline hover:scale-105 transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentStep === questions.length - 1}
        className="flex items-center px-4 py-2 bg-sky-500 hover:bg-sky-400 transition-colors duration-200 ease text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Next
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  </div>
);
};

export default SkincareQuiz;
