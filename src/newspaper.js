import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import {style} from 'typestyle'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Divider from '@material-ui/core/Divider';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import red from '@material-ui/core/colors/red'
import axios from 'axios'
import './newspaper.css'

var firebase=require("firebase");
var config = {
    apiKey: "AIzaSyAuyVZN2Sfzs_I-KFg8OekpJ0dHJ7Sd_H8",
    authDomain: "gajjar-great.firebaseapp.com",
    databaseURL: "https://gajjar-great.firebaseio.com",
    projectId: "gajjar-great",
    storageBucket: "",
    messagingSenderId: "562657144875"
  };


library.add(faSignOutAlt)

const list=style({
    width: 230,
})
const Favorite=style({
  outline:"0 !important;",
})
const share=style({
  outline:"0 !important;",
})
const loving=style({
        backgroundColor:red,
      })

const theme=createMuiTheme();
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
   
  },
});

class Newspaper extends React.Component{
	componentWillMount()
	{
		var user = firebase.auth().currentUser;
	if(user!=null)
	{
		var name=user.displayName;
		var photoUrl = user.photoURL;
		this.setState({
			photo:photoUrl,
      user:name,
		})		
	}
	this.news();
	}

  constructor(props)
	{
		super(props);
		this.state={
			left:false,
			photo:"",
      news:[],
      user:"",
      color:"default",
      share:false,
      value:0,
      love:false,
      sharingcolor:"default"
		};
    	this.toggleDrawer=this.toggleDrawer.bind(this);
    	this.back=this.back.bind(this);
    	this.backing=this.backing.bind(this);
    	this.logout=this.logout.bind(this);
    	this.logouting=this.logouting.bind(this);
      this.news=this.news.bind(this);
      this.love=this.love.bind(this);
      this.hat=this.hat.bind(this);
      this.share=this.share.bind(this);
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
	toggleDrawer = (open) => () => {
   		 this.setState({
      			left: open,
    		});
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
  news()
  {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=c9de7f6e3b714a7bb68f3f9320c58357`)
    .then((result)=>
    {
      const post=result.data.articles;
      console.log(post);
      this.setState({
        news:post,
      })
    })
  }
  share()
  {
    this.setState({
      share:true,
      sharingcolor:"primary"
    })
  }
  love()
  {
            this.setState({
              color:"secondary",
              love:true,
            })
  }
  hat()
  {
    this.setState({
      color:"default",
      love:false,
    })
  }
  

render()
{
	const { classes } = this.props;
  let sharing;
  let love=this.state.love;
	const sideList = (
      <div className={list}>
      <ListItem>
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.user}
      </ListItem>
      <Divider/>

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
    	</ListItem>
      </div>

    );
   sharing=(
                  <div>

                  </div>
                )
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
			<div>
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
				
        {
          this.state.news.map((wr,i)=>{
            return <div class="container">
            <br/>
            <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" src={this.state.photo}className={classes.avatar}/>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={wr.title}
              subheader={wr.publishedAt}
            />
            <CardMedia
              className={classes.media}
              image={wr.urlToImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography component="p">
                {wr.content}
              </Typography>
            </CardContent>
            <a class="text text-muted pl-3" href={wr.url}>more details</a>
            <CardActions className={classes.actions} disableActionSpacing>

              <IconButton className={Favorite}aria-label="Add to favorites" key={wr.title} onClick={love?(this.hat):(this.love)} color={this.state.color}>
                <FavoriteIcon/>
              </IconButton>
              <IconButton className={share} aria-label="Share" onClick={this.share} color={this.state.sharingcolor}>
                <ShareIcon />
              </IconButton>
              
            </CardActions>
                      
          </Card>
      </div> 
          })
        }
				
			</div>
			</div>
	);
}
}


export default withStyles(styles)(Newspaper);
