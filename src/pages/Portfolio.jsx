import React from 'react'
import projects from '../store/projects'
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {

  document.title = "Портфолио Андрея Шлепнёва";

  return (
    <section className="content-section">
				<div className="content article with-navbar">
				
					<h1>Выполненные работы</h1>

					<div className='portfolio-list'>
					{projects.map((project, index) =>
						
						<PortfolioItem 
							key={index}
							project={project} 
						/>
				
					)}
					</div>
				
				</div>
				
				<div className="navbar"></div>
			</section>
  )
}

export default Portfolio