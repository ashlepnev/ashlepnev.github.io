import React from 'react'

const PortfolioItem = (props) => {
  return (
    <div className='portfolio-item'>
        <div className='portfolio-item-image'><img src={props.project.image}/></div>
        <div className='portfolio-item-content'>
            <p><b><a href={props.project.URL} target='_blank'>{props.project.name}</a></b><br/>
            <i>{props.project.type}</i><br/><br/>
            Что интересного?<br/>
            {props.project.description}
            </p>
        </div>
    </div>
  )
}

export default PortfolioItem