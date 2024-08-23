import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuizQuestionCard from "../components/QuizQuestionCard";

type AnswerType = string | string[];

interface Option {
  text: string;
  image: string;
}

interface Question {
  id: number;
  text: string;
  type: "single" | "multiple";
  options: Option[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How would you describe your skin type?",
    type: "multiple",
    options: [
      { text: "Oily: Shiny all over, prone to breakouts", image: "/ocean.jpg" },
      { text: "Dry: Tight, flaky, sometimes rough", image: "/ocean.jpg" },
      { text: "Combination: Oily T-zone, normal or dry cheeks", image: "/ocean.jpg" },
      { text: "Sensitive: Easily irritated, prone to redness", image: "/ocean.jpg" },
      { text: "Normal: Neither too oily nor too dry", image: "/ocean.jpg" },
    ],
  },
  {
    id: 2,
    text: "What climate are you in?",
    type: "multiple",
    options: [
      { text: "Humid", image: "/ocean.jpg" },
      { text: "Dry", image: "/ocean.jpg" },
      { text: "Temperate", image: "/ocean.jpg" },
      { text: "Cold", image: "/ocean.jpg" },
      { text: "Tropical", image: "/ocean.jpg" },
    ],
  },
  {
    id: 3,
    text: "How old are you?",
    type: "single",
    options: [
      { text: "Under 18", image: "/ocean.jpg" },
      { text: "18-24", image: "/ocean.jpg" },
      { text: "25-34", image: "/ocean.jpg" },
      { text: "35-44", image: "/ocean.jpg" },
      { text: "45-54", image: "/ocean.jpg" },
      { text: "55+", image: "/ocean.jpg" },
    ],
  },
  {
    id: 4,
    text: "What's your main skin concern right now?",
    type: "multiple",
    options: [
      { text: "Acne or breakouts", image: "/ocean.jpg" },
      { text: "Fine lines or wrinkles", image: "/ocean.jpg" },
      { text: "Uneven skin tone or dark spots", image: "/ocean.jpg" },
      { text: "Dryness or flakiness", image: "/ocean.jpg" },
      { text: "Excess oil or shine", image: "/ocean.jpg" },
      { text: "Large pores", image: "/ocean.jpg" },
      { text: "Redness or irritation", image: "/ocean.jpg" },
      { text: "Dullness or lack of glow", image: "/ocean.jpg" },
    ],
  },
  {
    id: 5,
    text: "How much sun exposure does your skin typically get?",
    type: "multiple",
    options: [
      { text: "Minimal: Mostly indoors", image: "/ocean.jpg" },
      { text: "Low: Short periods outside", image: "/ocean.jpg" },
      { text: "Moderate: Regular outdoor activities", image: "/ocean.jpg" },
      { text: "High: Outdoor job or hobby", image: "/ocean.jpg" },
    ],
  },
  {
    id: 6,
    text: "What products do you use right now?",
    type: "multiple",
    options: [
      { text: "Cleanser", image: "/ocean.jpg" },
      { text: "Toner", image: "/ocean.jpg" },
      { text: "Serum", image: "/ocean.jpg" },
      { text: "Moisturizer", image: "/ocean.jpg" },
      { text: "Sunscreen", image: "/ocean.jpg" },
      { text: "Acne treatment", image: "/ocean.jpg" },
      { text: "Retinoid", image: "/ocean.jpg" },
      { text: "Exfoliant", image: "/ocean.jpg" },
      { text: "Other (please specify)", image: "/ocean.jpg" },
    ],
  },
  {
    id: 7,
    text: "How often are you stressed out?",
    type: "single",
    options: [
      { text: "Rarely", image: "/ocean.jpg" },
      { text: "Sometimes", image: "/ocean.jpg" },
      { text: "Often", image: "/ocean.jpg" },
      { text: "Always", image: "/ocean.jpg" },
    ],
  },
  {
    id: 8,
    text: "How many hours of sleep do you get a night?",
    type: "single",
    options: [
      { text: "Less than 4 hours", image: "/ocean.jpg" },
      { text: "4-6 hours", image: "/ocean.jpg" },
      { text: "6-8 hours", image: "/ocean.jpg" },
      { text: "More than 8 hours", image: "/ocean.jpg" },
    ],
  },
  {
    id: 9,
    text: "Are you currently:",
    type: "multiple",
    options: [
      { text: "Pregnant", image: "/ocean.jpg" },
      { text: "Trying to get pregnant", image: "/ocean.jpg" },
      { text: "Gave birth within the last 12 months", image: "/ocean.jpg" },
      { text: "Experiencing menopause, perimenopause, or andropause", image: "/ocean.jpg" },
      { text: "Diabetic or hypoglycemic", image: "/ocean.jpg" },
      { text: "None of the above", image: "/ocean.jpg" },
    ],
  },
  {
    id: 10,
    text: "How does your skin feel in the morning before washing your face?",
    type: "multiple",
    options: [
      { text: "Oily", image: "/ocean.jpg" },
      { text: "Dry", image: "/ocean.jpg" },
      { text: "Normal", image: "/ocean.jpg" },
      { text: "Sensitive", image: "/ocean.jpg" },
      { text: "Combination", image: "/ocean.jpg" },
    ],
  },
  {
    id: 11,
    text: "How does your face feel right after you wash it?",
    type: "multiple",
    options: [
      { text: "Tight", image: "/ocean.jpg" },
      { text: "Smooth", image: "/ocean.jpg" },
      { text: "Dry", image: "/ocean.jpg" },
      { text: "Normal", image: "/ocean.jpg" },
      { text: "Oily", image: "/ocean.jpg" },
    ],
  },
  {
    id: 12,
    text: "How much time can you dedicate to your skincare routine?",
    type: "multiple",
    options: [
      { text: "1-2 minutes: Quick and simple", image: "/ocean.jpg" },
      { text: "5-10 minutes: A bit more thorough", image: "/ocean.jpg" },
      { text: "15-20 minutes: Enjoy a more extensive routine", image: "/ocean.jpg" },
      { text: "30+ minutes: Love to indulge in skincare", image: "/ocean.jpg" },
    ],
  },
  {
    id: 13,
    text: "Are there any ingredients your skin doesn't agree with?",
    type: "multiple",
    options: [
      { text: "Fragrance", image: "/ocean.jpg" },
      { text: "Essential oils", image: "/ocean.jpg" },
      { text: "Alcohol", image: "/ocean.jpg" },
      { text: "Silicones", image: "/ocean.jpg" },
      { text: "Sulfates", image: "/ocean.jpg" },
      { text: "Parabens", image: "/ocean.jpg" },
      { text: "Other (please specify)", image: "/ocean.jpg" },
      { text: "No known sensitivities", image: "/ocean.jpg" },
    ],
  },
  {
    id: 14,
    text: "Have you used any of these active ingredients before?",
    type: "multiple",
    options: [
      { text: "Retinol", image: "/ocean.jpg" },
      { text: "Vitamin C", image: "/ocean.jpg" },
      { text: "AHAs (like glycolic acid)", image: "/ocean.jpg" },
      { text: "BHAs (like salicylic acid)", image: "/ocean.jpg" },
      { text: "Niacinamide", image: "/ocean.jpg" },
      { text: "Hyaluronic acid", image: "/ocean.jpg" },
      { text: "None of these", image: "/ocean.jpg" },
    ],
  },
  {
    id: 15,
    text: "What's your skincare budget range (for a complete routine)?",
    type: "multiple",
    options: [
      { text: "Under $50", image: "/ocean.jpg" },
      { text: "$50-$100", image: "/ocean.jpg" },
      { text: "$100-$200", image: "/ocean.jpg" },
      { text: "$200+", image: "/ocean.jpg" },
    ],
  },
  {
    id: 16,
    text: "Which best describes your typical day?",
    type: "multiple",
    options: [
      { text: "Early riser, busy days", image: "/ocean.jpg" },
      { text: "Standard 9-5 schedule", image: "/ocean.jpg" },
      { text: "Night owl, late sleeper", image: "/ocean.jpg" },
      { text: "Irregular schedule, shift work", image: "/ocean.jpg" },
    ],
  },
  {
    id: 17,
    text: "Are you currently using any of the following?",
    type: "multiple",
    options: [
      { text: "Acne medications", image: "/ocean.jpg" },
      { text: "Prescription retinoids", image: "/ocean.jpg" },
      { text: "Oral contraceptives", image: "/ocean.jpg" },
      { text: "Hormone treatments", image: "/ocean.jpg" },
      { text: "None of the above", image: "/ocean.jpg" },
    ],
  },
  {
    id: 18,
    text: "What's your primary skincare goal?",
    type: "multiple",
    options: [
      { text: "Achieve a natural, healthy glow", image: "/ocean.jpg" },
      { text: "Reduce signs of aging", image: "/ocean.jpg" },
      { text: "Clear up acne or breakouts", image: "/ocean.jpg" },
      { text: "Even out skin tone", image: "/ocean.jpg" },
      { text: "Hydrate and nourish dry skin", image: "/ocean.jpg" },
      { text: "Control oil and shine", image: "/ocean.jpg" },
    ],
  },
  {
    id: 19,
    text: "How do you feel about fragrances in your products?",
    type: "multiple",
    options: [
      { text: "Prefer fragranced products", image: "/ocean.jpg" },
      { text: "Enjoy light, natural scents", image: "/ocean.jpg" },
      { text: "Prefer unscented products", image: "/ocean.jpg" },
      { text: "No preference", image: "/ocean.jpg" },
    ],
  },
  {
    id: 20,
    text: "How important is using eco-friendly and sustainable products to you?",
    type: "multiple",
    options: [
      { text: "Very important, it's a top priority", image: "/ocean.jpg" },
      { text: "Somewhat important, I consider it", image: "/ocean.jpg" },
      { text: "Not a deciding factor for me", image: "/ocean.jpg" },
    ],
  },
  {
    id: 21,
    text: "Are there any specific areas of your face that need extra attention?",
    type: "multiple",
    options: [
      { text: "Forehead", image: "/ocean.jpg" },
      { text: "Nose and surrounding area", image: "/ocean.jpg" },
      { text: "Cheeks", image: "/ocean.jpg" },
      { text: "Chin and jawline", image: "/ocean.jpg" },
      { text: "Under-eye area", image: "/ocean.jpg" },
      { text: "No specific areas", image: "/ocean.jpg" },
    ],
  },
  {
    id: 22,
    text: "How does your skin react to changes in seasons or travel?",
    type: "multiple",
    options: [
      { text: "Becomes drier", image: "/ocean.jpg" },
      { text: "Becomes oilier", image: "/ocean.jpg" },
      { text: "More prone to breakouts", image: "/ocean.jpg" },
      { text: "More sensitive or irritated", image: "/ocean.jpg" },
      { text: "No significant changes", image: "/ocean.jpg" },
    ],
  },
  {
    id: 23,
    text: "Are you interested in multi-use products that can simplify your routine?",
    type: "multiple",
    options: [
      { text: "Very interested, I love multitasking products", image: "/ocean.jpg" },
      { text: "Somewhat interested, depends on the product", image: "/ocean.jpg" },
      { text: "Prefer separate products for each step", image: "/ocean.jpg" },
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
    <div className="max-w-4xl mx-auto bg-[var(--color-background-color)] rounded-lg shadow-md flex flex-col min-h-screen">
      <div className="p-6 border-b">
        <h1 className="text-3xl font-bold text-[var(--color-dark-cream)]">Okay Glow Skincare Quiz</h1>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-[var(--color-brown)] h-1.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Question {currentStep + 1} of {questions.length}
        </p>
      </div>
      
      <div className="flex-grow p-6">
        <QuizQuestionCard
          question={currentQuestion.text}
          options={currentQuestion.options}
          type={currentQuestion.type}
          onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
          selectedAnswers={answers[currentQuestion.id] || (currentQuestion.type === 'multiple' ? [] : '')}
        />
      </div>
      
      <div className="p-6 border-t flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="flex items-center px-4 py-2 bg-[var(--color-light-cream)] text-[var(--color-dark-cream)] rounded hover:bg-[var(--color-cream)] disabled:opacity-50 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === questions.length - 1}
          className="flex items-center px-4 py-2 bg-[var(--color-brown)] text-white rounded hover:bg-[var(--color-dark-brown)] disabled:opacity-50 transition-all duration-200"
        >
          {currentStep === questions.length - 1 ? 'Finish' : 'Next'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SkincareQuiz;


