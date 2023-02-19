import './GameOver.css';

function GameOver({retryGame}) {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={retryGame}>Resetar jogo</button>
    </div>
  )
}

export default GameOver