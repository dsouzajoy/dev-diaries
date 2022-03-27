import FeedCard from '../../components/FeedCard'
import './Home.css'

const Home = () => {
  return (
    <div className="content">
      <FeedCard
        title="Image processing using python opencv"
        description="This is a project in which we check if the the image contains certain object just for fun using open cv. and then we flex our Machine Learning skills in front of our colleagues to earn more social credit points."
        imgSrc="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
        tags={['react', 'web', 'not_python']}
        id={'AK239AFVDX'}
      />
    </div>
  )
}

export default Home
