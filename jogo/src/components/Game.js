import { useState, useRef} from "react";
import "./Game.css";

const Game = ({verificarLetra, picketPalavra,picketCategoria, letras, letrasAdivinhada, letrasErradas, chances, score}) => {
  const [letra, setLetra] = useState()
  const letraInputRef = useRef(null)

  const manipularSubmit=(evento)=>{
    evento.preventDefault();
    
    verificarLetra(letra)
    setLetra("")

    letraInputRef.current.focus() 
  }

  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="dica">
        Dica sobre a palavra <span>{picketCategoria}</span> 
      </h3>
      <p>Você ainda tem {chances} tentativas</p>
      <div className="palavraContainer">
        {letras.map((valor,index) => (
          letrasAdivinhada.includes(valor) ? (<span key={index} className="letra">{valor}</span>) : (<span className="quadradoBranco" key={index}>{}</span>)
        ))}
      </div>
      <div className="letraContainer">
        <p>Tente adivilhar uma letra da palavra</p>
        <form onSubmit={manipularSubmit}>
          <input type="text" name="letra"
           maxLength= "1" 
           required 
           onChange={(evento) => setLetra(evento.target.value)} 
           value={letra} 
           ref={letraInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="letrasUsadasContainer">
        <p>letras já utilizadas</p>
        {letrasErradas.map((valor, index)=>(
          <span key={index}>{valor}</span>
        ))}
      </div>
    </div>
  )
}

export default Game