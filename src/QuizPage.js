import React, { useState } from 'react';

export default function QuizPage() {

  const [questions] = useState([
    {
      id: 1,
      qtn: "Practice what you have learned with interactive exercises in your browser to get personalized learning recommendations to master C programming language and win badges to increase your points. You can also retake assignments to track your progress.",
      time: 2,
      answers: [
        "one", "two", "three", "four"
      ]
    }
  ])

  return (
    <div className='container'>
      <div className='pb-4'>
        <p className="font-medium text-2xl text-gray-900"> Variables quiz </p>
      </div>
      <div className='w-full'>
        {questions.map((question, key) => (
          <QuizCard num={question.id} qtn={question.qtn} answers={ question.answers } />
        ))}
      </div>
    </div>
  );
}

function QuizCard({num, qtn, time, answers}) {
  return (
    <div className="bg-white rounded-lg shadow-md w-full flex-1 pt-4 pb-4">
      <div className='px-8'>
        <p className="font-medium text-lg text-gray-500"> Question {num} </p>
        <p className="font-semibold text-gray-700 pt-4 text-2xl">
          { qtn }
        </p>
      </div>
      <div className='Answers py-4'>
        <p className='bg-gray-200 px-8 py-4 font-semibold text-gray-500'>Choose the corect answer/s below:</p>
        {answers.map((answer, key) => (
          <QuizAnswers answer={ answer } />
        ))}
      </div>
      <div className='relative w-full pb-4 h-10'>
        <p className='absolute inset-y-0 right-0 px-12 py-2 bg-blue-600 rounded-full text-gray-300 text-lg mr-8'> Submit answer </p>
      </div>
      <div className='Progres'>
      </div>
    </div>
  )
}

function QuizAnswers({ answer }){
  return(
    <div>
      <div className='flex px-8 py-4'>
        <div>
          <input type='checkbox' className=''></input>
        </div>
        <div>
          <p className='pl-4 font'> { answer } </p>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

