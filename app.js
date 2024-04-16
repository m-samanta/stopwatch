const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')
let cancelId
let startTime
let savedTime = 0

function startTimer() {
    startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
    savedTime = savedTime + Date.now() - startTime
    cancelAnimationFrame(cancelId)
}

function resetTimer() {
    startTime = Date.now()
    savedTime = 0
    timerMilliseconds.innerHTML = '000'
    timerSeconds.innerHTML = '00'
    timerMinutes.innerHTML = '00'
}

function updateTimer() {
    let millisPassed = (Date.now() - startTime) + savedTime
    let secondsPassed = millisPassed / 1000
    let minutesPassed = secondsPassed / 60

    let minutesHTML = Math.floor(minutesPassed)
    let secondsHTML = Math.floor(secondsPassed % 60)
    let millisHTML = millisPassed % 1000

    if(minutesHTML.toString().length === 1){
        minutesHTML = '0' + minutesHTML
    }

    if(secondsHTML.toString().length === 1){
        secondsHTML = '0' + secondsHTML
    }

    if(millisHTML.toString().length < 3){
        millisHTML = millisHTML.toString().padStart(3, "0")
    }

    timerMilliseconds.innerHTML = millisHTML
    timerSeconds.innerHTML = secondsHTML
    timerMinutes.innerHTML = minutesHTML
    cancelId = requestAnimationFrame(updateTimer)
}