import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RatingStars from 'react-rating-stars-component';

const Filter = ({ setTitleFilter, setRateFilter, rateFilter }) => {
  const [resetKey, setResetKey] = useState(0);

  const resetFilters = () => {
    setTitleFilter('');
    setRateFilter(0);
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <div  style={{display: 'flex', justifyContent: 'center', height:'40px',backgroundColor: 'rgba(0, 0, 0, 0.66)'}}>
     
      <RatingStars
        key={resetKey}
        count={5}
        size={30}
        half={false}
        onChange={(rate) => setRateFilter(rate)}
        value={rateFilter}
      />
      <Button style={{ display: 'flex', justifyContent: 'flex-start' }} variant="danger" onClick={resetFilters}>
        Reset Filter
      </Button>
    </div>
  );
};

export default Filter;
