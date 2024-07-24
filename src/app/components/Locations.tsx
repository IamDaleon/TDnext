import React from 'react';
import 'bulma/css/bulma.min.css';

const Locations = () => {
  return (
    <>
      <div className="container has-text-centered py-6">
        <h2 className="title">Locations</h2>
        <div className="columns is-centered pt-2">
          <div className="column is-one-third">
            <div className="box">Garland</div>
          </div>
          <div className="column is-one-third">
            <div className="box">Richardson</div>
          </div>
          <div className="column is-one-third">
            <div className="box">Dallas</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Locations;
