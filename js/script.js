/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
{
  quote: 'It’s the job that’s never started as takes longest to finish.',
  source: 'Samwise Gamgee',
  year: 1954, 
  genre: 'Fantasy'
},
{
  quote: 'This Is Ripley, Last Survivor Of The Nostromo...Signing Off.',
  source: 'Ellen Ripley',
  citation: 'Alien',
  year: 1979,
  genre: 'Science Fiction'
},
{
  quote: '...All those moments will be lost in time, like tears in rain.',
  source: 'Roy Batty',
  citation: 'Bladerunner',
  year: 1982,
  genre: 'Science Fiction'
},
{
  quote: 'Why, you stuck up, half-witted, scruffy-looking…nerf-herder!',
  source: 'Princess Leia Organa',
  citation: 'Star Wars: The Empire Strikes Back',
  year: 1980,
  genre: 'Science Fiction'
},
{
  quote: 'Snakes. Why Did It Have To Be Snakes?',
  source: 'Indiana Jones',
  citation: 'Raiders of the Lost Ark',
  year: 1981,
  genre: 'Action/Adventure'
},
{
  quote: 'If more people valued home above gold, this world would be a merrier place.',
  source: 'Thorin Oakenshield',
  citation: 'The Hobbit Trilogy',
  genre: 'Fantasy'
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
let randomNumber = Math.floor(Math.random() * quotes.length);
return quotes[randomNumber];
}

function randomRGB() {
  return Math.floor(Math.random() * 256);
}



/***
 * `printQuote` function
***/
function printQuote() {
//placing the color within the function so that it will run 
  const red = randomRGB();
  const green = randomRGB();
  const blue = randomRGB();
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  const selectedQuote = getRandomQuote()
  let htmlString = 
    `<p class="quote">${selectedQuote.quote}</p>
      <p class ="source">${selectedQuote.source}`

    //if statements to show 'year' and 'genre'
    if ( "citation" in selectedQuote ) {
      htmlString += `<span class ="citation">${selectedQuote.citation}</span>`
    }
    
    if ( "year" in selectedQuote ){
      htmlString += `<span class ="year">${selectedQuote.year}</span>`
    }

    
    htmlString += `</p><p class ="genre"> ${selectedQuote.genre} </p>`



//adding random background to the style of the body
    document.body.style.backgroundColor = rgbColor;
    document.getElementById('quote-box').innerHTML = htmlString
    
}
//setting the interval for the webpage
setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


