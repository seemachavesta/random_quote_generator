/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array ob objects holding quotes *
***/

const quotes = [
  {
    quote: "A stumbling block to the pessimist is a stepping stone to the optimist.",
    source: "Eleanor Roosevelt",
    citation:"Twitter/@Greatest Quotes",
    year: "2021"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "– William Shakespeare",
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    source: "– Napoleon Hill"
  }, 
  {
    quote: "You must be the change you wish to see in the world.",
    source: "– Mahatma Gandhi"
  },
  {
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up. ",
    source: "– Thomas A. Edison"
  },
  {
    quote: "Every artist was first an amateur.",
    source: "- Ralph Waldo Emerson",
    citation: "Twitter"
  }

]

// function for random Number generator for rgb color ;
function rgbColor(){
  // crating radom number form 0 to 255
  const randomNumber = Math.floor(Math.random() * 256);
  // return random Number
  return randomNumber;
  
}

/***
 * `getRandomQuote` function return random quote object out of array of object.
***/
 
function getRandomQuote(arr){
  // crating random number 0 to length of array;
  const randomNumber = Math.floor(Math.random() * arr.length)
  // return random object out of array of objects;
  return arr[randomNumber];
}


/***
 * `printQuote` function
***/
 function printQuote(){
   const randomQuote = getRandomQuote(quotes);

   let html = `<p class="quote">${randomQuote.quote}</p>
               <p class="source">${randomQuote.source}`
       // if quotes object has key  citation ;       
    if('citation' in randomQuote){
     html += `<span class="citation">${randomQuote.citation}</span></p>`;
   }
   
    // if object quotes includes year as key;
   if('year' in randomQuote){
     html += `<span class="year">${randomQuote.year}</span></p>`
   }

   // displaying random quotes to browser
   document.getElementById('quote-box').innerHTML = html; 

   // background color changing with rgb colors
   document.body.style.backgroundColor = `rgb(${rgbColor()}, ${rgbColor()}, ${rgbColor()})`;
   
 }



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);