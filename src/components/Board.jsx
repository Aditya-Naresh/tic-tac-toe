import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./Winner";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNextX, setIsNextX] = useState(true);
    const winner = calculateWinner(squares);
    let status = winner ? "Winner : " + winner : "Next Player : " + (isNextX ? "X" : "O")

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = isNextX ? "X" : "O";
        setSquares(nextSquares);
        setIsNextX(!isNextX);
    }
    return (
        <>
            <div className="status"> {status} </div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

            </div>

            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>

            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}