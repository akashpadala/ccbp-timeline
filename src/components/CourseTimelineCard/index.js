import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseItemDetails} = props
  const {courseTitle, duration, description, tagsList} = courseItemDetails
  return (
    <div className="card-container">
      <div className="title-container">
        <h1 className="title">{courseTitle} </h1>
        <div className="duration-container">
          <AiFillClockCircle className="react-icon" />
          <p className="duration"> {duration} </p>
        </div>
      </div>
      <p className="description"> {description} </p>
      <ul className="tags-container">
        {tagsList.map(eachTagItem => (
          <li className="tag-item" key={eachTagItem.id}>
            {eachTagItem.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
