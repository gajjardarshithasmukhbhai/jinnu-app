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
import {lightBlue,pink,grey,lime} from '@material-ui/core/colors/';
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
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

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

const list=style({
    width: 230,
})
const theme=createMuiTheme();
const appbar=style({
    flexGrow: 1,
    backgroundColor: lightBlue[700],
})
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const image=style({
	width: 90,
    height: 90,
})
class Inbox extends React.Component{
componentDidMount(){
		this.wer=setInterval(()=>{this.calling();},2600);
}
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
     		 qa:true,
     		 comment1:"welcome user in our webapp Jinu this app is free so don't worry use it",
     		 comment2:"Any problem occur so please send message cismox.code@gmail.com"
		};
    	this.toggleDrawer=this.toggleDrawer.bind(this);
    	this.back=this.back.bind(this);
    	this.backing=this.backing.bind(this);
    	this.calling=this.calling.bind(this);
    	this.calls=this.calls.bind(this);

	}
	toggleDrawer = (open) => () => {
   		 this.setState({
      			left: open,
    		});
  }
  back(newValue)
  {
  	newValue.preventDefault();
  	this.setState({
  		back:true,
  	})
  }
  calls()
  {
  	this.setState({
  		comment1:"welcome user in our webapp Jinu this app is free so don't worry use it",
     	comment2:"Any problem occur so please send message cismox.code@gmail.com",
  	})
  }
  backing=()=>
  {
  	if(this.state.back)
  	{
  		return <Redirect exact to="/after-signin"/>
  	}
  }
  calling(){
  	this.setState({
  		comment1:"the 4 month hard-working then after this app became",
  		comment2:"Darshit(Mern stack devloper) is big fan of aladdin.so this webapp name set",
  		qa:!this.state.qa,		
  	})
  	if(this.state.qa==false)
  	{
  		this.calls();
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
				<AppBar className={appbar}>
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
			        className={image}
			     />	
			     </div>
			     <br/>
				<br/>
				<br/>
				<br/>
				<br/>
			     <div class="container">
					<Typography variant="title" class="text-capitalize text-center text-muted">
						inbox Messages 
					</Typography>
					<Divider/>
					<div className={classes.root}>
					<List className={classes.listItem}   disableRipple>
						<ListItem button>{/* button thi ribbel effect ave*/}
								<IconButton aria-label="Comments">
                  					<CommentIcon />
                				</IconButton>
							<ListItemText primary={this.state.comment1}/>
								
						</ListItem>
					</List>
					<Divider/>
					<List className={classes.listItem}   disableRipple>

						<ListItem button>{/* button thi ribbel effect ave*/}
								<IconButton aria-label="Comments">
                  					<CommentIcon />
                				</IconButton>
									<ListItemText primary={this.state.comment2} />
						</ListItem>

					</List>

					<Divider/>
					
					</div>
				</div>
			</div>
	);
}
}

export default withStyles(styles)(Inbox);;