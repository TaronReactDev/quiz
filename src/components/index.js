import React, {useState, useEffect} from 'react';
import LinearProgress from "./linearProgress"
import QuestionContainer from "./questionContainer";
import ProgresBar from "./progresBar"



function Index(props) {
  const [questions, setQuestions] = useState([]);

  const [answerOfUser, setAnswerOfUser] = useState();

  const [userAnswerArray, setUserAnswerArray] = useState([]);

  const [lengthOfResult, setLengthOfResult] = useState(0);

  const [disable, setDisable] = useState(true);

  const [display, setDisplay] =useState("none")

  const [displayQuestion, setDisplayQuestion] =useState("block")

useEffect(()=>{
   fetch('/data.json')
     .then(response => {
       if (!response.ok) {
         throw new Error("HTTP error " + response.status);
       }
       return response.json()
     }).then(data => {
     setQuestions([...questions,...data.questions])
   }).catch(function (e) {
     console.log(e)
   })
 }, [])

  const handelSubmitBtn = (ev) => {
    ev.preventDefault();
    setDisplay("flex")
    setDisplayQuestion("none")
    let arr = [];
    arr.push(answerOfUser);
    setUserAnswerArray([...userAnswerArray, ...arr])
    setDisable(true);
    setLengthOfResult(userAnswerArray.length +1);

    setTimeout(()=>{
      setDisplay("none");
      setDisplayQuestion("block");
    },1000)
  }



  const handelCheckboxClick = (index) => (ev) => {
    setDisable(!ev.target.value);
    let score = ev.target.value === questions[index].trueAnswer ? 1 : 0;
    setAnswerOfUser(score);
  }

  const questionsRender = questions.map(
    (el, index) => {
      return (
        <QuestionContainer questions={questions} index={index} lengthOfResult={lengthOfResult}
                           handelSubmitBtn={handelSubmitBtn} handelCheckboxClick={handelCheckboxClick}
                           disabled={disable} displayQuestion={displayQuestion}
                           key={`question_${index}`}/>)
    }
  )


  return (
    <>
      {
          questions.length ===4?
          lengthOfResult === 4 ?
        `your score is ${userAnswerArray.reduce((sum, el) => sum + el, 0)}` :
        <div>
          <header className={"quizTitle"}> Quiz title</header>
          <LinearProgress lengthOfResult={lengthOfResult}/>
          <ProgresBar display={display}/>
          {questionsRender}
        </div>
          : ""

      }
    </>
  );
}

export default Index;

