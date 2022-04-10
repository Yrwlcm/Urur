let Switch_b = document.querySelector('.Switch_b');
let isDefault = 1;
let switchToBlue = () => Switch_b.classList.toggle('blue');
let switchToRed = () => Switch_b.classList.toggle('red'); 
Switch_b.addEventListener('mouseenter', switchToBlue);
Switch_b.addEventListener('mouseleave', switchToBlue);

let purplHearts = document.querySelectorAll('header>img');

let leftTextArea = document.querySelector('.Not_urur_txt');
let rightTextArea = document.querySelector('.Urur_txt');
leftTextArea.addEventListener('input', translateThings);

let leftHeart = document.querySelector('.Heart_Blue');
let rightHeart = document.querySelector('.Heart_Red');

const parAll = document.querySelectorAll('body>p');
console.log(parAll);
const parBoth = document.querySelectorAll('body>.both');
console.log(parBoth);
const parE = document.querySelectorAll('body>.parE');
console.log(parE);
const parS = document.querySelectorAll('body>.parS');
console.log(parS);

function randint (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let blueText = [], redText = [], purplText = [];

leftHeart.addEventListener('click', (e) => {
    let rnd = randint(0,parE.length);
    if (!blueText.includes(rnd)) {
        parE[rnd].style.left = `${randint(3,71)}vw`;
        parE[rnd].style.top = `${randint(3,71)}vh`;
        parE[rnd].style.zIndex = 10;
        parE[rnd].classList.toggle('nonTransp');
        blueText.push(rnd)
        setTimeout(()=>{
            parE[rnd].classList.toggle('nonTransp');
            setTimeout(()=> {
                blueText.shift();
                parE[rnd].style.zIndex = 0;
            }, 900)
        }, 900);
    }
})

rightHeart.addEventListener('click', (e) => {
    let rnd = randint(0,parS.length);
    if (!redText.includes(rnd)) {
        parS[rnd].style.left = `${randint(3,71)}vw`;
        parS[rnd].style.top = `${randint(3,71)}vh`;
        parS[rnd].style.zIndex = 10;
        parS[rnd].classList.toggle('nonTransp');
        redText.push(rnd);
        setTimeout(()=>{
            parS[rnd].classList.toggle('nonTransp');
            setTimeout(()=> {
                redText.shift();
                parS[rnd].style.zIndex = 0;
            }, 900)
        }, 900);
    }
})

for (heart of purplHearts) {
    heart.addEventListener('click', (e) => {
        let rnd = randint(0,parBoth.length);
        if (!purplText.includes(rnd)) {
        parBoth[rnd].style.left = `${randint(3,71)}vw`;
        parBoth[rnd].style.top = `${randint(3,71)}vh`;
        parBoth[rnd].style.zIndex = 10;
        parBoth[rnd].classList.toggle('nonTransp');
        purplText.push(rnd);
        setTimeout(()=>{
            parBoth[rnd].classList.toggle('nonTransp');
            parBoth[rnd].style.zIndex = 0;
            setTimeout(()=> {
                purplText.shift();
                parBoth[rnd].style.zIndex = 0;
            }, 900)
        }, 900);
    }
    })
}

function switchSides () {
    Switch_b.classList.toggle('presd');
    if (isDefault == 1) {
        isDefault = 0;
        Switch_b.classList.toggle('blue');
        Switch_b.classList.toggle('red');
        Switch_b.removeEventListener('mouseenter', switchToBlue);
        Switch_b.removeEventListener('mouseleave', switchToBlue);
        Switch_b.addEventListener('mouseenter', switchToRed);
        Switch_b.addEventListener('mouseleave', switchToRed);
        leftHeart.classList.toggle('transparentThing')
        rightHeart.classList.toggle('transparentThing')
        leftTextArea.value = '';
        rightTextArea.value = '';
        leftTextArea.placeholder = 'Урур';
        rightTextArea.placeholder = 'Люблю';
        setTimeout(() => {
            leftHeart.style.gridColumn = 3;
            rightHeart.style.gridColumn = 1;
            leftHeart.classList.toggle('transparentThing')
            rightHeart.classList.toggle('transparentThing')
        }, 500)
    }
    else {
        isDefault = 1;
        Switch_b.classList.toggle('red');
        Switch_b.classList.toggle('blue');
        Switch_b.removeEventListener('mouseenter', switchToRed);
        Switch_b.removeEventListener('mouseleave', switchToRed);
        Switch_b.addEventListener('mouseenter', switchToBlue);
        Switch_b.addEventListener('mouseleave', switchToBlue);
        leftHeart.classList.toggle('transparentThing')
        rightHeart.classList.toggle('transparentThing')
        leftTextArea.value = '';
        rightTextArea.value = '';
        leftTextArea.placeholder = 'Люблю';
        rightTextArea.placeholder = 'Урур';
        setTimeout(() => {
            leftHeart.style.gridColumn = 1;
            rightHeart.style.gridColumn = 3;
            leftHeart.classList.toggle('transparentThing')
            rightHeart.classList.toggle('transparentThing')
        }, 500)
    }
}

Switch_b.addEventListener('click', switchSides);