/*
THIS FUNCTIONALITY WILL BE ADDED LAST, TIME PERMITTING
// event listener for change name buttons

// function to get playerName

// function to assignPlayerName
    // takes user input
    // changes innerText of specified player's playerName

// call function to assign player1Name

// call function to assign player2Name
 */

// class player
class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.score = 0;
    this.roundScore = 0;
    this.winningSets = [];
  }
}

// create player1
let player1 = new Player(`Player 1`);
// create player2
let player2 = new Player(`Player 2`);

let player1Score = document.querySelector(`#player1Score`);
let player1RoundScore = document.querySelector(`#player1RoundScore`);
let player2Score = document.querySelector(`#player2Score`);
let player2RoundScore = document.querySelector(`#player2RoundScore`);
let playerRoundScores = document.querySelectorAll(`.playerRoundScore`);

let popUp = document.querySelector(`#popup`);
let popUpInner = document.querySelector(`#popupInner`);
let popupStatement = document.querySelector(`#popupStatement`);
let gameRules=document.querySelector(`#rules`);
let buttons = document.querySelectorAll(`button`);
let startGameButton = document.querySelector(`#startGame`);
let nextSetButton = document.querySelector(`#nextSet`);
let nextRoundButton = document.querySelector(`#nextRound`);
let resetGameButton = document.querySelector(`#resetGame`);
let question = document.querySelector(`#question`);
let invention = document.querySelector(`#invention`);
let answerCards = document.querySelectorAll(`.answer`);
let currentRound = document.querySelector(`#currentRound`);

