// class player
class Player {
  constructor(plaryName) {
    this.plaryName = plaryName;
    this.score = 0;
  }
}
/* // event listener for change name buttons

// function to get playerName

// function to assignPlayerName
    // takes user input
    // changes innerText of specified player's playerName

// call function to assign player1Name

// call function to assign player2Name

// player1Score

// player2score */
let player1Score = document.querySelector(`#player1Score`);
let player2score = document.querySelector(`#player2Score`);

console.log(`player1Score.innerText: ${player1Score.innerText}`);
console.log(`player2score.innerText: ${player2score.innerText}`);

// identify active player

// all answers array - with all possible answers
let answers = [
  `Sarah Goode;Folding Cabinet Beds;https://www.blackpast.org/african-american-history/goode-sarah-e-c-1855-1905/#:~:text=On%20July%2014%2C%201885%2C%20Sarah,where%20surface%20area%20was%20limited.`,
  `Charles Richard Drew;Blood Banks;https://www.acs.org/education/whatischemistry/african-americans-in-sciences/charles-richard-drew.html`,
  `Mary Van Brittan Brown;Home Security Systems;https://lemelson.mit.edu/resources/marie-van-brittan-brown`,
  `Garrett Augustus Morgan;Traffic Lights & Gas Masks;https://www.pbs.org/wgbh/theymadeamerica/whomade/morgan_hi.html`,
  `Frederick McKinley Jones;Mobile Refrigeration;https://www.invent.org/inductees/frederick-mckinley-jones`,
  `Lonnie Johnson;Super Soakers;https://invention.si.edu/meet-lonnie-johnson-man-behind-super-soaker`,
  `Mary Beatrice Davidson Kenner;Sanitary Belts & Tissue Holders;https://www.vice.com/en/article/mb5yap/mary-beatrice-davidson-kenner-sanitary-belt`,
  `George Washington Carver;Jessup Wagons;https://www.history.com/topics/black-history/george-washington-carver`,
  `Dr. Patricia Bath;the Laserphaco Probe;https://www.acs.org/education/whatischemistry/african-americans-in-sciences/patricia-bath.html`,
  `Richard Bowie Spikes;Turn Signals;https://www.blackpast.org/african-american-history/spikes-richard-1878-1965/`,
  `George T. Sampson;Automatic Clothes Dryers;https://samepassage.org/george-t-sampson/#:~:text=Sampson%20was%20an%20African%2DAmerican,that%20it%20dried%20more%20quickly`,
  `Lloyd P. Ray;Dust Pans;https://www.thoughtco.com/lloyd-ray-dust-pans-4071178`,
  `Dr. George Grant;Golf Tees;https://www.pga.com/archive/how-dr-george-f-grant-went-african-american-dentist-golf-tee-inventor`,
  `Alfred L. Cralle;Ice Cream Scoops;https://jaxexaminer.com/alfred-l-cralle-invented-the-ice-cream-scoop/`,
  `John Albert Burr;the Rotary Blade Lawn Mower;https://www.thoughtco.com/green-lawns-john-albert-burr-4072195#:~:text=On%20May%209%2C%201899%2C%20John,plugged%20up%20from%20lawn%20clippings`,
  `Joseph H. Smith;Lawn Sprinklers;https://patents.justia.com/inventor/john-h-smith`,
  `Dr. Thomas Elkins;the Predecessor to the Modern Toilet;https://www.myblackhistory.net/Thomas_Elkins.htm`,
  `Thomas W. Stewart;Wringing Mops;https://www.thoughtco.com/thomas-stewart-the-mop-4077038`,
  `William Richardson;Reversible Baby Carriages;https://www.thoughtco.com/history-of-baby-carriages-4075936`,
  `James A. Bauer;the Coin Changer;https://patents.google.com/patent/US3490571A/en`,
  `Andrew J. Beard;Rotary Engines;https://www.invent.org/inductees/andrew-j-beard`,
  `Alfred Benjamin;Stainless Steel Scouring Pads;https://patents.google.com/patent/US3039125A/en`,
  `Henrietta Mahim Bradberry;Torpedo Discharge Devices;https://patents.google.com/patent/US2390688A/en`,
  `Phil Brooks;Disposable Syringes;https://patents.google.com/patent/US3802434A/en`,
  `Henry Blair;Corn Planters;https://theblackwallsttimes.com/2022/10/07/the-inventions-of-henry-blair-laid-ground-to-modern-agriculture/`,
  `Charles B. Brooks;Street Sweepers;https://www.thoughtco.com/charles-brooks-inventor-4077401`,
  `Lincoln Fremont Brown;Horse Bridle-Bits;https://patents.google.com/patent/US484994A/en`,
  `Oscar E. Brown;Horseshoes;https://patents.google.com/patent/US481271A/en`,
  `Richard A. Butler;Train Alarms;https://patents.google.com/patent/US584540A/en`,
  `George Cook;Automatic Fishing Reels;https://patents.google.com/patent/US657518A/en`,
  `Frederick W. Leslie;Envelope Seals;https://patents.google.com/patent/US590325A/en`,
  `John L. Love;Portable Pencil Sharpeners;https://www.thoughtco.com/john-lee-love-profile-1992097`,
  `Thomas J. Marshal;Fire Extinguishers;https://nsucurrent.nova.edu/2015/02/25/black-inventors/`,
  `Hugh D. MacDonald;Rocket Catapults;https://patents.google.com/patent/US3735948A/en`,
  `Lyda Newman;Synthetic Bristle Hairbrushes;https://lemelson.mit.edu/resources/lyda-newman`,
  `Alice H. Parker;Gas Heating Furnaces;https://thedig.howard.edu/all-stories/brought-you-howard-alice-h-parkers-historic-patent-gas-heater-warms-world#:~:text=thank%20a%20Bison.-,Alice%20H.,Avenue%20before%20impacting%20the%20world.`,
  `John F. Pickering;Blimps;https://patents.google.com/patent/US643975A/en`,
  `William B. Purvis;Fountain Pens;https://theblackwallsttimes.com/2022/08/26/william-purvis-invented-the-ink-pens-we-use-to-this-day/`,
  `Albert C. Richardson;Insect Destroying Guns;https://patents.google.com/patent/US620362A/en`,
  `Dewey Sanderson;Urinalysis Machine;https://patents.google.com/patent/US3522011A/en`,
  `Osbourn Dorsey;Door Stops;https://patents.google.com/patent/US210764A/en`,
  `Clatonia Joaquin Dorticus;the Photo Embossing Machine;https://www.thoughtco.com/clatonia-joaquin-dorticus-4072013`,
  `Robert Flemming Jr.;Guitars;https://www.nepris.com/app/industry-chats/101088`,
  `Solomon Harper;Thermo Hair Curlers;https://patents.google.com/patent/US2648757A/en`,
  `James Gregory;Motors;https://patents.google.com/patent/US361937A/en`,
  `Michael Harney;Lanterns;https://patents.google.com/patent/US303844A/en`,
  `George Crum;Potato Chips;https://brooksidemuseum.org/2013/10/george-crum-and-the-potato-chip/`,
  `Samuel Raymond Scottron;Curtain Rods;https://patents.google.com/patent/US481720A/en`,
  `Norbert Rillieux;Automated Sugar Refining;https://www.invent.org/inductees/norbert-rillieux`,
  `Alexander Miles;Automatic Elevator Doors;https://theblackwallsttimes.com/2022/02/07/you-can-thank-black-inventor-alexander-miles-for-making-elevators-safe/`,
  `Maurice W. Lee;Carbon Dioxide Laser Fuels;https://apps.dtic.mil/sti/citations/ADD002258`,
  `Lester Lee;Laser Fuel;https://patents.justia.com/patent/4011116`,
  `Henry Sampson;Gamma Electric Cells;https://www.purdue.edu/mep/Who-We-Are/History-Makers/Henry.html`,
  `Benjamin F. Jackson;Gas Burner;https://patents.google.com/patent/US993687A/en`,
];

console.log(answers.length);
// class cardset
// card.invention
// card.rightAnswer
// card.moreInfoLink
// card.answerIndex
// card.wrongAnswer1 - empty initially
// card.wrongAnswer2 - empty initially
// card.wrongAnswer3 - empty initially

class CardSet {
  constructor(
    rightAnswer,
    invention,
    moreInfoLink,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3
  ) {
    this.rightAnswer = rightAnswer;
    this.invention = invention;
    this.moreInfoLink = moreInfoLink;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
  }
}

// function to loop through the answers array and create 30 cardsets for the current game
// return an array of cardsets

//function to generate an index number between 0 and 53 at random
function generateRandomCardIndex(max) {
  return Math.floor(Math.random() * max);
}

// function to split the answers strings into arrays
function getGameAnswers() {
  let splitAnswers = [];
  for (const el of answers) {
    let elArr = el.split(`;`);
    splitAnswers.push(elArr);
  }
  return splitAnswers;
}
// function to randomly identify the 30 card set for the current game
  // added parameters to make funtion reusable for also creating a random index for the wrong answers
function createCardIndexArr(length,max) {
  let cardIndexArr = [];
  cardIndexGenerationLoop: for (let i = 0; i < 999; i++) {
    let randomCardIndex = generateRandomCardIndex(max);
    if (cardIndexArr.includes(randomCardIndex) === false) {
      cardIndexArr.push(randomCardIndex);
    }
    if (cardIndexArr.length >= length) {
      break cardIndexGenerationLoop;
    }
  }
  return cardIndexArr;
}

/* // validate card index array is functional
console.log(createCardIndexArr()); */

// function to assign the 30 card set for the current game
function createCardSet() {
  let splitAnswersArr = getGameAnswers();
  let indexArr = createCardIndexArr(30,54);
  let wrongAnswersIndexArr = createCardIndexArr(29,3);
  let gameSet = [];
  for (let i = 0; i < indexArr.length; i++) {
    let currEl = splitAnswersArr[`${indexArr[i]}`];
    let wrongAnswersArr = splitAnswersArr.filter(
      (splitAnswer) => splitAnswer !== currEl
    );
    // need to add the wrong answers to each cardset (using wrongAnswersIndexArr) as well - I think I will split this into multiple functions - this one is becoming too complicated, must simplify it.
    let newCardSet = new CardSet(currEl[0], currEl[1], currEl[2]/* ,,, */);
    gameSet.push(newCardSet);
  }
  return gameSet;
}

let currentGameSet = createCardSet();
console.log(currentGameSet);
// function to start game round

// array to store all remaing card objects for this game

// function to loop through all possible answers and assign them to card.wrongAnswers
// ensure none of the selected answers is the same as the right answer.
// ensure none of the selected answers is the same as the other wrong answers.

// each round will consists of 3 cardsets
