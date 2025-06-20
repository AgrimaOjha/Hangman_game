

const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainButton = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);
const figureParts = document.querySelectorAll(".figure-part");

const words = [
  
  "application", "programming", "interface", "wizard", "element", "prototype",
  "callback", "undefined", "arguments", "settings", "selector", "container",
  "instance", "response", "console", "constructor", "token", "function",
  "return", "length", "type", "node",

 
  "inception", "avatar", "titanic", "jumanji", "gladiator", "interstellar",
  "incredibles", "coco", "frozen", "moana", "zootopia", "up", "tenet",
  "gravity", "blackpanther", "avengers", "endgame", "infinitywar", "thor",
  "ironman", "batman", "joker", "spiderman", "shazam", "deadpool",
  "oppenheimer", "barbie", "dangal", "raazi", "rocky", "lucy", "madmax",
  "nope", "scream", "soul", "encanto",


  "strangerthings", "breakingbad", "friends", "sherlock", "narcos",
  "moneyheist", "dark", "loki", "wandavision", "suits", "lucifer", "vikings",
  "house", "office", "dexter", "hannibal", "gotham", "shadowandbone",


  "wolverine", "blackwidow", "hawkeye", "hulk", "thanos", "antman",
  "superman", "aquaman", "wanda", "vision", "flash", "quicksilver",
  "harrypotter", "dumbledore", "hermione", "snape", "voldemort",
  "katniss", "legolas", "aragorn", "gandalf"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordElement.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
    <span class="letter">
    ${correctLetters.includes(letter) ? letter : ""}
    </span>
    `
      )
      .join("")} 
    `; 
  const innerWord = wordElement.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "🏆 Victory! That was impressive!";
    finalMessageRevealWord.innerText = "";
    popup.style.display = "flex";
    playable = false;
  }
}

