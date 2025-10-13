import { Component } from 'react';
import './Portfolio.css';
import Lighthouse from "./images/Lighthouse.png"
import LinearRegression from "./images/Project2.png"

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: Lighthouse,
          title: "Job Seeker Website",
          description: "A full-stack application for job seekers",
          technologies: ["React", "Node.js", "MongoDB", "Gemini AI"],
          code_src: "https://github.com/dFlo27/Lighthouse-Resume-App"
        },
        {
          project_image: LinearRegression,
          title: "Linear Regression Model",
          description: "A linear regression model trained on NYC worker data to predict police officer salaries",
          technologies: ["Jupyter Notebook", "numpy", "Python", "sklearn"],
          code_src: "https://github.com/dFlo27/CS301-Data-Science/blob/main/Project%201/Linear%20Regression.ipynb"
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h2 className='info-title'>My Portfolio</h2>
        <div className="project-cards">
          {
            //Use this section to list your projects dynamically from state using the map function
            this.state.projects.map((project, index) =>
              <div key={index} className="project-card">
                <img className='project-image' src={project.project_image} alt='Project Image'></img>
                <div className="project-content">
                  <div className="timeline">
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="item-title">{project.title}</h4>
                        <p className="item-subtitle">{project.description}</p>
                        <div className="item-details">
                          {project.technologies.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-item">{skill}</span>
                          ))}
                        </div>
                        <div className="project-links">
                          <a href="#" className="demo-link">
                            Live Demo
                          </a>
                          <a href={project.code_src} className="code-link">
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div >
    );
  }
}

export default Portfolio;