// all answers array - with all possible answers
let answers = [
  [
    `Folding Cabinet Beds`,
    `https://www.blackpast.org/african-american-history/goode-sarah-e-c-1855-1905/`,
    `Sarah Goode`,
  ],
  [
    `Blood Banks`,
    `https://www.acs.org/education/whatischemistry/african-americans-in-sciences/charles-richard-drew.html`,
    `Charles Richard Drew`,
  ],
  [
    `Home Security Systems`,
    `https://lemelson.mit.edu/resources/marie-van-brittan-brown`,
    `Mary Van Brittan Brown`,
  ],
  [
    `Traffic Lights & Gas Masks`,
    `https://www.pbs.org/wgbh/theymadeamerica/whomade/morgan_hi.html`,
    `Garrett Augustus Morgan`,
  ],
  [
    `Mobile Refrigeration`,
    `https://www.invent.org/inductees/frederick-mckinley-jones`,
    `Frederick McKinley Jones`,
  ],
  [
    `Super Soakers`,
    `https://invention.si.edu/meet-lonnie-johnson-man-behind-super-soaker`,
    `Lonnie Johnson`,
  ],
  [
    `Sanitary Belts & Tissue Holders`,
    `https://www.vice.com/en/article/mb5yap/mary-beatrice-davidson-kenner-sanitary-belt`,
    `Mary Beatrice Davidson Kenner`,
  ],
  [
    `Jessup Wagons`,
    `https://www.history.com/topics/black-history/george-washington-carver`,
    `George Washington Carver`,
  ],
  [
    `the Laserphaco Probe`,
    `https://www.acs.org/education/whatischemistry/african-americans-in-sciences/patricia-bath.html`,
    `Dr. Patricia Bath`,
  ],
  [
    `Turn Signals`,
    `https://www.blackpast.org/african-american-history/spikes-richard-1878-1965/`,
    `Richard Bowie Spikes`,
  ],
  [
    `Automatic Clothes Dryers`,
    `https://samepassage.org/george-t-sampson/`,
    `George T. Sampson`,
  ],
  [
    `Dust Pans`,
    `https://www.thoughtco.com/lloyd-ray-dust-pans-4071178`,
    `Lloyd P. Ray`,
  ],
  [
    `Golf Tees`,
    `https://www.pga.com/archive/how-dr-george-f-grant-went-african-american-dentist-golf-tee-inventor`,
    `Dr. George Grant`,
  ],
  [
    `Ice Cream Scoops`,
    `https://jaxexaminer.com/alfred-l-cralle-invented-the-ice-cream-scoop/`,
    `Alfred L. Cralle`,
  ],
  [
    `The Rotary Blade Lawn Mower`,
    `https://www.thoughtco.com/green-lawns-john-albert-burr-4072195#:~:text=On%20May%209%2C%201899%2C%20John,plugged%20up%20from%20lawn%20clippings`,
    `John Albert Burr`,
  ],
  [
    `Lawn Sprinklers`,
    `https://patents.justia.com/inventor/john-h-smith`,
    `Joseph H. Smith`,
  ],
  [
    `the Predecessor to the Modern Toilet`,
    `https://www.myblackhistory.net/Thomas_Elkins.htm`,
    `Dr. Thomas Elkins`,
  ],
  [
    `Wringing Mops`,
    `https://www.thoughtco.com/thomas-stewart-the-mop-4077038`,
    `Thomas W. Stewart`,
  ],
  [
    `Reversible Baby Carriages`,
    `https://www.thoughtco.com/history-of-baby-carriages-4075936`,
    `William Richardson`,
  ],
  [
    `the Coin Changer`,
    `https://patents.google.com/patent/US3490571A/en`,
    `James A. Bauer`,
  ],
  [
    `Rotary Engines`,
    `https://www.invent.org/inductees/andrew-j-beard`,
    `Andrew J. Beard`,
  ],
  [
    `Stainless Steel Scouring Pads`,
    `https://patents.google.com/patent/US3039125A/en`,
    `Alfred Benjamin`,
  ],
  [
    `Torpedo Discharge Devices`,
    `https://patents.google.com/patent/US2390688A/en`,
    `Henrietta Mahim Bradberry`,
  ],
  [
    `Disposable Syringes`,
    `https://patents.google.com/patent/US3802434A/en`,
    `Phil Brooks`,
  ],
  [
    `Corn Planters`,
    `https://theblackwallsttimes.com/2022/10/07/the-inventions-of-henry-blair-laid-ground-to-modern-agriculture/`,
    `Henry Blair`,
  ],
  [
    `Street Sweepers`,
    `https://www.thoughtco.com/charles-brooks-inventor-4077401`,
    `Charles B. Brooks`,
  ],
  [
    `Horse Bridle-Bits`,
    `https://patents.google.com/patent/US484994A/en`,
    `Lincoln Fremont Brown`,
  ],
  [
    `Horseshoes`,
    `https://patents.google.com/patent/US481271A/en`,
    `Oscar E. Brown`,
  ],
  [
    `Train Alarms`,
    `https://patents.google.com/patent/US584540A/en`,
    `Richard A. Butler`,
  ],
  [
    `Automatic Fishing Reels`,
    `https://patents.google.com/patent/US657518A/en`,
    `George Cook`,
  ],
  [
    `Envelope Seals`,
    `https://patents.google.com/patent/US590325A/en`,
    `Frederick W. Leslie`,
  ],
  [
    `Portable Pencil Sharpeners`,
    `https://www.thoughtco.com/john-lee-love-profile-1992097`,
    `John L. Love`,
  ],
  [
    `Fire Extinguishers`,
    `https://nsucurrent.nova.edu/2015/02/25/black-inventors/`,
    `Thomas J. Marshal`,
  ],
  [
    `Rocket Catapults`,
    `https://patents.google.com/patent/US3735948A/en`,
    `Hugh D. MacDonald`,
  ],
  [
    `Synthetic Bristle Hairbrushes`,
    `https://lemelson.mit.edu/resources/lyda-newman`,
    `Lyda Newman`,
  ],
  [
    `Gas Heating Furnaces`,
    `https://thedig.howard.edu/all-stories/brought-you-howard-alice-h-parkers-historic-patent-gas-heater-warms-world`,
    `Alice H. Parker`,
  ],
  [
    `Blimps`,
    `https://patents.google.com/patent/US643975A/en`,
    `John F. Pickering`,
  ],
  [
    `Fountain Pens`,
    `https://theblackwallsttimes.com/2022/08/26/william-purvis-invented-the-ink-pens-we-use-to-this-day/`,
    `William B. Purvis`,
  ],
  [
    `Insect Destroying Guns`,
    `https://patents.google.com/patent/US620362A/en`,
    `Albert C. Richardson`,
  ],
  [
    `Urinalysis Machine`,
    `https://patents.google.com/patent/US3522011A/en`,
    `Dewey Sanderson`,
  ],
  [
    `Door Stops`,
    `https://patents.google.com/patent/US210764A/en`,
    `Osbourn Dorsey`,
  ],
  [
    `the Photo Embossing Machine`,
    `https://www.thoughtco.com/clatonia-joaquin-dorticus-4072013`,
    `Clatonia Joaquin Dorticus`,
  ],
  [
    `Guitars`,
    `https://www.nepris.com/app/industry-chats/101088`,
    `Robert Flemming Jr.`,
  ],
  [
    `Thermo Hair Curlers`,
    `https://patents.google.com/patent/US2648757A/en`,
    `Solomon Harper`,
  ],
  [`Motors`, `https://patents.google.com/patent/US361937A/en`, `James Gregory`],
  [
    `Lanterns`,
    `https://patents.google.com/patent/US303844A/en`,
    `Michael Harney`,
  ],
  [
    `Potato Chips`,
    `https://brooksidemuseum.org/2013/10/george-crum-and-the-potato-chip/`,
    `George Crum`,
  ],
  [
    `Curtain Rods`,
    `https://patents.google.com/patent/US481720A/en`,
    `Samuel Raymond Scottron`,
  ],
  [
    `Automated Sugar Refining`,
    `https://www.invent.org/inductees/norbert-rillieux`,
    `Norbert Rillieux`,
  ],
  [
    `Automatic Elevator Doors`,
    `https://theblackwallsttimes.com/2022/02/07/you-can-thank-black-inventor-alexander-miles-for-making-elevators-safe/`,
    `Alexander Miles`,
  ],
  [
    `Carbon Dioxide Laser Fuels`,
    `https://apps.dtic.mil/sti/citations/ADD002258`,
    `Maurice W. Lee`,
  ],
  [
    `Laser Fuel`,
    `https://patents.justia.com/patent/4011116`,
    `Lester Lee`,
  ],
  [
    `Gamma Electric Cells`,
    `https://www.purdue.edu/mep/Who-We-Are/History-Makers/Henry.html`,
    `Henry Sampson`,
  ],
  [
    `Gas Burner`,
    `https://patents.google.com/patent/US993687A/en`,
    `Benjamin F. Jackson`,
  ],
];

