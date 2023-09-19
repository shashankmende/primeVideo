// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
import './index.css'

const MovieSlider = props => {
  const {actionMovies} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" data-testid="movie">
      <Slider {...settings}>
        {actionMovies.map(each => (
          <MovieItem key={each.id} movie={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
