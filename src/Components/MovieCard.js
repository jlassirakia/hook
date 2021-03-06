
import React from 'react';
import './MovieCard.css';



const MovieCard = ({ movie: { rating, date, image, name, description } }) => {
    return (
      <div className='container'>
        <div className='movie'>
         
          <div className='movie-img'>
            <img src={image} alt='movie poster' />
          </div>
          <div className='text-movie-cont'>
            <div className='mr-grid'>
              <div className='col1'>
                <h2>{name}</h2>
                <ul className='movie-gen'>
                  <p>{date}</p><br></br>
                  <h5> <b>rating:</b> {rating}</h5>
                </ul>
              </div>
            </div>
            <div className='mr-grid summary-row'>
             
              <p>{description}</p>
             
            </div>

          </div>
         </div>
    
      </div>
    );
  };
  
  export default MovieCard;