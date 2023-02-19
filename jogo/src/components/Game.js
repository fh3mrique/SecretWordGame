import "./Game.css";

const Game = ({verificarLetra}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verificarLetra}>Finalizar jogo</button>
    </div>
  )
}

export default Game