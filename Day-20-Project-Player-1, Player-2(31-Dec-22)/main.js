
(() => {

     // ===================== DOM's ========================

const winPlayer =  document.querySelector('.win-player')
const fullForm =  document.querySelector('form')
const submit = document.querySelector('.submit')
const winScore =  document.querySelector('.win-score span')
const ply1Score =  document.querySelector('.pl-1-score')
const ply2Score =  document.querySelector('.pl-2-score')
const ply1Btn =  document.querySelector('.pl-1-btn')
const ply2Btn =  document.querySelector('.pl-2-btn')
const resetBtn =  document.querySelector('.resetBtn')
const winInputScore =  document.querySelector('.win-inptut')

// =============== some importent ver and work =============

let p1Score = 0
let p2Score = 0
let p1Turn = true
let p2Turn = true
let isGameOver = false

//Math.ceil(Math.random() * 3)

function validateInpute(inputValue){
    
    let isInValid = false
    
    if(!inputValue || inputValue !== inputValue){
        alert("We See Some Mistake Here.")
        isInValid = true
    }
    
}
 
// ========================== Handleing Submit ==============

function resetInptu() {
    winInputScore.value = ''
}

fullForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const inputValue =  Number(winInputScore.value)


    const isInValid = validateInpute(inputValue)

    if(isInValid) return

    resetInptu()
    
    winScore.textContent = inputValue
    
    if(inputValue > 50){
        alert('Please Give a value that are smaler than or equal than 50')
        winScore.textContent = '10'
    }
    

})



// Submit Disiblility
ply1Btn.addEventListener('click', (evt) => {
    submit.setAttribute('disabled', 'disabled')
})


// ================= Handleing Player 1 and Player 2 =================

// Difuledly btn 2 disebility
ply2Btn.setAttribute('disabled', 'disabled')

// Btn 1 work
ply1Btn.addEventListener('click', (evnt) => {

    //Btn 1 Score
    if(p1Turn){
        p1Score += Math.ceil(Math.random() * 10)
        ply1Score.textContent = p1Score
    }

    // Btn 1 Disiblility
    p1Turn = false
    ply1Btn.setAttribute('disabled', 'disabled')

    // Btn 2 enability
    p2Turn = true
    ply2Btn.removeAttribute('disabled')

    // win player messege
    if(p1Score >= winScore.textContent){
        isGameOver = true
        winPlayer.textContent = "Player 1 is Winer"
        ply2Btn.setAttribute('disabled', 'disabled')
    }
    console.log(winScore)
    console.log(p1Score)
    console.log(winScore == p1Score)
    console.log(true == true)

})

ply2Btn.addEventListener('click', (evnt) => {

    // Btn 2 Score
    if(p2Turn){
        p2Score += Math.ceil(Math.random() * 10)
        ply2Score.textContent = p2Score
    }

    // Btn 2 Disiblility
    p2Turn = false
    ply2Btn.setAttribute('disabled', 'disabled')

    // Btn 2 Enability
    p1Turn = true
    ply1Btn.removeAttribute('disabled')

    // win player messege
    if(p2Score >= winScore.textContent){
        isGameOver = true
        winPlayer.textContent = "Player 2 is Winer"
        ply1Btn.setAttribute('disabled', 'disabled')
    }
})

// ================== Handleing Input =====================

// Input Disiblility
ply1Btn.addEventListener('click', (evt) => {
    winInputScore.setAttribute('disabled', 'disabled')

})


// ================= Handleing Reset ======================

resetBtn.addEventListener('click', evt => {

    // Win Score Reseted
    winScore.textContent = 10

    // player 1 Score Reseted
    ply1Score.textContent = 0
    p1Score = 0

    // Player  2 Score Reseted
    ply2Score.textContent = 0
    p2Score = 0
 
    // Player 1 disibility reseted
    ply1Btn.removeAttribute('disabled')

    // Player 2 disibility reseted
    ply2Btn.setAttribute('disabled', 'disabled')

    // input disibility reseted
    winInputScore.removeAttribute('disabled')

    // submit disibility reseted
    submit.removeAttribute('disabled')

    // win messege resit
    winPlayer.textContent = ""
})


})()

