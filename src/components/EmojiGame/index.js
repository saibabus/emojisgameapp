/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {isGamerunning: true, clickedimagesList: [], topscore: 0}

  shuffledtheListitemineachclick = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clikresetandplay = () => {
    this.setState({clickedimagesList: [], isGamerunning: true})
  }

  finihedthegameAndtopscore = currentscore => {
    const {topscore} = this.state
    let newtopscore = topscore
    if (currentscore > topscore) {
      newtopscore = currentscore
    }
    this.setState({topscore: newtopscore, isGamerunning: false})
  }

  clickemoji = id => {
    const {emojisList} = this.props
    const {clickedimagesList} = this.state
    const isEmojipresent = clickedimagesList.includes(id)
    const clickedemojilength = clickedimagesList.length
    if (isEmojipresent) {
      this.finihedthegameAndtopscore(clickedemojilength)
    } else {
      if (emojisList.length - 1 === clickedimagesList.length) {
        this.finihedthegameAndtopscore(emojisList.length)
      }
      this.setState(prevstate => ({
        clickedimagesList: [...prevstate.clickedimagesList, id],
      }))
    }
  }

  renderingEmojiesList = () => {
    const shuffledEmojisList = this.shuffledtheListitemineachclick()
    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachemoji => (
          <EmojiCard
            eachemoji={eachemoji}
            key={eachemoji.id}
            clickemoji={this.clickemoji}
          />
        ))}
      </ul>
    )
  }

  renderingscoreCard = () => {
    const {emojisList} = this.props
    const {clickedimagesList} = this.state
    const isWin = emojisList.length === clickedimagesList.length
    return (
      <WinOrLoseCard
        isWin={isWin}
        score={clickedimagesList.length}
        clikresetandplay={this.clikresetandplay}
      />
    )
  }

  render() {
    const {isGamerunning, clickedimagesList, topscore} = this.state
    return (
      <div className="app-container">
        <NavBar
          isGamerunning={isGamerunning}
          clickedimagesList={clickedimagesList}
          topscore={topscore}
        />
        <div className="emojigame-body">
          {isGamerunning
            ? this.renderingEmojiesList()
            : this.renderingscoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
