// index.js
const fortunes = [
    "The stars are aligned in your favor... or are they?",
    "A thrilling adventure awaits... at the grocery store.",
    "You will soon encounter great wisdom... on a fortune cookie wrapper.",
    "Beware of unexpected... socks.",
    "Success is within reach... if you stand on a chair."
];

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

console.log("Welcome to the Fun Fortune Teller!");
console.log("Ask a question and I shall reveal your fate (maybe).\n");

process.stdout.write("Press Enter to receive your fortune...");

process.stdin.on('data', () => {
    process.stdin.pause(); // Stop listening for further input
    console.log("\nYour Fortune:");
    console.log("🔮 " + getRandomFortune() + " 🔮");
    console.log("\nHave a fantastically… okay… day!");
    process.exit(); // End the program
});