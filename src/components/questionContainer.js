import React from 'react';

function QuestionContainer({questions,  index, lengthOfResult, handelCheckboxClick, handelSubmitBtn}) {


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
           <article>
             Question {`${index + 1}`}:
             <p> {questions[index].question}</p>
           </article>

           <form onSubmit={handelSubmitBtn}>
             <ul>
               {answerCheckbox}
             </ul>

             <button onClick={handelSubmitBtn}>submit</button>
           </form>
         </> : null
       }


     </>

)


}

export default QuestionContainer;
