import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobCardItem = props => {
  const {jobCardItemDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobCardItemDetails

  return (
    <>
      <Link to={`/jobs/${id}`} className="job-link">
        <li className="job-item">
          <div className="job-container1">
            <div className="img-container">
              <img className="image" src={companyLogoUrl} alt="company logo" />
              <div className="title-rating">
                <h1 className="title">{title}</h1>
                <div className="star-rating">
                  <AiFillStar className="star-icon" />
                  <p className="rating">{rating}</p>
                </div>
              </div>
            </div>
            <div className="location-package">
              <div className="location-job-type">
                <div className="location-icon-container">
                  <MdLocationOn className="location-icon" />
                  <p className="location">{location}</p>
                </div>
                <div className="employment-type">
                  <p className="job-type">{employmentType}</p>
                </div>
              </div>
              <div>
                <p className="package">{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="job-container2">
            <h1 className="heading">Description</h1>
            <p className="description">{jobDescription}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default JobCardItem
