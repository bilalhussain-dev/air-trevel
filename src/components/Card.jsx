import React from 'react'

function Card(data) {
  return (
    <div className='card-trevel'>
        <div className="side-img">
            <img src={data.imageURL} alt="" className="cover-img" />
        </div>
        <div className="trevel-info">
            <div className="trevel-countires">
                <span>{data.location}</span>
                <span>{data.googleMapUrl}</span>
            </div>
            <h3>{data.title}</h3>
            <div className="dates">
                <span>{data.startDate}</span>
                <span>{data.endData}</span>
            </div>
            <div className="description">
                <p>{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card