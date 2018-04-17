import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0
    }
  }


  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/ cover'}}>
            React Project #1
            </CardTitle>
            <CardText>
              lorem ipsum this is the fake text that will populate this thing in the firlst place without even having to write anything that is even of any substance to the people that are in the know
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/ cover'}}>
            React Project #2
            </CardTitle>
            <CardText>
              lorem ipsum this is the fake text that will populate this thing in the firlst place without even having to write anything that is even of any substance to the people that are in the know
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/ cover'}}>
            React Project #3
            </CardTitle>
            <CardText>
              lorem ipsum this is the fake text that will populate this thing in the firlst place without even having to write anything that is even of any substance to the people that are in the know
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
          <h1>Rails</h1>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <h1>JS</h1>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
          <h1>Ruby</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTabe={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Rails</Tab>
          <Tab>JS</Tab>
          <Tab>Ruby</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
          </Cell>
          </Grid>
      </div>
    );
  }

}

export default Projects;
