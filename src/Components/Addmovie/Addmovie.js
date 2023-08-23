import React, { useState } from 'react';
import './Addmovie.css'; 

const Addmovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState(0);
  const [posterUrl, setPosterUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate that title, rating, and poster URL are not empty before adding the movie
    if (title.trim() !== '' && rate.trim() !== '' && posterUrl.trim() !== '' && description.trim() !== '') {
      // Create a new movie object with the title, poster URL, and rating
      const newMovie = {
        title,
        posterUrl,
        description,
        rate: parseFloat(rate),
      };
      onAddMovie(newMovie);

      setTitle('');
      setDescription('');
      setRate(0);
      setPosterUrl('');
    }
  };

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.66)', height:'200px'}} className="center-container"> 
      <form onSubmit={handleSubmit}>
        <div className='addmovie'>
          <input
            style={{borderRadius:'9px'}}
            type="text"
            placeholder="Movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
          style={{borderRadius:'9px'}}
            type="text"
            placeholder="Movie description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
          style={{borderRadius:'9px'}}
            type="number"
            placeholder="Movie rating"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div>
          <input
          style={{borderRadius:'9px'}}
            type="text"
            placeholder="Movie IMG URL"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>
        <div>
        <button type="submit" style={{ borderRadius:"10px" ,backgroundColor: "cyan", cursor: 'pointer' }}>
  Add Movie
</button>

        </div>
      </form>
    </div>
  );
};

export default Addmovie;