function generateRandomCardIndex(max) {
  console.log(`function: : generateRandomCardIndex`);
  return Math.floor(Math.random() * max);
}

// added parameters to make function reusable - moved out of stageGame so it could be used in isolateCardIndex function
function createCardIndexArr(length, max) {
  console.log(`function: : createCardIndexArr`);
  let cardIndexArr = [];
  for (let i = 0; i < 9999; i++) {
    let randomCardIndex = generateRandomCardIndex(max);
    if (cardIndexArr.length == length) {
      return cardIndexArr;
    }
    if (cardIndexArr.includes(randomCardIndex) === false) {
      cardIndexArr.push(randomCardIndex);
    }
  }
  return cardIndexArr;
}

function stageGame() {
  console.log(`function: : stageGame`);
  class CardSet {
    constructor(
      invention,
      // moreinfo link will only be incorporated into the game time permitting
      moreInfoLink,
      rightAnswer,
      wrongAnswer1,
      wrongAnswer2,
      wrongAnswer3
    ) {
      this.invention = invention;
      this.moreInfoLink = moreInfoLink;
      this.rightAnswer = rightAnswer;
      this.wrongAnswer1 = wrongAnswer1;
      this.wrongAnswer2 = wrongAnswer2;
      this.wrongAnswer3 = wrongAnswer3;
    }
  }
  let indexArr = createCardIndexArr(30, 54);
  /* // validate card index array is functional
  console.log(indexArr); */
  let stagingGameSet = [(roundTracker = { turn:0, round: 1, winner: undefined })];
  
  // function to filter answers array to ensure no duplicate values in cardset
  function filterAnswers(originalArray, element) {
    console.log(`function: : filterAnswers`);
    filteredArray = originalArray.filter((answer) => answer !== element);
    return filteredArray;
  }
  // function to assign the 30 card set for the current game
  function createCardSet() {
    console.log(`function: : createCardSet`);
    for (let i = 0; i < indexArr.length; i++) {
      const index = indexArr[i];
      const currEl = answers[index];
      let wrongAnswersArr = filterAnswers(answers, answers[indexArr[i]]);
      let newCardSet = new CardSet(
        currEl[0],
        currEl[1],
        currEl[2],
        wrongAnswersArr[0][2],
        wrongAnswersArr[1][2],
        wrongAnswersArr[2][2]
      );
      stagingGameSet.unshift(newCardSet);
    }
  }
  createCardSet();
  return stagingGameSet;
}

