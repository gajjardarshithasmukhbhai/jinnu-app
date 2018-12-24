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
import {lightBlue,pink,grey,lime,purple,orange,white} from '@material-ui/core/colors/';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green';
import Visibility from '@material-ui/icons/Visibility';
import './change.css'
import Button from '@material-ui/core/Button';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import chrismas from './image/christmas.jpg';
var firebase=require("firebase");
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
 const theme = createMuiTheme({
      palette: {
        primary: orange,
      },
      typography: { useNextVariants: true },
  });
 const margin=style ({
    marginLeft: theme.spacing.unit*3,
    width:"85%",
  })
 const chri=style({
  backgroundImage:`url(${chrismas})`,
   background: "#CEC5C5",
 })
 
class Change extends React.Component{
	componentWillMount()
  {
    let ref=firebase.database().ref("users");
    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        var uid=user.uid;
        var fire_pass;
        var fire_user;
        ref.child(uid).child("username").child("name").on("value",snap=>{
          this.setState({
            fire_user:snap.val(),
          })
        })
        ref.child(uid).child("password").child("password").on("value",snap=>{
          this.setState({
            fire_pass:snap.val(),
          })
        })
      }
    })
  }
  constructor(props)
	{
		super(props);
		this.state={
			left:false,
			back:false,
			logout:false,
      showPassword: false,
      username:"",
      password:"",
      fire_pass:"",
      fire_user:"",
      mane_kholo:false,
      forgot:"",
      renew_forgot:"",
		};
  	  this.toggleDrawer=this.toggleDrawer.bind(this);
  	  this.back=this.back.bind(this);
    	this.handleClickShowPassword=this.handleClickShowPassword.bind(this);
      this.backing=this.backing.bind(this);
      this.handleChange=this.handleChange.bind(this);
    	this.logout=this.logout.bind(this);
    	this.logouting=this.logouting.bind(this);
	    this.username=this.username.bind(this);
      this.password=this.password.bind(this);
      this.submit=this.submit.bind(this);
      this.renew_forgot=this.renew_forgot.bind(this);
      this.forgot=this.forgot.bind(this);
      this.submitkaro=this.submitkaro.bind(this);
  }
	toggleDrawer = (open) => () => {
    this.setState({
      left: open,
   
    });
  }
   handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
   handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  renew_forgot(f)
  {
    console.log(f.target.value);
    this.setState({
      renew_forgot:f.target.value,
    })
  }
  forgot(g)
  {
    console.log(g.target.value);
    this.setState({
      forgot:g.target.value,
    })
  }
  username(e)
  {
    this.setState({
      username:e.target.value,
    })
    
  }
  submitkaro()
  {
    if(this.state.forgot==this.state.renew_forgot && this.state.forgot!=''&&this.state.renew_forgot!='')
    {
        let ref=firebase.database().ref("users");
    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        var uid=user.uid;
        var fire_pass;
        var fire_user;
        ref.child(uid).child("password").set({
          password:this.state.forgot,
        })

      }

    })    
    }
    else if(this.state.forgot=='')
    {
      <h1>djd</h1>
    }
  }
  submit()
  {
    if(this.state.username===this.state.fire_user&&this.state.password===this.state.fire_pass)
    {
      this.setState({
        mane_kholo:true,
      })
    }
    else{
      console.log("not right");
      this.setState({
        mane_kholo:false,
      })
    }
  }

  password(e)
  {
    this.setState({
      password:e.target.value,
    })
  }
  back()
  {
  	this.setState({
  		back:true,
  	})
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
  
render()
{
      const { classes } = this.props;
      let mane_kholo;
      if(this.state.mane_kholo==true)
      {
        mane_kholo=<div>
        <br/>
          <TextField
          id="outlined-adornment-password"
          variant="outlined"
          required
          value={this.state.forgot}
          onChange={this.forgot}
          className={margin}
          type={this.state.showPassword ? 'text' : 'password'}
          label="New-Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              

            ),
          }}
        /><br/><br/><br/>
        <TextField
          id="outlined-adornment-password"
          variant="outlined"
          className={margin}
          value={this.state.renew_forgot}
          onChange={this.renew_forgot}
          type={this.state.showPassword ? 'text' : 'password'}
          label="Renew-Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              

            ),
          }}
        /><br/><br/><br/>
        <br/><br/>
        <Button variant="contained" color="secondary" className={margin} onClick={this.submitkaro}>
                submit
              </Button>
                      
                    </div>
      }
      else if(this.state.mane_kholo==false)
      {
        mane_kholo=<div>
                      <TextField
          className={margin}
          label="Username"
          variant="outlined"
          value={this.state.username}
          id="mui-theme-provider-outlined-input"
          onChange={this.username}
        />
        <br/><br/>
        <TextField
          id="outlined-adornment-password"
          variant="outlined"
          value={this.state.password}
          className={margin}
          onChange={this.password}
          type={this.state.showPassword ? 'text' : 'password'}
          label="Previous-Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              

            ),
          }}
        />
        <br/>
        <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Button variant="contained" color="secondary" className={margin} onClick={this.submit}>
                submit
              </Button>
                   </div>
      }
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
        	<Paper className={chri}>
        	{

            <MuiThemeProvider theme={theme}>
        <br/><br/>
        {mane_kholo}
        
      </MuiThemeProvider>
          }

          </Paper>
        	</div>
    	</div>
			</div>
	);
}
}
export default Change;