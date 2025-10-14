import { Component } from 'react';
import './About.css';
import Me from "./images/IMG_2314.jpg"


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ["React", "Javascript", "Express", "NoSQL", "OAuth", "C++"]
    }
  }
  render() {
    return (
      <div className="about-section">
        <h2 className='info-title'>About Me</h2>
        <div className='about-info'>
          <img className='about-image' alt='My Photo' src={Me}></img>
          <div className='about-description'>
            <p className='item-subtitle'>
              Hello! I'm a developer interested in creating innovative solutions and designing server-side logic. I enjoy learning new technologies and expanding my skillset. 
            </p>
            <p className='item-subtitle'>
              With my background as a Computer Science, I know there is no limit as to what I can learn. I strive to continually improve and make my work run smooth.
              </p>
            <div>
              <h3 className='skill-title'>Skills & Technologies</h3>
              <div className="skill-list">
                {this.state.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;