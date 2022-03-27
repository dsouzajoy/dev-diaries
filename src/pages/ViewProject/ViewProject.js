import './ViewProject.css'

const ViewProject = () => {
  return (
    <div className="  content">
      <div className=" title">Baxbill</div>
      <div className=" sub-title">An e-commerce platform buit with React, NodeJS, MongoDB, Redux and
              That payment gateway</div>
      <div className="box">Created by: Sudhanva Kote</div>
      <div className="box"><a href="http://www.github.com">Link to Project</a></div>
      <div className="box">PreRequsite: Knowladge on React </div>
      <div className="box">Technologies Used : ReactJS</div>
      <div className="box content post">
          To Start with the project you need to have NodeJS. After downloading the code go to the folder and run the command "npm start" 
      </div>
      <div className="comment">
          <form>
              <input type="text" placeholder="Add comment" className="comment"></input>
              <button className="submit-button">Submit</button>
          </form>
      </div>
    </div>
  )
}
export default ViewProject
