import { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nexHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nexHistory);
        setCurrentMove(nexHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li style={{ margin: "1px" }} key={move}>
                <button style={{ height: "4rem", width: "8rem", margin: "1px", fontSize: "1rem", backgroundColor: "saddlebrown" }} onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        )
    })
    return (
        <div className="game">
            <div className="game-info">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}