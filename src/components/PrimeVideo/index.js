// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  console.log(moviesList)
  const settings = {
    slidesToShow: 4,
  }
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId !== 'ACTION',
  )
  return (
    <div className="prime-video-container">
      <div className="banner">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <div className="row">
        <h1>Action Movies</h1>

        <Slider {...settings}>
          {actionMoviesList.map(eachMovie => {
            const {id} = eachMovie
            return <MovieItem key={id} movieDetails={eachMovie} />
          })}
        </Slider>
      </div>
      <div className="row">
        <h1>Comedy Movies</h1>
        <Slider {...settings}>
          {comedyMoviesList.map(eachMovie => {
            const {id} = eachMovie
            return <MovieItem key={id} movieDetails={eachMovie} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
