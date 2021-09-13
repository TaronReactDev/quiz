import React, {useState, useEffect} from 'react';
import LinearProgress from "./linearProgress"
import QuestionContainer from "./questionContainer";


const questions = [
  {
    question: "how much is 1+1 ?",
    answers: [2, 5, 6, 4],
    trueAnswer: 2,
  },
  {
    question: "how much is 2+2 ?",
    answers: [2, 5, 6, 4],
    trueAnswer: 4,
  },
  {
    question: "how much is 3+2 ?",
    answers: [2, 5, 6, 4],
    trueAnswer: 5,
  },
  {
    question: "how much is 3+3 ?",
    answers: [2, 5, 6, 4],
    trueAnswer: 6,
  }
];


function Index(props) {
  const [answerOfUser, setAnswerOfUser] = useState();

  const [userAnswerArray, setUserAnswerArray] = useState([]);

  const [lengthOfResult, setLengthOfResult] = useState(0);

  useEffect(() => {
    return () => {
      setLengthOfResult(userAnswerArray.length)
    };
  }, [userAnswerArray]);


  const handelSubmitBtn = (ev) => {
    ev.preventDefault();

    let arr = [];
    arr.push(answerOfUser);
    setUserAnswerArray([...userAnswerArray, ...arr])

  }

  const handelCheckboxClick = (index)=>(ev) => {
 let scor = ev.target.value == questions[index].trueAnswer ? 1 : 0;
    setAnswerOfUser(scor);


  }

  const questionsRender = questions.map(
    (el, index) => {
      return (
        <QuestionContainer questions={questions} index={index} lengthOfResult={lengthOfResult}
                           handelSubmitBtn={handelSubmitBtn} handelCheckboxClick={handelCheckboxClick}/>)
    }
  )
  console.log(userAnswerArray)

  return (
    <>
      {        lengthOfResult == 4 ?
         `your scor is ${userAnswerArray.reduce((sum,el)=> sum+el, 0)}`:
          <div>
            <header className={"quizTitle"}> Quiz title</header>
            <LinearProgress lengthOfResult={lengthOfResult}/>
            {questionsRender}

          </div>
      }


    </>
  );
}

export default Index;

