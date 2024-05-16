import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    }, []);

    const handleSkipAns = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    const quizCompleted = activeQuestionIndex === QUESTIONS.length;

    return (
        <div id="quiz-container">
            {quizCompleted ? (
                <Summary userAnswers={userAnswers} />
            ) : (
                <div id="quiz">
                    <Question 
                        key={activeQuestionIndex}
                        questionIndex={activeQuestionIndex}
                        onSelectAnswer={handleSelectAnswer}
                        onSkipAnswer={handleSkipAns}
                    />
                </div>
            )}
        </div>
    );
}
