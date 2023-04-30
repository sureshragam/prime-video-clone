// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      trigger={
        <button type="button">
          <div className="movieItem">
            <img src={thumbnailUrl} alt="thumbnail" />
          </div>
        </button>
      }
      modal
    >
      {close => (
        <div className="popup">
          <button type="button" onClick={close} data-testid="closeButton">
            <IoMdClose className="close-icon" />
          </button>
          <ReactPlayer url={videoUrl} controls playing />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
