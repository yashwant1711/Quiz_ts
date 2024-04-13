import { useState } from 'react'
import './App.css'
// import QuestionCard from './components/QuestionCard'
import { fetchQuizQuestions } from './API'
import { Difficulty } from './API'

const Total_Questions = 10
function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score , setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(Total_Questions, Difficulty.EASY))
  const startTriva = async () =>{

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    
  }

  const nextQuestion = () =>{
    
  }

  return (
    <div className='App'>
      <h1>React Quiz</h1>
      <button className='start' onClick={startTriva}>Start</button>
      <p className='score'>Score: </p>
      <p>Loading Question</p>
      {/* <QuestionCard
      questionNr={number + 1}
      totalQuestions={Total_Questions}
      question={question[number].question}
      answers={question[number].answers}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App
