import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isThankYouScreenVisible: false,
    }
  }

  handleEmojiClick = () => {
    this.setState({isThankYouScreenVisible: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isThankYouScreenVisible} = this.state
    return (
      <div className="bg-container">
        {!isThankYouScreenVisible ? (
          <div className="container">
            <h1>
              How satisfied are you with our customer support performance ?
            </h1>
            <ul className="container-li">
              {emojis.map(emoji => (
                <li key={emoji.id}>
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    onClick={this.handleEmojiClick}
                  />
                  <p>{emoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="container">
            <img src={loveEmojiUrl} alt="love emoji" className="love" />

            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
