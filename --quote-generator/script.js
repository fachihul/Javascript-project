let apiQuotes = [];
let newQuote = document.getElementById("quote");
let authorName = document.getElementById("author");
let newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");

newQuoteBtn.addEventListener("click", function () {
    randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    newQuote.textContent = randomQuote.text;
    if (!randomQuote.author) {
        authorName.textContent = "Unknown";
    } else {
        authorName.textContent = randomQuote.author;
    }
    // Check quote length and style it
    if (randomQuote.text.length > 120) {
        newQuote.classList.add("long-quote");
    } else {
        newQuote.classList.remove("long-quote");
    }

    // getQuote();
});

// Get Quote from API
async function getQuote() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
    } catch (error) {
        // Catch error
    }
}

// tweet Quote
function tweetQuote() {
    const twitterUrl = `https://x.com/intent/tweet?text=${newQuote.textContent} - ${authorName.textContent}`;
    window.open(twitterUrl, "-blank");
}
// Event Listener
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuote();
