let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

printMessage('Գրեք խաղացողի անունը:');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;

    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${name}, Գուշակիր թիվը 0ից մինչև 100։ Փորձիր գուշակել նվազագույն քայլերով։ Ամեն փորձից հետո կասեմ կամ "Քիչ է" կամ "Շատ է" կամ "Ճիշտ է": Դե ինչ սկսենք?`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage('Շատ է: Փորձիր նորից:');
    } else if (guess < number) {
        printMessage('Քիչ է: Փորձիր նորից:');
    } else {
        printMessage(`Ճիշտ է, Այս թիվը  ${guess} է`);
        printMessage(`Փորձերի քանակ: ${guesses}`);
        printMessage('Խաղի վերջ');

        prompt.remove();
    }
}



function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs >= 24){
        session.innerHTML = 'AM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 24){
        hrs = hrs - 24;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

