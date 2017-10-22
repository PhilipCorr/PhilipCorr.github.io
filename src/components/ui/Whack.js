import MainMenu from './MainMenu'

const Home = () =>
<div className="home">
  <h1>Whack-a-mole!</h1>
<h2>Score: <span className="score">0</span></h2>
<button id="start" onClick="startGame()">Start</button>

<div className="game">
  <div className="hole hole1">
    <div className="mole"></div>
  </div>
  <div className="hole hole2">
    <div className="mole"></div>
  </div>
  <div className="hole hole3">
    <div className="mole"></div>
  </div>
  <div className="hole hole4">
    <div className="mole"></div>
  </div>
  <div className="hole hole5">
    <div className="mole"></div>
  </div>
  <div className="hole hole6">
    <div className="mole"></div>
  </div>
</div>
</div>
export default Home