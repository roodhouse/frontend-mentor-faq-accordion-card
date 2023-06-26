# Frontend Mentor - FAQ accordion card solution

This is my solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

#### Mobile view

![](/src/images/mb.png)

#### Desktop

![](/src/images/dt.png)

### Links

- Solution URL: [solution URL](https://github.com/roodhouse/frontend-mentor-faq-accordion-card)
- Live Site URL: [live site](https://faq.rugh.us/)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

I am still learning and trying to understand positioning. The app looks good when at views that have specific positioning rules applied. But making the screen larger or smaller from those views does not work as I would want. 

Javascript for this app was good practice. I began to further grasp the importance of declaring a variable before updating it later in the code. In the below code currentAnswerDiv is delcared as null before the icons loop.

```js
let currentAnswerDiv = null;

icons.forEach((icon) => {
  icon.addEventListener('click', (event) => {
    let answerDiv = icon.parentElement.nextSibling;
    let question = icon.previousSibling.parentElement;

    if (currentAnswerDiv === answerDiv) {
      // The same answerDiv is clicked, so close it
      answerDiv.classList.add('hidden');
      question.style.fontWeight = 400;
      icon.style.transform = 'rotate(0deg)';
      currentAnswerDiv = null;
    } else {
      // A different answerDiv is clicked, so close the current one and open this one
      if (currentAnswerDiv !== null) {
        let currentOpen = currentAnswerDiv.parentElement.firstChild
        let currentIcon =currentOpen.firstChild.nextSibling
        currentAnswerDiv.classList.add('hidden');
        currentOpen.style.fontWeight = 400;
        currentIcon.style.transform = 'rotate(0deg)';
      }
      answerDiv.classList.remove('hidden');
      question.style.fontWeight = 700;
      icon.style.transform = 'rotate(180deg)';
      currentAnswerDiv = answerDiv;
    }
  });
});
```

Next a condition is run to check if the click event happened on the same question that is already opened and if it did then reset currentAnswerDiv to null.

```js
if (currentAnswerDiv === answerDiv) {
      // The same answerDiv is clicked, so close it
      answerDiv.classList.add('hidden');
      question.style.fontWeight = 400;
      icon.style.transform = 'rotate(0deg)';
      currentAnswerDiv = null;
    }
```

A second condition is run to see if a different icon than then the one opened has been clicked, and close it if it has. Saying currentAnswerDiv !== null confirms that the currentAnswerDiv is being utilized and therefore an answer is being shown.

```js
 else {
      // A different answerDiv is clicked, so close the current one and open this one
      if (currentAnswerDiv !== null) {
        let currentOpen = currentAnswerDiv.parentElement.firstChild
        let currentIcon =currentOpen.firstChild.nextSibling
        currentAnswerDiv.classList.add('hidden');
        currentOpen.style.fontWeight = 400;
        currentIcon.style.transform = 'rotate(0deg)';
      }
```

Finally, the changes are applied to the question/answer that was clicked.

```js
      answerDiv.classList.remove('hidden');
      question.style.fontWeight = 700;
      icon.style.transform = 'rotate(180deg)';
      currentAnswerDiv = answerDiv;
```

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)
