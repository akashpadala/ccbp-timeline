import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItemDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectItemDetails
  return (
    <div className="card-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-container">
        <h1 className="title">{projectTitle} </h1>
        <div className="duration-container">
          <AiFillCalendar className="react-icon" />
          <p className="duration"> {duration} </p>
        </div>
      </div>
      <p className="description"> {description} </p>
      <a href={projectUrl} rel="noreferrer" target="_blank" className="url-el">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
