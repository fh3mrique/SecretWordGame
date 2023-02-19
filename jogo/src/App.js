
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

  console.log(palavras)
  return (
    <div className="App">
      {gameInicio === 'start' && <TelaInicial/>}
      {gameInicio === 'game' && <Game/>}
      {gameInicio === 'end' && <GameOver/>}
    </div>
  );
}

export default App;
