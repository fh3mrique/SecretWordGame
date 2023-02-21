import "./Game.css";

const Game = ({verificarLetra}) => {
  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="dica">
        Dica sobre a palavra <span>Dica...</span> 
      </h3>
      <div className="palavraContainer">
        <span className="letra">a</span>
        <span className="quadradoBranco"></span>
      </div>
      <div className="letraContainer">
        <p>Tente adivilhar uma letra da palavra</p>
        <form>
          <input type="text" name="letra" maxLength= "1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="letrasUsadasContainer">
        <p>letras já utilizadas</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game