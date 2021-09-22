import React from 'react';

function QuestionContainer({questions,  index, lengthOfResult, handelCheckboxClick, handelSubmitBtn, disabled, displayQuestion}) {


  const answerCheckbox = questions.map((el, index) => {
  if(lengthOfResult === index) {return el.answers.map((el,i) => {

      return (<li key={`question_li_${i}`}>
          <input type="radio" id="horns" name="horns" value={el} onClick={handelCheckboxClick(index)}/>
          <label htmlFor="horns">{el}</label>
        </li>
      )
    })}
  })


    return (
        <div >
       {
         lengthOfResult === index ? <div >
           <article style={{display:displayQuestion}}>
             Question {`${index + 1}`}:
             <p> {questions[index].question}</p>
           </article>

           <form onSubmit={handelSubmitBtn}>
             <ul className={"checkbox"}  style={{display:displayQuestion}}>
               {answerCheckbox}
             </ul>

             <button onClick={handelSubmitBtn} disabled={disabled} style={{display:displayQuestion}}>submit</button>
           </form>
         </div> : null
       }
     </div>
)
}

export default QuestionContainer;
