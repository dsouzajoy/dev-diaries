import './FeedCard.css'
import { ReactComponent as ThumbsUpIcon } from '../../assets/icons/thumbs-up.svg'
import { ReactComponent as ThumbsDownIcon } from '../../assets/icons/thumbs-down.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FeedCard = ({ title, description, imgSrc, tags = [], id }) => {
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)

  const handleUpvote = (e) => {
    setIsUpvoted(!isUpvoted)
    setIsDownvoted(false)
  }

  const handleDownvote = (e) => {
    setIsDownvoted(!isDownvoted)
    setIsUpvoted(false)
  }

  return (
    <div className="feed-card">
      <Link className='feed-card__link' to={`/viewproject/${id}`}>
      <img className="feed-card__thumbnail" src={imgSrc} alt='thumbnai'/>
      <div className="feed-card__content">
        <h3 className="feed-card__title">{title}</h3>
        <p className="feed-card__description">{description}</p>
        <div className="feed-card__tag-container">
          {tags.map((tag, index) => (
            <span className='feed-card__tag' key={index}>#{tag}{' '}</span>
          ))}
        </div>
      </div>
      </Link>
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
