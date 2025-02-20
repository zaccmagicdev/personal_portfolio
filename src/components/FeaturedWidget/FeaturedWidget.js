import React from 'react'
import './FeaturedWidget.scss'


function FeaturedWidget(props) {
  return (
    <div className={`featuredWidget featuredWidget__${props.name}`}>
        <img className='featuredWidget__preview' src={props.gifURL} />
        <p className='featuredWidget__githublink'>{props.githubLink}</p>
        <p className='featuredWidget__description'>{props.description}</p>
    </div>
  )
}

export default FeaturedWidget