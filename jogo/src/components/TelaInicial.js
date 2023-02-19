import "./TelaInicial.css";

function TelaInicial({startGame}) {
  return (
    <div className= "telaInicial">
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar jogo</button>
    </div>
  )
}

export default TelaInicial