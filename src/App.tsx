import { useState } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard'
import { fetchQuizQuestions } from './API'
import {QuestionState, Difficulty } from './API'

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const Total_Questions = 10
function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score , setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(question)
  // console.log(fetchQuizQuestions(Total_Questions, Difficulty.EASY))
  const startTriva = async () =>{
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(Total_Questions, Difficulty.EASY);
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    
  }

  const nextQuestion = () =>{
    
  }

  return (
    <div className='App'>
      <h1>React Quiz</h1>
      {gameOver || userAnswer.length === Total_Questions ? (
      <button className='start' onClick={startTriva}>Start</button>
      ): null}
      {!gameOver ? <p className='score'>Score: </p>: null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
          <QuestionCard
      questionNr={number + 1}
      totalQuestions={Total_Questions}
      question={question[number].question}
      answers={question[number].answers}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}
      /> 
      )}
     
     {!gameOver && !loading && userAnswer.length === number + 1 && number !== Total_Questions - 1 ? (
      <button onClick={nextQuestion}>Next Question</button>
     ): null}
    </div>
  )
}

export default App
