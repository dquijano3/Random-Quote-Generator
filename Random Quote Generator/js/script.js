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
  // {quote: "“”",
  // source: "",
  // citation: "",
  // year: "",
  // tags: ""}
  // 'Quotation Template'
  {quote: "Try not. Do or do not. There is no try.",
   source: "-Yoda, Jedi Master,",
   citation: "Star Wars Episode V: The Empire Strikes Back,",
   year: "", },
   {quote: "Inspiration is a guest that does not willingly visit the lazy.",
   source: "-Tchaikovsky, Russian Composer,",
   citation: "Pyotr Ilyich Tchaikovsky,",
   year: "1840 - 1893", },
  {quote: "Any law which violates the inalienable rights of man is essentially unjust and tyrannical; it is not a law at all.",
   source: "-Maximilien Robespierre,",
   citation: "Declaration des droits de l'homme,",
   year: "Aprilr 24, 1793", },
  {quote: "Not all those who wander are lost.",
   source: "-Bilbo Baggins,",
   citation: "-The Hobbit,",
   year: " ", },
  {quote: "Deeds will not be less valiant because they are unpraised.",
   source: "-Aragorn",
   citation: "The Lord of the Rings",
   year: " ", },
  {quote: "You step into the road, and if you don't keep your feet, there is no knowing where you might be swept off to.",
  source: "-Bilbo Baggins,",
  citation: "The Lord of the Rings",
  year: " ",},
  {quote: "Sometimes we must let go of our pride and do what is requested of us.",
  source: "-Anakin Skywalker,",
  citation: "Star Wars Episode II: Attack of The Clones",
  year: "",},
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  const randomQuote = Math.floor(Math.random() * quotes.length); //just using the length to keep everything adaptable
  return quotes [randomQuote];
};
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/***
 * `printQuote` function
***/
function printQuote() {
  const quoteElement = document.getElementById("quote-box");
  const bodyElement = document.body;
  
  const randomQuote = getRandomQuote();
  const randomColor = generateRandomColor();
  
  quoteElement.innerHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
    <span class="citation">${randomQuote.citation}</span>
    <span class="year">${randomQuote.year}</span></p>
  `;
  
  bodyElement.style.backgroundColor = randomColor;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);