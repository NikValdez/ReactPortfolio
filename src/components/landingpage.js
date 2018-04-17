import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import nikcochran from './nikcochran.png'

class Landing extends Component {

  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}} >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={nikcochran}
              alt="avatar"
              className="nikcochran"
              />
              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <hr/>
                <p>HTML/CSS | Bootstrap | Javascript | Jquery | React | Ruby | Rails</p>
                <p className="social-links">
                  <a href="https://github.com/NikValdez" target="blank">
                    <i className="fa fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/nik-cochran-37422584/" target="blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/nikcochran" target="blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </p>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }

}

export default Landing;
