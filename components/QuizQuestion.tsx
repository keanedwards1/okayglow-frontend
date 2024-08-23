// components/QuizQuestion.tsx

type QuizQuestionProps = {
    question: string;
    onAnswer: (answer: string) => void;
  }
  
  export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
    return (
      <div>
        <h2 className="text-2xl mb-4">{question}</h2>
        {/* Add answer options and handle onAnswer */}
      </div>
    )
  }