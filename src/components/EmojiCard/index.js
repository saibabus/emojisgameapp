// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachemoji, clickemoji} = props
  const {id, emojiName, emojiUrl} = eachemoji
  const onclickeachEmoji = () => {
    clickemoji(id)
  }
  return (
    <li className="eachemojicontainer">
      <button type="button" className="emoji-button" onClick={onclickeachEmoji}>
        <img className="eachemoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
