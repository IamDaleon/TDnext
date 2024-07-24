import React from 'react'

const Cards = () => {
  return (
    <div className='has-background-white py-6'>
        <div className="container pt-6 columns is-mobile">
            <div
                className="
                column
                "
            >
                <code>is-three-quarters-mobile</code><br />
                <code>is-two-thirds-tablet</code><br />
                <code>is-half-desktop</code><br />
                <code>is-one-third-widescreen</code><br />
                <code>is-one-quarter-fullhd</code>
            </div>
            <div className="column">2</div>
            <div className="column">3</div>
            <div className="column">4</div>
        </div>
        <div className="is-flex is-justify-content-center py-6">
      <button className="button is-success is-medium is-two-fifths is-outlined">See Full Menu</button>
    </div>
    </div>
  )
}

export default Cards