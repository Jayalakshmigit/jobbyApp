import {BsFillBriefcaseFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import './index.css'

const SimilarJobs = props => {
  const {similarJobsDetails} = props

  const {
    companyLogoUrl,
    jobDescription,
    employmentType,
    location,
    rating,
    title,
  } = similarJobsDetails

  return (
    <li className="similar-job-container">
      <div className="img-container">
        <img
          className="image"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="title-rating">
          <h1 className="title">{title}</h1>
          <div className="star-rating">
            <AiFillStar className="star-icon" />
            <p className="rating">{rating}</p>
          </div>
        </div>
      </div>

      <h1 className="heading">Description</h1>
      <p className="description">{jobDescription}</p>

      <div className="location-job-type">
        <div className="location-icon-container">
          <IoLocationSharp className="location-icon" />
          <p className="location">{location}</p>
        </div>
        <div className="employment-type">
          <BsFillBriefcaseFill className="type-icon" />
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
