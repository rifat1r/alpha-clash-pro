// function play(){
//     //step-1:hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     //step-2:show the playground
//     //show playground
//      const playground = document.getElementById('play-ground');
//      playground.classList.remove('hidden');


// }
function continueGame(){
    //step-1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet is -', alphabet);

    //randomly generated alphabet by to the screen;
    const currentAlphabet =document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;

    //set backgroundcolor

    setBAckgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}