// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  console.log('list = ', movie)
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button">
            <img src={movie.thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <div className="video-container">
            <button
              type="button"
              className="close-btn"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={movie.videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
