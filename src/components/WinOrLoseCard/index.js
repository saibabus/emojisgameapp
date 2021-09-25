// Write your code here.

import './index.css'

const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const lossImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWin, score, clikresetandplay} = props
  const imageUrl = isWin ? wonImage : lossImage
  const gamestatus = isWin ? 'You Won' : 'You Lose'
  const scorestatus = isWin ? 'Best Score' : 'Score'

  return (
    <div className="winorlosecontainer">
      <div className="detatilscontainer">
        <h1 className="winorlose-status">{gamestatus}</h1>
        <p className="score-label">{scorestatus}</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="playagain-button"
          onClick={clikresetandplay}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="wonOrLossimage" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
