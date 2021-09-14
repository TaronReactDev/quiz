import React from 'react';

function QuestionContainer({questions,  index, lengthOfResult, handelCheckboxClick, handelSubmitBtn, disabled, displayQuestion}) {


  const answerCheckbox = questions.map((el, index) => {
  if(lengthOfResult == index) {return el.answers.map((el) => {

      return (<li>
          <input type="checkbox" id="horns" name="horns" value={el} onClick={handelCheckboxClick(index)}/>
          <label htmlFor="horns">{el}</label>
        </li>
      )
    }) }

  })



  return (
     <>
       {
         lengthOfResult == index ? <>
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
         </> : null
       }


     </>

)


}

export default QuestionContainer;
