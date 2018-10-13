import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {style} from 'typestyle'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import './inbox.css'
var firebase=require("firebase");
var config = {
    apiKey: "AIzaSyAuyVZN2Sfzs_I-KFg8OekpJ0dHJ7Sd_H8",
    authDomain: "gajjar-great.firebaseapp.com",
    databaseURL: "https://gajjar-great.firebaseio.com",
    projectId: "gajjar-great",
    storageBucket: "",
    messagingSenderId: "562657144875"
  };



library.add(faNewspaper )
library.add(faSignOutAlt)
library.add(faChevronLeft)

const theme=createMuiTheme();
const list=style({
    width: 230,
})
const styles = {
  	 bigAvatar: {
    width: 90,
    height: 90,
  },
}
class Inbox extends React.Component{
componentWillMount(){
	var user = firebase.auth().currentUser;
	if(user!=null)
	{
		var name=user.displayName;
		var photoUrl = user.photoURL;
		this.setState({
			user:name,
			photo:photoUrl,
		})		
	}
	else
	{

	}
}
	constructor(props)
	{
		super(props);
		this.state={
     		 left:false,
     		 back:false,
     		 user:"",
     		 photo:'',
		};
    	this.toggleDrawer=this.toggleDrawer.bind(this);
    	this.back=this.back.bind(this);
    	this.backing=this.backing.bind(this);

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
  backing=()=>
  {
  	if(this.state.back)
  	{
  		return <Redirect exact to="/after-signin"/>
  	}
  }

render()
{
	const { classes } = this.props;
	const sideList = (
      <div className={list}>
      <ListItem>
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.user}
      </ListItem>
      <Divider/>
      	<ListItem button>
		      <ListItemIcon>
		        <FontAwesomeIcon icon="newspaper" size={190}/>
		      </ListItemIcon>
		      <ListItemText primary="News" />
    	</ListItem>
      <Divider/>

    	<ListItem button onClick={this.back}>
      	<ListItemIcon>
		      	<span className="fa-fw">
		        <FontAwesomeIcon icon="chevron-left"/>
		       </span>
      	</ListItemIcon>
      		<ListItemText primary="Back" />
    	</ListItem>
    <Divider/>
    	<ListItem button>
      	<ListItemIcon>
		      	<span className="fa-fw">
		        <FontAwesomeIcon icon="sign-out-alt"/>
		       </span>
      	</ListItemIcon>
      		<ListItemText primary="logout" />
    	</ListItem>



      </div>
    );
  
	return(
		<div>
		{this.backing()}
	
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
    		{this.backing()}
				<AppBar>
					<Toolbar>
						<IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
            				<MenuIcon/>
          				</IconButton> 
          				<Typography variant="title" color="inherit">
            				Jinu
          				</Typography>
					</Toolbar>
				</AppBar>
				<br/>
				<br/>
				<br/>
				<br/>
				<div class="image">
				<Avatar
			        alt={this.state.user}
			        src={this.state.photo}
			        className={classes.bigAvatar}
			     />	
			     </div>
			     <br/>
				<br/>
				<br/>
				<br/>
				
			     <div class="container">
				<Card>
					<CardContent>
					</CardContent>
				</Card>
				</div>
			</div>
	);
}
}

export default withStyles(styles)(Inbox);;