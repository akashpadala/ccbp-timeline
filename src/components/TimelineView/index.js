import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="chrono-container">
      <h1 className="title-1">
        MY JOURNEY OF <br />
        <span className="title-2">CCBP 4.0 </span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: ' #0967d2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          cardForeColor: 'violet',
          titleColor: ' #0967d2',
        }}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return (
              <CourseTimelineCard
                courseItemDetails={eachItem}
                key={eachItem.id}
              />
            )
          }
          return (
            <ProjectTimelineCard
              projectItemDetails={eachItem}
              key={eachItem.id}
            />
          )
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
