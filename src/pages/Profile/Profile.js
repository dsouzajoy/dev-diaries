import { Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './Profile.css'


const Profile = () => {
  return (
    <div className="content">
      <div className="corner-box name">
        <Avatar name="Sudhanva Kote" />
        <div className="">
          <div className="title big">Sudhanva Kote</div>
          <div className="sub-title">Full Stack Developer</div>
        </div>
      </div>
      <div className="corner-box ">
        <div className="sub-title">
          "Currently Studying Computer Science And Engineering at Mangalore
          Institute of Technology & Engineering"
        </div>
      </div>
      <div className="corner-box">
        <div className="title">Skill List</div>
        <div className="skill">Data Anlysis</div>
        <div className="skill">Image Processing</div>
        <div className="skill">Blockchain</div>
      </div>
      <div className="corner-box">
        <div className="title">Project List</div>
        <div className="project-list-container">
          <Link className='feed-card__link' to={`/viewproject/${'1456'}`}>
          <div className="card">
            <div className="title">Baxbill</div>
            <div className="sub-title">
              An e-commerce platform buit with React, NodeJS, MongoDB, Redux and
              That payment gateway
            </div>
          </div>
          </Link>
          <div className="card">
            <div className="title">Particle Accelerator Stimulation</div>
            <div className="sub-title">
              Simulation of a particle Accelerator built using openGL and C++
            </div>
          </div>
          <div className="card">
            <div className="title">Pothole detector</div>
            <div className="sub-title">
              Detecting potholes on the road using accelerometer and gyroscope. I know this is a pretty mediocre project
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
