const playBtn = document.querySelector('#playBtn');
const checkBtn = document.querySelector('#checkBtn');
const inputField = document.querySelector('#myInputCont');
const randomValueContainer=document.querySelector('.randIntCont');
const textMsgContainer=document.querySelector('.textMsgContainer');

let randomNum;
playBtn.addEventListener('click', () => {
    randomNum = Math.ceil(Math.random() * 20);
    textMsgContainer.textContent='Your Number is generated from 1 to 20 !!!'
    textMsgContainer.style.color='white'
    console.log(randomNum);
    inputField.value='';
    randomValueContainer.textContent='?';
});

checkBtn.addEventListener('click', () => {
    if (inputField.value == randomNum) {
        console.log('Congratulations! You Won');
        randomValueContainer.textContent=randomNum;
        textMsgContainer.textContent='Congratulations! You Won'
        textMsgContainer.style.color='green'
    } else {
        textMsgContainer.textContent='Hard luck! Try Again';
        textMsgContainer.style.color='red'
        console.log('Hard luck! You Failed');
    }
});




