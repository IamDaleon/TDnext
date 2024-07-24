import React from 'react'

const MoreInfo = () => {
  return (
    <>
      <div className="container has-text-centered py-6">
        {/* <h2 className="title">More info</h2> */}
        <div className="columns is-centered pt-2">
          <div className="column is-one-third">
            <div className="title">Events</div>
          </div>
          <div className="column is-one-third">
            <div className="title">We're Hiring</div>
          </div>
          <div className="column is-one-third">
            <div className="title">Our Impact</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreInfo