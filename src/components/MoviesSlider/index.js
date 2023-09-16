// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

const MovieSlider = props => {
  const {actionMovies} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" data-testid="movie">
      <Slider>
        <div>
          {actionMovies.map(each => (
            <MovieItem key={each.id} movie={each} />
          ))}
        </div>
      </Slider>
    </div>
  )
}

export default MovieSlider
