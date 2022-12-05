//Build the array of quote objects to store the quotes.

var quotes = [
  {
    quote:
      " Your real job in life is to figured out what it is you are called to do. ",
    source: " Oprah Winfrey ",
    citation: " ",
    year: " ",
    category: "leadership"
  },
  {
    quote:
      "Life was meant to be lived, and curiosity must be kept alive.One must never, for whatever reason, turn his back on life.",
    source: " Eleanor Roosevelt",
    citation: "",
    year: "",
    category:"humanity"
  },
  {
    quote:
      "It is our choices that show what we truly are, far more than our abilities.",
    source: "J.K Rowling",
    citation: "",
    year: "",
    category:"Motivational"
  },
  {
    quote:
      " If we want greater clarity in our purpose or deeper and more meaningful spritual lives, vulnerability is the path.",
    source: "Brené Brown",
    citation: "",
    year: "",
    category:""
  },
  {
    quote:
      " You have to trust in something-your gut, destiny, life, karma, whatever. This approach has never let me down and it has made all the difference in my life.",
    source: "Steve Jobs",
    citation: "",
    year: "",
    category:""
  },
  {
    quote:
      " Efforts and courage are not enough without purpose and direction. ",
    source: " John F. Kennedy",
    citation: "",
    year: "",
    category:"Motivational"
  },
  {
    quote:
      " I believe purpose is something for which one is responsible; it is not just divinely assigned.",
    source: " Michael J.Fox ",
    citation: "",
    year: "",
    category:""
  },
  {
    quote: "Out of the mountain of despair, a stone of hope.",
    source: " Martin Luther King Jr",
    citation: "",
    year: "",
    category:""
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    source: "Andre Gide",
    citation: "Autumn Leaves ",
    year: "",
    category:""
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",

    source: "Ralph Waldo Emerson",
    citation: " ",
    year: "",
    category:""
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: " ",
    year: "",
    category:""
  }
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  var randomNumber = Math.floor(Math.random() * quotes.length);

  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable
  var randomObject = quotes[randomNumber];

  // 3. Return the variable storing the random quote object

  return randomObject;
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote()
  // function
  var callingRandomQuote = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now
  let html = `<div class ='quote-box'>
   <p class="quote"> ${callingRandomQuote.quote} </p>
   <p class="source">${callingRandomQuote.source}

</div>`;
  // 3. Use an if statement to check if the citation property
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string
  if (callingRandomQuote.citation) {
    html += `<span class="citation"> ${callingRandomQuote.citation} </span>`;
  }
  if (callingRandomQuote.year) {
    html += `<span class="year"> ${callingRandomQuote.year} </span>`;
  }
  
  
  
  
  if (callingRandomQuote.category) {
    html += `<span class="category"> ${callingRandomQuote.category} </span>`;
  }
  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the
  // complete HTML string
  document.getElementById("quote-box").innerHTML = html;
  
}
function getRandomBackgroundColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  document.html.style.backgroundColor = "`rgb(' + r + ', ' + g + ', ' + b +')`";
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, getRandomBackgroundColor, false);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
