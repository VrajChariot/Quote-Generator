console.log("JS is working");

const url = "https://dummyjson.com/quotes/random";

const button = document.querySelector("#generate-quote");

async function getQuote() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const quote = data.quote;
    const author = data.author;
    const quote_display = document.querySelector(".quote");
    const author_display = document.querySelector(".author");
    quote_display.innerHTML = `" ${quote} "`;
    author_display.innerHTML = `- ${author}`;
}
button.addEventListener("click", getQuote);

function tweetQuote() {
    const quote = document.querySelector(".quote").innerHTML;
    const author = document.querySelector(".author").innerHTML;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} ${author}`;
    window.open(tweetUrl, "Tweet Window", "width=600, height=400");
}

const tweetButton = document.querySelector("#share-quote");
tweetButton.addEventListener("click", tweetQuote);

