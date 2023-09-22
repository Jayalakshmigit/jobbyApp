import {Link} from 'react-router-dom'
import {IoLocationSharp} from 'react-icons/io5'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
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
      <li className="job-card-item">
        <Link to={`/jobs/${id}`} className="job-card-item-link">
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
            <div className="location-icon-container">
              <IoLocationSharp className="type-icon" />
              <p className="location">{location}</p>
            </div>

            <div className="employment-type">
              <BsFillBriefcaseFill className="type-icon" />
              <p className="job-type">{employmentType}</p>
            </div>

            <p className="package">{packagePerAnnum}</p>
          </div>

          <hr />

          <h1 className="heading">Description</h1>
          <p className="description">{jobDescription}</p>
        </Link>
      </li>
    </>
  )
}

export default JobCardItem
