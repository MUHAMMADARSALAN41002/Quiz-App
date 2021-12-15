const allquestion = [
    {
        question: 'Q1: What is the full form HTML?',
        a: 'Hypertext Month Language',
        b: 'Hypertext Markup Language',
        c: 'Hyper Markup Language',
        d: 'Hypertext Markup programing',
        ans: 'second'
    },
    {
        question: 'Q2: What is the full form CSS?',
        a: 'Cascading Style Shirt',
        b: 'Cascading School Sheets',
        c: 'Cascading Style Basics',
        d: 'Cascading Style Sheets',
        ans: 'fourth'
    },
    {
        question: 'Q3: What is the full form URL?',
        a: 'Uniform Source Locator',
        b: 'Uniform Resource Locator',
        c: 'Uniform Resource Location',
        d: 'Uniform source Location',
        ans: 'second'
    },
    {
        question: 'Q4: Who was the first governor general of pakistan?',
        a: 'Liaquat Ali Khan',
        b: 'Allama Iqbal',
        c: 'Quaid-i-Azam',
        d: 'Sir Syed Ahmed Khan',
        ans: 'third'
    },
    {
        question: 'Q5: What is the correct HTML for referring to an external style sheet?',
        a: "<style src='StyleSheet.css>'" ,
        b: '<stylesheet>style.css</stylesheet>',
        c: "<link rel='StyleSheet' href='style.css'> </link>",
        d: ' <link rel="stylesheet" href="./style.css">',
        ans: 'fourth'
    },
]
const question = document.getElementById('question');
const option1 = document.getElementById('firstoption');
const option2 = document.getElementById('secondoption');
const option3 = document.getElementById('thirdoption');
const option4 = document.getElementById('fourthoption');
const submit = document.getElementById('submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.getElementById('showScore');

let countQuestion = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = allquestion[countQuestion];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const answerChecker = () => {
    let myanswer;

    answers.forEach((checkedAnswer) => {
        if(checkedAnswer.checked) {
            myanswer = checkedAnswer.id;
        }
    });
    return myanswer;
}

const deselectAll = () => {
    answers.forEach((checkedAnswer) => {
        checkedAnswer.checked = false
    });
}


submit.addEventListener('click', () => {
    const checkAnswer = answerChecker();
    console.log(checkAnswer)

    if(checkAnswer === allquestion[countQuestion].ans) {
        score++;
    }

    countQuestion++;
    deselectAll();

    if(countQuestion < allquestion.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3> Your score ${score}/${allquestion.length}  </h3> 
        <button class='btn' onClick='location.reload()'> Play again </button>
        `
        showScore.classList.remove('secore')
    }
})