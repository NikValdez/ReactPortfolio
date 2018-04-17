import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl'
import nikcochran from './nikcochran.png'



class Contact extends Component {

  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nik Cochran</h2>
            <img
              src={nikcochran}
              alt="avatar"
              style={{height: '250px'}}
              className="nik-contact"
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
            </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

              <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square"></i>
                  (604) 983-1038
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-fax"></i>
                  (604) 983-1038
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope"></i>
                  nikcochran@gmail.com
                  </ListItemContent>
                </ListItem>

                </List>
              </div>

          </Cell>
        </Grid>
      </div>
    );
  }

}

export default Contact;
