import './FeedCard.css'
import { ReactComponent as ThumbsUpIcon } from '../../assets/icons/thumbs-up.svg'
import { ReactComponent as ThumbsDownIcon } from '../../assets/icons/thumbs-down.svg'
import { useState } from 'react'

const FeedCard = ({ title, description, imgSrc, tags = [] }) => {
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)

  const handleUpvote = () => {
    setIsUpvoted(!isUpvoted)
    setIsDownvoted(false)
  }

  const handleDownvote = () => {
    setIsDownvoted(!isDownvoted)
    setIsUpvoted(false)
  }

  return (
    <div className="feed-card">
      <img className="feed-card__thumbnail" src={imgSrc} />
      <div className="feed-card__content">
        <h3 className="feed-card__title">{title}</h3>
        <p className="feed-card__description">{description}</p>
        <div className="feed-card__tag-container">
          {tags.map((tag, index) => (
            <span className='feed-card__tag' key={index}>#{tag}{' '}</span>
          ))}
        </div>
      </div>
      <div className="feed-card__vote-container">
        <ThumbsUpIcon
          className={`feed-card__vote-icon ${
            isUpvoted ? 'font-blue' : 'font-transparent'
          } `}
          onClick={handleUpvote}
        />
        <ThumbsDownIcon
          className={`font-transparent ${
            isDownvoted ? 'font-red' : 'font-transparent'
          }`}
          onClick={handleDownvote}
        />
      </div>
    </div>
  )
}

export default FeedCard
