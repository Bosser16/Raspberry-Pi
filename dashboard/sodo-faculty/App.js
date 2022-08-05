import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function App() {

class Person extends React.Component{
  constructor(props){
    super(props);
  }

  createCard(){
    return(
      <Card sx={{maxWidth: 294, minWidth: 294, maxHeight: 500, borderRadius: 0, marginRight:"10px", marginTop:"10px", marginBottom:"10px", marginLeft:'10px'}}>
        <CardMedia
          component="img"
          height="300"
          width=""
          image={this.props.image}
        />
        <CardContent>
          <Typography variant="h9" component="div" align='center'>
            {this.props.organization}
          </Typography>
          <Typography variant="h5" component="div" align='center'>
            {this.props.name}
          </Typography>
          <Typography variant="h7" component="div" align='center'>
            {this.props.jobTitle}
          </Typography>
        </CardContent>
      </Card>
    )
  }


  render(){
    return(
      this.createCard()
    )
  }
}


class Screen extends React.Component{
  constructor(props){
    super(props);
  }

  newPerson(image, organization, name, jobTitle, left ){
    return(
      <Person jobTitle = {jobTitle} name = {name} image = {image} organization = {organization}/>);
     
    
  }

  people(){
    return(
      <Box sx={{width:'fit-content', flexDirection: 'column'}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: 'fit-content', backgroundColor: 'blue'}} >
          {this.newPerson('logo192.png', 'SODO/MXDES', 'Karen Fairclough', 'SODO Section Chief” (Supervisor)', 0)},
          {this.newPerson('logo192.png', 'SODO/MXDES', 'Kasey Thompson', 'SODO Program Director', 0)}
          {this.newPerson('logo192.png', 'Launchpad', 'Steve Turner', 'Launchpad Program Director', 0)},
          {this.newPerson('logo192.png', 'SWEG University', 'Tawnya Coulter', 'Planner/Scheduler', 0)}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: 'fit-content', backgroundColor: 'blue'}}>
          {this.newPerson('logo192.png', 'SWEG University', 'Corbin Bell', 'Organizational Training Program Manager', 0)},
          {this.newPerson('logo192.png', 'SWEG University', 'Timothy Herrick', 'Instructor; weekly TUGS facilitator', 0)}
          {this.newPerson('logo192.png', 'SWEG Internships', 'Sarah Nelson', 'Intern Program Manager', 0)},
          {this.newPerson('logo192.png', 'SWEG New Hires', 'Cassie Unguren', 'New Hire Coordinator Program Manager', 0)}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: 'fit-content', backgroundColor: 'blue'}}>
          {this.newPerson('logo192.png', 'SWEG Connections', 'Kammi Mears', 'Retention and Mentoring Program Manager', 0)},
          {this.newPerson('logo192.png', 'SODO faculty', 'Daniel Hillstead', 'manages Pluralsight licenses', 0)}
          {this.newPerson('logo192.png', 'SODO faculty', 'Jesse Farb', 'UI/UX instructor', 0)},
          {this.newPerson('logo192.png', 'SODO faculty', 'Ashlee Ward', 'Timesheets', 0)}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'blue'}}>
          {this.newPerson('logo192.png', 'SODO faculty','Jessica Collyer', 'rotating responsibilities', '500px' )},
        </Box>
      </Box>
    )
  }

  render(){
    return(
      this.people()
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Screen />);

}
export default App;
