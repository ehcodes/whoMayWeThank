// class player
class Player {
    constructor(plaryName){
        this.plaryName = plaryName
        this.score = 0;
    }
}

// function to get playerName

// function to assignPlayerName
    // takes user input
    // changes innerText of specified player's playerName

// call function to assign player1Name

// call function to assign player2Name

// player1Score

// player2score

// identify active player

// all answers array - with all possible answers
let answers = [
`Sarah Goode;Folding Cabinet Bed;https://www.blackpast.org/african-american-history/goode-sarah-e-c-1855-1905/#:~:text=On%20July%2014%2C%201885%2C%20Sarah,where%20surface%20area%20was%20limited.`,
`George Crum;Potato Chips;https://brooksidemuseum.org/2013/10/george-crum-and-the-potato-chip/`,
`Charles Richard Drew;Blood Bank;https://www.acs.org/education/whatischemistry/african-americans-in-sciences/charles-richard-drew.html`,
`Mary Van Brittan Brown;Home Security System;https://lemelson.mit.edu/resources/marie-van-brittan-brown`,
`Garrett Augustus Morgan;Traffic Light & Gas Mask;https://www.pbs.org/wgbh/theymadeamerica/whomade/morgan_hi.html`,
`Frederick McKinley Jones;Mobile Refrigeration;https://www.invent.org/inductees/frederick-mckinley-jones`,
`Alexander Miles;Automatic Elevator Doors;https://theblackwallsttimes.com/2022/02/07/you-can-thank-black-inventor-alexander-miles-for-making-elevators-safe/`,
`Lonnie Johnson;Super Soaker;https://invention.si.edu/meet-lonnie-johnson-man-behind-super-soaker`,
`Mary Beatrice Davidson Kenner;Sanitary Belt & Tissue Holder;https://www.vice.com/en/article/mb5yap/mary-beatrice-davidson-kenner-sanitary-belt`,
`George Washington Carver;Jessup wagon;https://www.history.com/topics/black-history/george-washington-carver`,
`Dr. Patricia Bath;Laserphaco Probe;https://www.acs.org/education/whatischemistry/african-americans-in-sciences/patricia-bath.html`,
`Richard Bowie Spikes;Turn Signal;https://www.blackpast.org/african-american-history/spikes-richard-1878-1965/`,
`George T. Sampson;Automatic Clothes Dryer;https://samepassage.org/george-t-sampson/#:~:text=Sampson%20was%20an%20African%2DAmerican,that%20it%20dried%20more%20quickly`,
`Lloyd P. Ray;Dust Pan;https://www.thoughtco.com/lloyd-ray-dust-pans-4071178`,
`Dr. George Grant;Golf Tee;https://www.pga.com/archive/how-dr-george-f-grant-went-african-american-dentist-golf-tee-inventor`,
`Alfred L. Cralle;Ice Cream Scoop;https://jaxexaminer.com/alfred-l-cralle-invented-the-ice-cream-scoop/`,
`John Albert Burr;Rotary Blade Lawn Mower;https://www.thoughtco.com/green-lawns-john-albert-burr-4072195#:~:text=On%20May%209%2C%201899%2C%20John,plugged%20up%20from%20lawn%20clippings`,
`Joseph H. Smith;Lawn Sprinkler;https://patents.justia.com/inventor/john-h-smith`,
`Dr. Thomas Elkins;Predecessor to the Modern Toilet;https://www.myblackhistory.net/Thomas_Elkins.htm`,
`Thomas W. Stewart;Wringing Mop;https://www.thoughtco.com/thomas-stewart-the-mop-4077038`,
`William Richardson;Reversible Baby Carriage;https://www.thoughtco.com/history-of-baby-carriages-4075936`,
`James A. Bauer;Coin Changer;https://patents.google.com/patent/US3490571A/en`,
`Andrew J. Beard;Rotary Engine;https://www.invent.org/inductees/andrew-j-beard`,
`Alfred Benjamin;Stainless Steel Scouring Pad;https://patents.google.com/patent/US3039125A/en`,
`Henrietta Mahim Bradberry;Torpedo Discharge Device;https://patents.google.com/patent/US2390688A/en`,
`Phil Brooks;Disposable Syringe;https://patents.google.com/patent/US3802434A/en`,
`Henry Blair;Corn Planter;https://theblackwallsttimes.com/2022/10/07/the-inventions-of-henry-blair-laid-ground-to-modern-agriculture/`,
`Charles B. Brooks;Street Sweeper;https://www.thoughtco.com/charles-brooks-inventor-4077401`,
`Lincoln Fremont Brown;Horse Bridle-Bit https://patents.google.com/patent/US484994A/en`,
`Oscar E. Brown;Horseshoe;https://patents.google.com/patent/US481271A/en`,
`Richard A. Butler;Train Alarm;https://patents.google.com/patent/US584540A/en`,
`George Cook;Automatic Fishing Reel;https://patents.google.com/patent/US657518A/en`,
`Frederick W. Leslie`,
`Lester Lee`,
`Maurice W. Lee`,
`John L. Love`,
`Tom J. Marshal`,
`Jan Matzeliger`,
`Hugh MacDonald`,
`Lyda Newman`,
`Alice H. Parker`,
`John F. Pickering`,
`William B. Purvis`,
`Albert C. Richardson`,
`Norbert Rillieux`,
`Henry Sampson`,
`Samuel Raymond Scottron`,
`Dewey Sanderson`,
`Osbourn Dorsey`,
`Clatonia J. Dorticus`,
`Robert Flemming Jr.`,
`Solomon Harper`,
`James Gregory`,
`Michael Harney`,
`Benjamin F. Jackson`]

// function to loop through the answers array and create 30 cardsets for the current game
    // return an array of cardsets

// function to start game round

// class cardset
    // card.invention
    // card.rightAnswer
    // card.moreInfoLink
    // card.answerIndex
    // card.wrongAnswer1 - empty initially
    // card.wrongAnswer2 - empty initially
    // card.wrongAnswer3 - empty initially

    class CardSet {
        constructor(invention,rightAnswer,moreInfoLink){
            this.invention = invention
            this.rightAnswer = rightAnswer
            this.moreInfoLink = moreInfoLink
            this.answerIndex = null
            this.wrongAnswer1 = ``
            this.wrongAnswer2 = ``
            this.wrongAnswer3 = ``
        }
    }
    
    // array to store card remaing card objects for this game
    
    
// function to loop through all possible answers and assign them to card.wrongAnswers
    // ensure none of the selected answers is the same as the right answer.
    // ensure none of the selected answers is the same as the other wrong answers.
 
// each round will consists of 3 cardsets
