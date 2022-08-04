//const flipButton = document.querySelector("#flip-button")
//console.log("my flip button", flipButton)
//const clearButton = document.querySelector("#clear-button")
//console.log("my clear button", clearButton)

//references to my table
//const headsTd = document.querySelector("#heads")
//console.log("my headsTd", headsTd)
//const headsPercentTd = document.querySelector("#heads-percent")
//console.log("my headsPercentTd", headsPercentTd)
//const tailsTd = document.querySelector("#tails")
//console.log("my tailsTd", tailsTd)
//const tailsPercentTd = document.querySelector("#tails-percent")
//console.log("my tailsPercentTd", tailsPercentTd)


// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0
    
//Function that is going to update the scoreboard so that the butons can be reused again



document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')})

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById("flip").addEventListener('click', function (){

        let flippedHeads = Math.random() < 0.5

        if (flippedHeads) {
            document.getElementById('penny-image').scr = 'penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads'
            
            headsRolls += 1
        }
        else {
            document.getElementById('penny-image').src = 'penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails'
            tailsRolls += 1
    }


let total = headsRolls + tailsRolls

    let percentHeads = 0
    let percentTails = 0
    if (total > 0) {
        percentHeads = Math.round((headsRolls / total) * 100)
        percentTails = Math.round((tailsRolls / total) * 100)
    }
    document.getElementById('heads').textContent = headsRolls
    document.getElementById('heads-percent').textContent = percentHeads
    document.getElementById('tails').textContent = tailsRolls
    document.getElementById('tails-percent').textContent = percentTails
    })

     // TODO: Determine flip outcome
     document.getElementById("clear").addEventListener('click', function () {
debugger

     let total = headRolls + tailsRolls
     let percentHeads = 0
     let percentTails = 0

     if (total > 0){
        percentHeads = Math.round(headsRolls / total) * 100;
        percentTails = Math.round(tailsRolls / total) * 100;
     }
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
     })

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
   // document.getElementById("#clear").addEventListener('click'())

        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard same logic as in flip button click handler
