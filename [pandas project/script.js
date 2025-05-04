const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "kalau dah tahu diri tu bodoh,belajar la bukannya main", author: "Rafiq Zulkafli" },
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").innerText = `"${quote.text}"`;
    document.getElementById("quote-author").innerText = `- ${quote.author}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate-btn").addEventListener("click", generateQuote);
    generateQuote();
});