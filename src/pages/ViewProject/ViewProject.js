import './ViewProject.css'

const ViewProject = () => {
  return (
    <div className="  content">
      <div className=" title">My amazing Project</div>
      <div className=" sub-title">this amazing project does things that words cant even describe</div>
      <div className="box">Created by: God Himself</div>
      <div className="box"><a href="http://www.github.com">Link to Project</a></div>
      <div className="box">PreRequsite: 7 Years of expertise </div>
      <div className="box">Technologies Used : Java and Black Magic</div>
      <div className="box content post">
          image or whatever
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
