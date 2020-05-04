import React from 'react';

import spinner from './spinner.gif';

function Spinner() {
  return (
    <div>
      <img
        className="mx-auto mt-48 h-auto w-auto"
        src={spinner}
        alt="loading"
      />
    </div>
  );
}

export default Spinner;
