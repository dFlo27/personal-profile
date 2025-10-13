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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              quis tortor euismod, hendrerit orci id, euismod lorem. Donec
              imperdiet, neque nec ullamcorper suscipit, velit mi accumsan
              sapien, at pretium justo nisl in justo. Curabitur posuere
              convallis leo nec volutpat. Donec eget magna ut mi varius
              malesuada.
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