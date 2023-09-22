import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Profile = props => {
  const renderProfileSuccess = () => {
    const {profileDetails} = props
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile-success-container">
        <img src={profileImageUrl} alt="profile" className="profile-image" />
        <h1 className="profile-name">{name}</h1>
        <p className="profile-description">{shortBio}</p>
      </div>
    )
  }

  const renderProfileFailure = () => {
    const {getProfileDetails} = props
    return (
      <div className="profile-failure-container">
        <button
          className="retry-button"
          type="button"
          onClick={getProfileDetails}
        >
          Retry
        </button>
      </div>
    )
  }

  const renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const {profileStatus} = props

  switch (profileStatus) {
    case apiStatusConstants.success:
      return renderProfileSuccess()
    case apiStatusConstants.failure:
      return renderProfileFailure()
    case apiStatusConstants.inProgress:
      return renderLoading()
    default:
      return null
  }
}

export default Profile
