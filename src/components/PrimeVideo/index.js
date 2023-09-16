import './index.css'
import MovieSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  console.log('comedy movies list =', comedyMoviesList)
  console.log('Action Movies list =', actionMoviesList)

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-container">
        <div className="action-movie-container">
          <h1 className="movie-heading">Action Movies</h1>
          <MovieSlider actionMovies={actionMoviesList} />
        </div>
        <div className="comedy-movie-container">
          <h1 className="movie-heading">Comedy Movies</h1>
          <MovieSlider actionMovies={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
