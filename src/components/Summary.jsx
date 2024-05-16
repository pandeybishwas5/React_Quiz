import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

export default function Summary({ userAnswers = [] }) { // Default to an empty array if userAnswers is undefined
    const totalQuestions = QUESTIONS.length;
    const skipped = userAnswers.filter(answer => answer === null).length;
    const correct = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;
    const incorrect = totalQuestions - skipped - correct;

    const skippedPercentage = ((skipped / totalQuestions) * 100).toFixed(2);
    const correctPercentage = ((correct / totalQuestions) * 100).toFixed(2);
    const incorrectPercentage = ((incorrect / totalQuestions) * 100).toFixed(2);

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedPercentage}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctPercentage}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{incorrectPercentage}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{QUESTIONS[index].text}</p>
                        <p className='user-answer'>
                            {answer === null ? 'Skipped' : answer}
                        </p>
                        <p className='correct-answer'>
                            Correct answer: {QUESTIONS[index].answers[0]}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