function beginGame() {
  console.log(`function: : beginGame`);
  question.classList.remove(`displayNone`);
  resetGameButton.classList.remove(`displayNone`);
  popUpInner.classList.replace(`preGamePopupInner`,`midGamePopupInner`);
  gameRules.remove();
  beginSet();
}

function popupUpdate(message,button){
  console.log(`function: : popupUpdate(message,button)`);
  popupStatement.innerText=message;
  button.classList.remove('displayNone');
  popUp.classList.remove('displayNone');
}

function clearPopup(){
  console.log(`function: : clearPopupButtons`);
  buttons.forEach((el)=>{
    if(el.attributes.id.nodeValue!=`resetGame`){
      el.classList.add(`displayNone`);
      popUp.classList.add(`displayNone`);
    }
  })
};

let gameSet = stageGame();
let gameRound = gameSet[gameSet.length-1][`round`];
currentRound.innerText = gameRound;

let roundSet = createRoundSet();
let turn = gameSet[gameSet.length-1][`turn`];

// function to start game round
function beginSet() {
  console.log(`function: : beginSet`);
  console.log("newRound length"+roundSet.length);
  checkCardClicks(roundSet);
  endOrContinueRound(roundSet);
}
function newRound(){
  turn = gameSet[gameSet.length-1][`turn`]
  console.log(`function: : newRound`);
  // let roundWinner = determinePlayer();
  // msg = `${roundWinner.playerName} won this round.`
  // popupUpdate(msg,nextRoundButton)
  gameRound += 1;
  currentRound.innerText = gameRound;
  beginSet();
}

function resetRoundScores(){
  console.log(`function: : resetRoundScores`);
  console.log(gameSet)
  player1.roundScore = 0;
  player2.roundScore = 0;
  playerRoundScores.forEach((el)=>{
    el.innerText = 0;
  })
}

function resetAnswerCards(){
  console.log(`function: : resetAnswerCards`);
  console.log(answerCards);
  console.log(turn)
  if(turn>0){
    answerCards.forEach((answerCard)=>{
      if(answerCard.classList.contains(`correct`)){
        answerCard.classList.remove(`greenShadow`);
        answerCard.classList.remove(`correct`);
        console.log(`green shadow removed`);
      }else if(answerCard.classList.contains(`redShadow`)){
        answerCard.classList.remove(`redShadow`);
        console.log(`red shadow removed`);
      }
    })
  }
}

function createRoundSet() {
  console.log(`function: : createRoundSet`);
  return [isolateCardSet(), isolateCardSet(), isolateCardSet()];
}

function isolateCardSet() {
  console.log(`function: : isolateCardSet`);
  if(gameSet.length>0){
    let cardSet = gameSet.shift();
    console.log(gameSet)
    return cardSet;
  }else{
    endGame();
  }
}

