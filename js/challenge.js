let counter = document.querySelector('#counter');

const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');

const likes = document.querySelector('.likes')

const button = document.querySelector('#submit')
const inputForm = document.querySelector('#comment-input')

let clicks = 1
let num = 0
let li = undefined

let countInter = setInterval(() => {counter.innerText++}, 1000);

minus.addEventListener('click', () => {
    counter.innerText -= 1;
})

plus.addEventListener('click', () => {
    counter.innerText++;
})

heart.addEventListener('click', heartEvent)


function heartEvent() {
    if (num === counter.innerText) {
        clicks++
        li.innerText = `${counter.innerText} has been liked ${clicks} times!`
    }else {
        clicks = 1
        num = counter.innerText 
        li = document.createElement('li');
        li.innerText = `${counter.innerText} has been liked ${clicks} times!`
        likes.appendChild(li)
    }   
}

pause.addEventListener('click', handlePause)


function handlePause() {
    if (pause.innerText === 'pause') {
        clearInterval(countInter);
        pause.innerText = 'resume';
        heart.disabled = true;
        plus.disabled = true;
        minus.disabled = true;
    }else if (pause.innerText === 'resume') {
        pause.innerText = 'pause'
        countInter = setInterval(() => {counter.innerText++}, 1000); 
        heart.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
    }

}

document.querySelector('form').addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let p = document.createElement('p')
    p.innerText = e.target.commentInput.value
    document.querySelector('div#list').appendChild(p)
}

