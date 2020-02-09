var quotes = [
    "Sometimes later becomes never. Do it now",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction",
    "Do something today that your future self will thank you for",
    "Little things make big days",
    "It’s going to be hard, but hard does not mean impossible",
    "Don’t wait for opportunity. Create it."
]
function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
newQuote();