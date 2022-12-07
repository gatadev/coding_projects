// declaring array of object
var quotes = [
  {
    quote:
      " Your real job in life is to figured out what it is you are called to do. ",
    source: " Oprah Winfrey ",
    citation: " ",
    year: 2005,
    category: "leadership"
  },
  {
    quote:
      "Life was meant to be lived, and curiosity must be kept alive.One must never, for whatever reason, turn his back on life.",
    source: " Eleanor Roosevelt",
    citation: "",
    year: "",
    category: "humanity"
  },
  {
    quote:
      "It is our choices that show what we truly are, far more than our abilities.",
    source: "J.K Rowling",
    citation: "",
    year: 1972,
    category: "Motivational"
  },
  {
    quote:
      " If we want greater clarity in our purpose or deeper and more meaningful spritual lives, vulnerability is the path.",
    source: "Brené Brown",
    citation: "",
    year: 1960,
    category: ""
  },
  {
    quote:
      " You have to trust in something-your gut, destiny, life, karma, whatever. This approach has never let me down and it has made all the difference in my life.",
    source: "Steve Jobs",
    citation: "",
    year: "",
    category: ""
  },
  {
    quote:
      " Efforts and courage are not enough without purpose and direction. ",
    source: " John F. Kennedy",
    citation: "",
    year: 1964,
    category: "Motivational"
  },
  {
    quote:
      " I believe purpose is something for which one is responsible; it is not just divinely assigned.",
    source: " Michael J.Fox ",
    citation: "",
    year: "",
    category: ""
  },
  {
    quote: "Out of the mountain of despair, a stone of hope.",
    source: " Martin Luther King Jr",
    citation: "",
    year: "",
    category: " civil movement"
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    source: "Andre Gide",
    citation: "Autumn Leaves ",
    year: "",
    category: "Personality"
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",

    source: "Ralph Waldo Emerson",
    citation: " ",
    year: "",
    category: ""
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: " ",
    year: "",
    category: "leadership"
  }
];

/***
 function to getRandomQuote
 ***/
function getRandomQuote() {
  // creating a variable to store randomNumber between 0 && and length of the array
  var randomNumber = Math.floor(Math.random() * quotes.length);

  // variable to store randomOject at the specific position
  var randomObject = quotes[randomNumber];

  // return object randomly

  return randomObject;
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  //strore block of code above into variable
  var callingRandomQuote = getRandomQuote();
  // initialize the html as variable by randomly accessing the paragraph value
  let html = `<div class ='quote-box'>
   <p class="quote"> ${callingRandomQuote.quote} </p>
   <p class="source">${callingRandomQuote.source}
</div>`;
  // conditional to check if the citation and year exist then display them
  if (callingRandomQuote.citation) {
    html += `<span class="citation"> ${callingRandomQuote.citation} </span>`;
  }
  if (callingRandomQuote.year) {
    html += `<span class="year"> ${callingRandomQuote.year} </span>`;
  }
  //conditional to check if category exist then access it property and value
  if (callingRandomQuote.category) {
    html += `<span class="category"> ${callingRandomQuote.category} </span>`;
  }
  //set the innerHTML to html variable will display the value of the variable
  document.getElementById("quote-box").innerHTML = html;
  //calling getRandomBackgroundColor() display show the target desire for the function
  getRandomBackgroundColor();
  //set interval function calling
  quoteInterval();
}
//function to randomly get a backgrounfColor
function getRandomBackgroundColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
//set interval function
function quoteInterval() {
  printQuote();
}
// take two parameters function, and delay time
const timerId = setInterval(quoteInterval, 100);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
