import React from 'react';

const Rank = ({ name, entries }) => {
  const entriesArray = Object.values(entries);
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entriesArray}
      </div>
    </div>
  );
}

export default Rank;
