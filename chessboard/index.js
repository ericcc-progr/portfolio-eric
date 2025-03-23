function generateChessboard() {
    const boardSize = parseInt(document.getElementById('boardSize').value);
    const canvas = document.getElementById('chessBoard');
    const ctx = canvas.getContext('2d');

    if (boardSize < 2 || boardSize > 1000) {
        alert('Niet zoooo!!!! min 2 max 1000')
        return;
    }

    const cellSize = canvas.width / boardSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const x = col * cellSize;
            const y = row * cellSize;
            if ((row + col) % 2 === 0) {
                ctx.fillStyle = 'white';
            } else {
                ctx.fillStyle = 'black';
            }
            ctx.fillRect(x, y, cellSize, cellSize);
        }
    }
}