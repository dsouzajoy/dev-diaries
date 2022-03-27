import { Avatar } from '@chakra-ui/react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="content">
      <div className="corner-box name">
        <Avatar name="Arpith S" />
        <div className="">
          <div className="title big">Name</div>
          <div className="sub-title">Job designation</div>
        </div>
      </div>
      <div className="corner-box ">
        <div className="title">Bio</div>
        <div className="sub-title">Bio of the person goes here</div>
      </div>
      <div className="corner-box">
        <div className="title">Skill List</div>
        <div className="skill">abc</div>
        <div className="skill">abc</div>
      </div>
      <div className="corner-box">
        <div className="title">Project List</div>
        <div className="card">
          <div className="title">Project Name</div>
          <div className="sub-title">Description</div>
        </div>
      </div>
    </div>
  )
}

export default Profile