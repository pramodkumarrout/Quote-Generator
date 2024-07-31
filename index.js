// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Create a quotes 

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the
    service of others."`,
    person: 'Mahatma Gandhi'
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to 
    people or things."`,
    person: 'Albert Einstein'
}, {
    quote: `"At his best, man is the noblest of all animals; separated
    from law and justice he is the worst."`,
    person: 'Aristotle'
}, {
    quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
    person: 'Steve Jobs'
}, {
    quote: `"The world is a stage, and all the actors have roles to play.
    It's up to you to choose your roles."`,
    person: 'Frank Lloyd Wright'
}, {
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person: 'William Shakespeare'
}, {
    quote: `"The most dangerous phrase in the language is 'I am afraid."`,
    person: 'Ray Bradbury'
}, {
    quote: `"If you can't fly, then run, then walk, then crawl, till you
    find somebody or something to hold you close to."`,
    person: 'Tim Berners-Lee'
}, {
    quote: `"The only way to do great work is to love what you do. 
    If you haven't found it yet, then don't waste your time - go find it!"`,
    person: 'Warren Buffett'
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: 'Charles Dickens'
}, {
    quote: `"Suffering has been stronger than all other teaching, and has taught me the value of courage, resilience, and the indomitable spirit."`,
    person: 'Abraham Lincoln'
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: 'Charles Dickens'
}, {
    quote: `"If you can't inspire others, inspire yourself."`,
    person: 'Edgar Allan Poe'
}, {
    quote: `"The best way to predict the future is to create it."`,
    person: 'Daniel Dennett'
}, {
    quote: `"The greatest discovery of all time is that people are essentially the same everywhere and always will be."`,
    person: 'Albert Einstein'
}, {
    quote: `"The only way to do great work is to love what you do. If you haven't found it yet, then don't waste your time - go find it!"`,
    person: 'Warren Buffett'
}, {
    quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
    person: 'Steve Jobs'
}, {
    quote: `"The world is a stage, and all the actors have roles to play. It's up to you to choose your roles."`,
    person: 'Frank Lloyd Wright'
}, {
    quote: `"If you can't fly, then run, then walk, then crawl, till you
    find somebody or something to hold you close to."`,
    person: 'Tim Berners-Lee'
}, {
    quote: `"The most dangerous phrase in the language is 'I am afraid."`,
    person: 'Ray Bradbury'
}, {
    quote: `"Suffering has been stronger than all other teaching, and has taught me the value of courage, resilience, and the indomitable spirit."`,
    person: 'Abraham Lincoln'
}];

// Function is created 
function btnClick () {

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    quote.person = quotes[random].person;
}
// Click event listener
btn.addEventListener("click", btnClick);