function populateSetData(set) {
  console.log(`function: : populateSetData(roundSet)`);
  clearPopup();
  resetAnswerCards();
  let cardIndex = createCardIndexArr(4, 4);
  console.log(cardIndex)
  set.lenght>0?console.log(set[0][`rightAnswer`]):null
  invention.innerText=set[0][`invention`];
  answerCards[cardIndex[0]].innerText=set[0][`rightAnswer`];
  answerCards[cardIndex[0]].classList.add(`correct`);
  answerCards[cardIndex[1]].innerText=set[0][`wrongAnswer1`];
  answerCards[cardIndex[2]].innerText=set[0][`wrongAnswer2`];
  answerCards[cardIndex[3]].innerText=set[0][`wrongAnswer3`];
}

function checkCardClicks(set){
  console.log(`function: : checkCardClicks(roundSet)`);
  answerCards.forEach((el)=>{
    el.addEventListener(`click`, ()=>{
      // turn is used to identify the active player
      turn+=1;
      if (el.classList.contains(`correct`)){
        addGreenShadow(el);
        updatePlayerScore(set);
      }else{
        addRedShadow(el);
      }
    })
  })
}

function addGreenShadow(element){
  console.log(`function: : addGreenShadow`);
  element.classList.add(`greenShadow`);
}

function addRedShadow(element){
  console.log(`function: : addRedShadow`);
  element.classList.add(`redShadow`);
}

function determinePlayer(){
  console.log(`function: : determinePlayer`);
  if(turn%2===0){
    console.log(`turn: : :${turn}`)
    return player2
  }else{
    console.log(`turn: : :${turn}`)
    return player1
  }
}

function updatePlayerScore(set){
  console.log(`function: : updatePlayerScore(roundSet)`);
  let roundWinner = determinePlayer();
  msg = `${roundWinner.playerName} won this set.`
  popupUpdate(msg,nextSetButton);
  roundWinner.roundScore+=1;
  roundWinner.winningSets.push(set.shift());
  gameSet.shift();
  if(roundWinner==player2){
    player2RoundScore.innerText = player2.roundScore;
  }else{
    player1RoundScore.innerText = player1.roundScore;
  }
}

function endOrContinueRound(set) {
  console.log(`function: : endOrContinueRound(roundSet)`);
  if(gameRound%3==0 && gameRound>0){
    let roundWinner = determinePlayer();
    msg = `${roundWinner.playerName} won round ${gameRound}.`
    roundWinner.score+=1
    popupUpdate(msg,nextRoundButton);
    gameRound+=1;
    resetRoundScores();
  }else{
    populateSetData(set);
    console.log("function: : populateSetData");
  }
}

// this function will be where moreInfoLink is added - time permitting
// function appendMoreInforLink(element){
//   console.log(element)
//   let moreInfoSpan = document.createElement(`span`);
//   moreInfoSpan.innerText = 'Click the following link to ';
//   let moreInfoAnchor = document.createElement(`a`);
//   moreInfoAnchor.setAttribute('href',element.moreInfoLink);
//   moreInfoAnchor.innerText = 'learn more.';
//   element.insertAdjacentElement("beforeend", moreInfoSpan);
//   moreInfoAnchor.insertAdjacentElement("beforeend", moreInfoSpan);
// }

function endGame() {
  console.log(`function: : endGame`);
  if(player1.score > player2.score) {
    let winner=player1.playerName
    let loser = player2.playerName
  }else{
    let winner=player2.playerName
    let loser=player1.playerName
  }
  popupStatement.innerText=`${winner} is the victor! Better luck next time ${loser}.`;
  // will change this to update cardset once that function has been created
}

startGameButton.addEventListener('click', beginGame);
nextSetButton.addEventListener('click', beginSet);
nextRoundButton.addEventListener('click', newRound);
resetGameButton.addEventListener('click', window.location.reload.bind(window.location));