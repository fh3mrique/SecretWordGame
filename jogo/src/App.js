
//CSS
import './App.css';

//React
import {useCallback, useEffect, useState} from "react";

//dados
import {palavraLista} from "./data/palavras";

//Componentes
import TelaInicial from './components/TelaInicial';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages =[
  {id:1, nome: "start"},
  {id:2, nome: "game"},
  {id:3, nome: "end"},
]

function App() {
  const [gameInicio, setGameInicio] = useState(stages[0].nome);
  const [palavras] = useState(palavraLista)

  const [picketPalavra, setPicketPalavra] = useState("");
  const [picketCategoria, setPicketCategoria] = useState("");
  const [letras, setLetras] = useState([]);

  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [chances, setChances] = useState(3);
  const [score, setScore] = useState(0)
  

  const picketPalavraAndCategoria = () =>{
    //pegando uma categoria aleatória
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)];

    console.log(categoria)

    //pegando uma palavra aleatória
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)];
    console.log(palavra)

    return{palavra, categoria};
  }
  
 
  //Iniciar o jogo palavra secreta
 const startGame = () => {

  const {palavra, categoria} = picketPalavraAndCategoria()

  //Criando um array de letras
  let letrasPalavras = palavra.split("")

  letrasPalavras = letrasPalavras.map((valor) => valor.toLowerCase())
  
  console.log(palavra, categoria)
  console.log(letrasPalavras)

  //Preenchendo states
  setPicketPalavra(palavra);
  setLetras(letrasPalavras)
  setPicketCategoria(categoria)
 
  
  setGameInicio(stages[1].nome);
  
 }

 //Processar letra inserida
 const verificarLetra = (letra) => {
    
  const letraNormalizada = letra.toLowerCase();

  //checar se a letra já foi utizada
  if(letrasAdivinhadas.includes(letraNormalizada) || letrasErradas.includes(letraNormalizada)){
    return
  }

  //set a letra adivinhada ou remova um palpite
  if(letras.includes(letraNormalizada)){
    setLetrasAdivinhadas((atualLetrasAdivinhadas) => [
      ...atualLetrasAdivinhadas, 
      letraNormalizada
    ])
  }
  else{
    setLetrasErradas((atualLetrasErradas) => [
      ...atualLetrasErradas, 
      letraNormalizada
    ])
  }
 }

 console.log(letrasAdivinhadas);
 console.log(letrasErradas);

 //Restatar o jogo
 const retryGame = () =>{
  setGameInicio(stages[0].nome);
 }

  return (
    <div className="App">
      {gameInicio === 'start' && <TelaInicial startGame={startGame}/>}
      {gameInicio === 'game' && <Game verificarLetra ={verificarLetra}
       picketPalavra={picketPalavra} 
       picketCategoria={picketCategoria} 
       letras={letras} 
       letrasAdivinhada = {letrasAdivinhadas} 
       letrasErradas={letrasErradas} 
       chances={chances} 
       score={score} />}
      {gameInicio === 'end' && <GameOver retryGame={retryGame}/>}
    </div>
  );
}

export default App;
