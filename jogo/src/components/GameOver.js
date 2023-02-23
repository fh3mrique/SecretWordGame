import './GameOver.css';

function GameOver({retryGame, score}) {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>Pontuação : <span>{score}</span></h2>
        <button onClick={retryGame}>Resetar jogo</button>
    </div>
  )
}

export default GameOver