// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGamerunning, clickedimagesList, topscore} = props
  return (
    <nav className="navbar-container">
      <div className="logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      {isGamerunning && (
        <div className="nav-scores">
          <p className="score">Score: {clickedimagesList.length}</p>
          <p className="score">Top Score: {topscore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