function updateWrongLettersElement() {
  wrongLettersElement.innerHTML = `
  ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    index < errors
      ? (part.style.display = "block")
      : (part.style.display = "none");
  });
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "💀 Oops! That’s a full hangman!";
    finalMessageRevealWord.innerText = `...the word was: ${selectedWord}`;
    popup.style.display = "flex";
    playable = false;
  }
}

function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keypress", (e) => {
  if (playable) {
    const letter = e.key.toLowerCase();
    if (letter >= "a" && letter <= "z") {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);
          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);
          updateWrongLettersElement();
        } else {
          showNotification();
        }
      }
    }
  }
});

playAgainButton.addEventListener("click", () => {
  playable = true;
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLettersElement();
  popup.style.display = "none";


  hintText.style.display = "none";
  hintText.textContent = "";
  hintBtn.disabled = false;
});

const hintMap = {

  application: "A software program designed to perform a group of tasks.",
  programming: "The process of writing instructions for computers.",
  interface: "How users interact with a system or software.",
  wizard: "A step-by-step helper in software.",
  element: "A single part of a document or interface.",
  prototype: "An early model of a product or a JavaScript object base.",
  callback: "A function passed into another function.",
  undefined: "A variable declared but not assigned a value.",
  arguments: "Inputs passed into a function.",
  settings: "Options you can configure in an app.",
  selector: "Used in CSS/JavaScript to target elements.",
  container: "A wrapper that holds multiple items.",
  instance: "An object created from a class.",
  response: "The data sent back from a server.",
  console: "Where logs or errors are printed in dev tools.",
  constructor: "A method to initialize objects.",
  token: "Used for identity/authentication in systems.",
  function: "A reusable block of code.",
  return: "Used to give back a value from a function.",
  length: "Returns size of a string or array.",
  type: "Used to check the data kind.",
  node: "A single point in a document tree or linked structure.",


  inception: "A dream within a dream sci-fi film.",
  avatar: "Blue aliens and a planet called Pandora.",
  titanic: "Love story on a doomed ship.",
  jumanji: "A magical game with real-life consequences.",
  gladiator: "A Roman warrior seeking vengeance.",
  interstellar: "Exploring time and space to save humanity.",
  incredibles: "Animated superhero family.",
  coco: "A musical journey to the Land of the Dead.",
  frozen: "Let it go... animated ice queen!",
  moana: "Ocean adventure with a demigod.",
  zootopia: "A bunny cop solves a mystery.",
  up: "Old man, flying house, and talking dog.",
  tenet: "Time runs backwards and forwards.",
  gravity: "Two astronauts stranded in space.",
  blackpanther: "Wakanda forever!",
  avengers: "Earth’s mightiest heroes.",
  endgame: "The final battle against Thanos.",
  infinitywar: "When Thanos snapped...",
  thor: "God of Thunder from Asgard.",
  ironman: "Genius billionaire in a flying suit.",
  batman: "Dark Knight of Gotham.",
  joker: "Why so serious?",
  spiderman: "Friendly neighborhood web-slinger.",
  shazam: "Kid turns into superhero by shouting a word.",
  deadpool: "Merc with a mouth — funny and deadly.",
  oppenheimer: "The father of the atomic bomb.",
  barbie: "She’s everything. He’s just Ken.",
  dangal: "Wrestling daughters of India.",
  raazi: "Indian spy story based on true events.",
  rocky: "Boxer with the eye of the tiger.",
  lucy: "A woman gains mind-bending powers.",
  madmax: "Post-apocalyptic car chases.",
  nope: "Jordan Peele's sci-fi thriller.",
  scream: "Ghostface horror classic.",
  soul: "Jazz, dreams, and finding your spark.",
  encanto: "Magical family, but one girl has no gift... or does she?",

  
  strangerthings: "Upside Down and 80s nostalgia.",
  breakingbad: "Chem teacher turns meth king.",
  friends: "I'll be there for you 🎶",
  sherlock: "British detective and his mind palace.",
  narcos: "Drug cartels and Pablo Escobar.",
  moneyheist: "Red jumpsuits, Dali masks, heist!",
  dark: "Time travel mystery in a German town.",
  loki: "God of Mischief jumps timelines.",
  wandavision: "Witch + AI = sitcom world.",
  suits: "Lawyers, drama, and sharp suits.",
  lucifer: "The devil takes a vacation in LA.",
  vikings: "Norse warriors and legendary raids.",
  house: "Brilliant but rude doctor solves cases.",
  office: "Dunder Mifflin’s paper empire.",
  dexter: "Serial killer who kills bad guys.",
  hannibal: "Charming cannibal psychiatrist.",
  gotham: "Batman’s origin city stories.",
  shadowandbone: "Magic, darkness, and fantasy war.",


  wolverine: "Clawed X-Men with healing powers.",
  blackwidow: "Spy turned Avenger with red in her ledger.",
  hawkeye: "Master archer of the Avengers.",
  hulk: "Big green smashing machine.",
  thanos: "Snapped half the universe.",
  antman: "Shrinks and talks to ants.",
  superman: "Man of Steel from Krypton.",
  aquaman: "King of Atlantis.",
  wanda: "Scarlet Witch with chaos magic.",
  vision: "Synthezoid created by Ultron.",
  flash: "Fastest man alive.",
  quicksilver: "Another speedy superhero.",
  harrypotter: "The boy who lived.",
  dumbledore: "Wise headmaster of Hogwarts.",
  hermione: "Brightest witch of her age.",
  snape: "Always...",
  voldemort: "He who must not be named.",
  katniss: "The Girl on Fire from District 12.",
  legolas: "Elven archer of the Fellowship.",
  aragorn: "Heir to the throne of Gondor.",
  gandalf: "You shall not pass!"
};
const hintBtn = document.getElementById("hint-button");
const hintText = document.getElementById("hint-text");


hintBtn.addEventListener("click", () => {
  const hint = hintMap[selectedWord]; 
  if (hint) {
    hintText.textContent = "💡 Hint: " + hint;
    hintText.style.display = "block";
  } else {
    hintText.textContent = "No hint available for this word.";
    hintText.style.display = "block";
  }
});




displayWord();
