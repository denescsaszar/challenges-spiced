console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

/*
This JavaScript code defines a function named calculateScrollPercentage() that calculates the current scroll percentage of the webpage in the browser window.

Here's how the function works:

    window.scrollY gets the current vertical position of the scrollbar in pixels.
    document.body.clientHeight gets the total height of the webpage content in pixels.
    window.innerHeight gets the height of the visible portion of the browser window in pixels.
    (document.body.clientHeight - window.innerHeight) calculates the total height of the webpage content that is not visible in pixels.
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) calculates the percentage of the webpage that has been scrolled based on the current vertical scrollbar position.
    * 100 multiplies the above result by 100 to get the percentage value.
    The final result is returned by the function.

So, in summary, the calculateScrollPercentage() function returns the percentage of the webpage that has been scrolled vertically in the browser window.
const progressBar = document.querySelector('[data-js="progress-bar"]');
*/

function calculateScrollPercentage() {
  return (
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
  );
}

function canculatescrollPercentage() {
const yPosition = window.scrollY;
const viewportHeight = document.body.clientHeight;
const document.body.clientHeight = window.innerHeight;
const scrollableHeight = document.body.clientHeight - window.innerHeight;
const percentage = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
return percentage;
}

/*
This JavaScript code adds a "scroll" event listener to the document object, which means that the function inside the arrow function () => { ... } will be executed every time the user scrolls the webpage.

Here's what the function inside the arrow function does:

    calculateScrollPercentage() calls the previously defined calculateScrollPercentage() function and returns the current scroll percentage of the webpage as a string, like "50%".
    ${calculateScrollPercentage()}% wraps the scroll percentage value returned from the calculateScrollPercentage() function inside a template string with a "%" character appended to it, resulting in a string like "50%".
    progressBar.style.width sets the "width" CSS property of an HTML element with the progressBar identifier to the scroll percentage value, which effectively updates the progress bar to reflect the current scroll position of the webpage.

So, in summary, the code updates a progress bar's width whenever the user scrolls the webpage. The progress bar's width is calculated using the previously defined calculateScrollPercentage() function, and the style.width property is set to the scroll percentage value.
*/

document.addEventListener("scroll", () => {
  progressBar.style.width = `${calculateScrollPercentage()}%`;
});

// document.addEventListener("scroll", () => {
//   console.log("scrolling");
//   const percantage = calculateScrollPercentage();
//   console.log(percentage);
//   progressBar.style.width = percentage;
// });
