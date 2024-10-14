import { useState } from 'react'
import './App.css'
import Lottery from './lottery'
import Ticket from './Ticket'
import { sum } from './helper'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comment from './Comment'
import Joke from './Joke'

// function App() {
//   let winningCondition = (arr) => {
//     // return sum(arr) === 15;
//     return arr.every((num) => num === arr[0]);
//   }
//   return (
//     <>
//       <Lottery n={3} winningCondition={winningCondition}/>
//     </>
//   )
// }

function App() {
  return (
    <>
      {/* <Form/> */}
      {/* <CommentsForm/> */}
      {/* <Comment/> */}
      <Joke/>
    </>
  )
}

export default App
