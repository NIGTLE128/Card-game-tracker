let player1Health = 20;
let player2Health = 20;
let moveHistory = [];

// List of cards and their effects
const cards = [
    { name: "Attack", effect: { player: 2, change: -3 } },
    { name: "Heal", effect: { player: 1, change: +2 } },
    { name: "Fireball", effect: { player: 2, change: -5 } },
    { name: "Shield", effect: { player: 1, change: +3 } }
];

// Function to display cards
function displayCards() {
    const cardContainer = document.getElementById("cardContainer");
    cards.forEach((card, index) => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.textContent = card.name;
        cardElement.onclick = () => applyCardEffect(index);
        cardContainer.appendChild(cardElement);
    });
}

// Function to apply card effects
function applyCardEffect(cardIndex) {
    let card = cards[cardIndex];
    moveHistory.push({ player1Health, player2Health });

    if (card.effect.player === 1) {
        player1Health += card.effect.change;
    } else if (card.effect.player === 2) {
        player2Health += card.effect.change;
    }

    updateHealthDisplay();
}

// Function to update health display
function updateHealthDisplay() {
    document.getElementById("player1Health").textContent = player1Health;
    document.getElementById("player2Health").textContent = player2Health;
}

// Function to reset the game
function resetGame() {
    player1Health = 20;
    player2Health = 20;
    moveHistory = [];
    updateHealthDisplay();
}

// Function to undo the last move
function undoLastMove() {
    if (moveHistory.length > 0) {
        let lastState = moveHistory.pop();
        player1Health = lastState.player1Health;
        player2Health = lastState.player2Health;
        updateHealthDisplay();
    }
}

// Initialize the game
displayCards();
updateHealthDisplay();