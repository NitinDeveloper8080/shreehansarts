import React from 'react'

const Card = ({actualData}) => {
return <>
<div className="col">
    <div className="card">
      <img src='' className="card-img-top" width='500'
        alt="Hollywood Sign on The Hill" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</>
}

export default Card