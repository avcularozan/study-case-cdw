import './index.css'
import arrowRight from '../../assets/icons/arrow-right.svg'

const Content = ({ name, type, date }) => {
  return (
    <div className="content-container">
      <div className="info">
        <div className='date-type'>
          <span className="date">{date}</span>
          <span className="type">{type}</span>
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="see-project-btn">
        See project
        <img src={arrowRight} />
      </div>
    </div>
  )
}

export default Content
