import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessIcon from '@material-ui/icons/Business';
import {style} from 'typestyle'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import {Bar,Line,Pie,Polar,Scatter} from 'react-chartjs-2';
import {lightBlue,pink,grey,lime,purple,orange} from '@material-ui/core/colors/';
import Rating from 'material-ui-rating'
import StarRatingComponent from 'react-star-rating-component';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
const theme=createMuiTheme();

var firebase=require("firebase");
const iOSSwitchBase=style({
  '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#52d869',
      },
    }
})
const colorSwitchBase=style({
  color: purple[300],
    '&$colorChecked': {
      color: purple[500],
      '& + $colorBar': {
        backgroundColor: purple[500],
      },
    }
})
const textField=style({
   height:"90px",
   width:"312px",

   marginLeft:"2px",
})
const iOSBar=style({
  borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  
})
const iOSIconChecked=style({
    boxShadow: theme.shadows[1],

})
const iOSIcon=style({
   width: 24,
    height: 24,
})
const iOSChecked=style({
    color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#52d869',
      },
})
const appbar=style({
    flexGrow: 1,
     backgroundColor: lightBlue[700],//color contrast

})
const list=style({
    width: 230,
})

const menuicon=style({
  outline:"0 !important;",
})
class Ratings extends React.Component{


	constructor(props)
	{
		super(props);
		this.state={
			title_name:"",
			left:false,
			back:false,
			logout:false,
			name:"",
      rating:1,
      checkedB: false,
      multiline:"",
      }
      
		
  	  this.toggleDrawer=this.toggleDrawer.bind(this);
  	  this.back=this.back.bind(this);
      this.handleRatingClick=this.handleRatingClick.bind(this);
    	this.backing=this.backing.bind(this);
    	this.logout=this.logout.bind(this);
    	this.logouting=this.logouting.bind(this);
      this.onStarClick=this.onStarClick.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.hanndlyu=this.handlyu.bind(this);
      this.firebase=this.firebase.bind(this);  
	}
  firebase()
  {
    console.log("gajja");
    if(this.state.checkedB)
    {
      console.log("hasu");
                  var database=firebase.database().ref("users");
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
                  var uidd=user.uid;
    
                  console.log(uidd);
    console.log("hitesh");
                  database.child(uidd).child("rate").set({
                    rate:this.state.rating,
                    comment:this.state.multiline,
                  });
    
    }
  });

  }
}
  handlyu(e)
  {
    this.setState({
      multiline:e.target.value,
      checkedB:false,
    })
  }
   handleChange = name => event => {
    console.log(event.target.checked);
    this.setState({ [name]: event.target.checked });

  };

onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    console.log(nextValue);
  }

	
	toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  }
  back()
  {
  	this.setState({
  		back:true,
  	})
  }
  handleRatingClick(e,data)
  {
    console.log("gajau"+data.caption);
  }
  backing()
  {
  	if(this.state.back)
  	{
  		return <Redirect exact to="/after-signin"/>
  	}
  }
	logout()
  {
    this.setState({
      logout:true,

    })
  }
  logouting()
  {
    if(this.state.logout)
    {
      return <Redirect to="/next-page"/>
    }
  }
  chart()
  {
    if(this.state.chart)
    {

    }
  }
  
render()
{
	 const { classes } = this.props;
	    const sideList = (
      <div className={list}><br/><br/><br/><Divider/>
      		<ListItem button onClick={this.back}>
      		<ListItemIcon>
		    	  	<span className="fa-fw">
		        	<FontAwesomeIcon icon="chevron-left"/>
		       		</span>
      		</ListItemIcon>
      		<ListItemText primary="Back"/>
    	</ListItem>
    <Divider/>
    	<ListItem button onClick={this.logout}>
      	<ListItemIcon>
		      	<span className="fa-fw">
		        <FontAwesomeIcon icon="sign-out-alt"/>
		       </span>
      	</ListItemIcon>
      		<ListItemText primary="logout" />
    	</ListItem><Divider/>

      	</div>
);
	return(
			<div>
			{this.backing()}
			{this.logouting()}
			<SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >

				<div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
     	   </div>
     	   </SwipeableDrawer>
				<AppBar  className={appbar}>
          <Toolbar variant="dense">
          <IconButton  color="inherit" onClick={this.toggleDrawer('left', true)} aria-label="Menu" className={menuicon}>

            <MenuIcon/>
          
          </IconButton> 
          <Typography variant="title" color="inherit">
            Jinu
          </Typography>
                      
          </Toolbar>
        </AppBar>
        <br/><br/><br/>
        <div class="container">
        	<div class="text-muted">
        	<Paper >
          <br/><be/>
          <Typography variant="button" gutterBottom>
             <h4 class="text-center"> please give your Rate</h4>
          </Typography>
              	<div style={{fontSize: 45}} class="text-center">
          <StarRatingComponent
            name="app2"
            starCount={5}
            value={this.state.rating}
             starColor="#2196F3"
             emptyStarColor="#E3D6D6"
            onStarClick={this.onStarClick.bind(this)} />
        </div>
        <div class="container">
          <TextField
          id="outlined-multiline-flexible"
          label="comment"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.hanndlyu}
          className={textField}
          margin="normal"
          variant="outlined"
        />
        </div>
        <FormGroup class="text-right">
        <FormControlLabel
          control={
            <Switch
              classes={{
                switchBase: iOSSwitchBase,
                bar: iOSBar,
                icon: iOSIcon,
                iconChecked: iOSIconChecked,
                checked: iOSChecked,
              }}
              disableRipple
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
            />
          }
          label=<h4>submit</h4>
        />
        </FormGroup>
      {this.firebase()}
       
        	</Paper>
        	</div>
    	</div>
			</div>
	);
}
}
export default Ratings;