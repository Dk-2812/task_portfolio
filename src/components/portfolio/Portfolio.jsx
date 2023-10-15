import React from 'react'
import PRJ1 from '../../assets/proj1.jpg';
import PRJ2 from '../../assets/proj2.jpg';
import PRJ3 from '../../assets/proj3.jpg';

import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="IMG" />
          </div>
          <h3>Calculator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Dk-2812/task2_calculator" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://task2-calculator-pearl.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="IMG" />
          </div>
          <h3>Age-Calcultor</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Dk-2812/task4_agecalci" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://task4-agecalci.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="IMG" />
          </div>
          <h3>Word-Count</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Dk-2812/task1_wordcounter" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://task1-wordcounter-seven.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio