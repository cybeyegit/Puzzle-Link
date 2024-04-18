// script.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    const width = 8;
    const candyColors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange'];
    let squares = [];

    // Create the board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'tile');
            let randomColor = Math.floor(Math.random() * candyColors.length);
            square.style.backgroundColor = candyColors[randomColor];
            grid.appendChild(square);
            squares.push(square);
        }
    }

    createBoard();

    // Function to handle the end of the game
    function endGame() {
        const points = calculateFinalScore();
        const userId = getUserId();
        
        fetch('http://your-supabase-server-url/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'your-supabase-key',
                'Authorization': 'Bearer your-supabase-key'
            },
            body: JSON.stringify({ userId, points })
        })
        .then(response => response.json())
        .then(data => console.log('Session saved:', data))
        .catch(error => console.error('Error:', error));
    }

    function calculateFinalScore() {
        // Placeholder for score calculation logic
        return Math.floor(Math.random() * 1000);  // Example score calculation
    }

    function getUserId() {
        // Placeholder for user ID retrieval
        return 'user123';  // Example user ID
    }
});
