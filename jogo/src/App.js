
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

  //Iniciar o jogo palavra secreta
 const startGame = () =>{
  setGameInicio(stages[1].nome);
 }

 //Processar letra inserida
 const verificarLetra = () => {
    setGameInicio(stages[2].nome);
 }

 //Restatar o jogo
 const retryGame = () =>{
  setGameInicio(stages[0].nome);
 }

  return (
    <div className="App">
      {gameInicio === 'start' && <TelaInicial startGame={startGame}/>}
      {gameInicio === 'game' && <Game verificarLetra ={verificarLetra}/>}
      {gameInicio === 'end' && <GameOver retryGame={retryGame}/>}
    </div>
  );
}

export default App;
