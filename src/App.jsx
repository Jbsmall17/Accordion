import React from 'react'
import "./index.css"
import questions from './data'
import Question from './Question'
function App() {
  const QuestionsArticle = questions.map((question)=>{
    return <Question key={question.id} {... question}/>
  })
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {QuestionsArticle}
        </section>
      </div>
    </main>
  )
}

export default React.memo(App)
