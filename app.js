let myName = 'David';

// eslint-disable-next-line no-console
console.log (`Hello ${myName}`);

const button = document.getElementById('button');
button.addEventListener('click', ()=>{
//button.addEventListener('click', ()=>{
    const inputs = document.getElementById('email-inputs');
    inputs.classList.toggle('hide');
    const thankYou = document.getElementById('thank-you');
    thankYou.classList.toggle('hide');

});





// import functions

// grab DOM elements

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
