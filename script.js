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

// getQuote();

