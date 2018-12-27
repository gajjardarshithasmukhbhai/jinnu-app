import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './nextpage.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {indigo} from '@material-ui/core/colors'
import AddIcon from '@material-ui/icons/Add';
import HowToRegRoundedIcon from '@material-ui/icons/HowToRegRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Signup from './signup.js'
import {style} from 'typestyle'
import Typography from '@material-ui/core/Typography';
import {lightBlue,pink,grey,lime} from '@material-ui/core/colors/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import christ from './image/christ.jpg'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

//var admin = require('firebase-admin');

/*const serviceAccount = require('./servicekey.json');
const uid="some-uid";
admin.auth().createCustomToken(uid)
.then((customToken)=>{console.log(customToken);})
.catch((err)=>{console.log(err);})
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://gajjar-great.firebaseio.com'
});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://gajjar-great.firebaseio.com'
});*/
var firebase=require("firebase");
const theme = createMuiTheme({
	palatte:indigo[400],
	width:10,

});
const margin=style ({
    marginLeft: theme.spacing.unit,
    width:"95%",
  })
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit*5,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  button1:{
  	backgroundColor:"#F80707",
  },
});
const card=style({
	backgroundImage:`url(${christ})`,
})
const appbar=style({
    flexGrow: 1,
    backgroundColor: lightBlue[700],
})
const usericon=style({
    marginLeft:theme.spacing.unit * 30,
})
class Nextpage extends React.Component{
	
	componentWillMount()
	{
		console.log("darshit2");
		var firebas=this.state.firebas;
		var ert=[];
		var item;
		let i=0;
		var ref=firebase.database().ref("users");
				ref.once("value").then(snap=>{
						   snap.forEach((ss) => {
						   	console.log(i);
						      this.state.firebas.push(ss.val());
						      this.setState({
						      	firebas:this.state.firebas,
						      })
						      ++i;
						     
						   });
						   
					this.wer=setTimeout(this.bnm,0)
				
				})
				.catch(err=>{console.log("gajjau error"+err.message)});
			}
				
	constructor(props)
	{
		super(props);
		this.state={
			username:"",
      		password:"",
      		direct:"hello",
      		refrerr:"",
      		firebas:[],
      		val:null,
      		uid:"",
      		modal:false,
      		Redirect:false,
      		photo:"",
      		open: false,
      		signup:false,
		}
		this.username=this.username.bind(this);
		this.password=this.password.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.tr=this.tr.bind(this);
		this.bnm=this.bnm.bind(this);
		this.Redirect=this.Redirect.bind(this);
		this.handleClickOpen=this.handleClickOpen.bind(this);
		this.handleClose=this.handleClose.bind(this);
		this.handleClickShowPassword=this.handleClickShowPassword.bind(this);
		this.dialog=this.dialog.bind(this);
		this.signup=this.signup.bind(this);
	}
	handleClickOpen(){
    this.setState({ open: true });
  };
  dialog()
  {
  		return (<div>
  			<Slide direction="up">
  				   <Dialog
          open={this.state.open}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {`${this.state.username} your username or password wrong`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google and Facebook help to signup/login. first signup please and the after login
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Signup
            </Button>
          </DialogActions>
        </Dialog>
        </Slide>
  		</div>)
  }
  signup()
  {
  	if(this.state.signup)
  	{
  		return (<Redirect eaxt to="/sign-up" />)
  	}
  }
  handleClose(){
    this.setState({ open: false,signup:true, });

  };
	bnm()
	{
		console.log("hasu-->");
		let i=0;
	try
		{
		
	}
	catch(e)
	{
		this.setState({
			firebas:this.state.firebas,
		})
	}
}
	username(f)
	{
		this.setState({
			username:f.target.value,
		})
	}
		
	password(g)
	{
		this.setState({
			password:g.target.value,
		})
	}
	tr()
	{
		var wer;
		this.state.firebas.map((ert,i)=>{
					var i=i;
					console.log(ert.username.name);
					if(this.state.username===ert.username.name && this.state.password===ert.password.password)
					{
						console.log("hasu");
						var Token=ert.Token.Token;
						if(Token=="Google")
						{
							var provider=new firebase.auth.GoogleAuthProvider();
							var promise=firebase.auth().signInWithPopup(provider).then(()=>{
								this.setState({
									Redirect:true,
								})
							});
								
						}
						else {
							var provider=new firebase.auth.FacebookAuthProvider();
							var promise=firebase.auth().signInWithRedirect(provider);
							this.setState({
								Redirect:true,
							})
						}
						/*firebase.auth().signInWithCustomToken(Token).catch(function(error) {
						  var errorCode = error.code;
						  var errorMessage = error.message;
						  console.log(errorMessage);
						  console.log(errorCode);
						});*/
						
					}

					else{
						this.setState({
							modal:true,
							open:true
						})
					}
				})
		/*if(this.state.username!=null)
		{
			
		}*/
	}
	Redirect()
	{
		if(this.state.Redirect)
		{
			return (<Redirect exact to={{
				pathname:'/after-signin',
						      	state:{
						      		MOB:this.state.MOB,
						      		noti:this.state.direct,
									uid:this.state.uid,
						      		password:this.state.password,
						      		username:this.state.username,
						      		photo:this.state.photo,
						      	}}
						      }/>)
		}
	}

	handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
render()
{
	 const { classes } = this.props;
	 var dialog;

	return(
			<div>
			{this.Redirect()}
			{this.dialog()}
			{this.signup()}
			<br/><br/>
				<AppBar className={appbar}>
					<Toolbar >
						<Typography variant="title" color="inherit">
            				Jinu
          				</Typography>
						<div class="text-c">
							<AccountCircleIcon className={usericon}/>
						</div>
					</Toolbar>
				</AppBar>
				<br/>
				<br/>
				<div class="col-sm-12">
					<Card className={card}>
						 <CardContent>
							<br/>
							
						 <TextField
          className={margin}
          label="Username"
 		  onChange={this.username}
          variant="outlined"
          value={this.state.username}
          id="mui-theme-provider-outlined-input"
        />
        <br/><br/>
							<br/>

        <TextField
          id="outlined-adornment-password"
          variant="outlined"
          value={this.state.password}
          className={margin}
          onChange={this.password}
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
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
					
							  <Button variant="contained" color="primary" className={classes.button} onClick={this.tr}>
						        <HowToRegRoundedIcon/>
						        Login
						      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						      
						      <Button spacing={5} color="secondary" variant="contained" className={classes.button}>
						        <KeyboardArrowLeftIcon/>
						        Back
						      </Button><br/><br/>
						      &nbsp;&nbsp;&nbsp;&nbsp;<Link exact to="/sign-up" class="text text-danger text-center d-block mx-auto " label="password" color="primary">you have no account?Signup</Link>
						 <br/>
						 </CardContent>
					</Card>
				</div>
			</div>
	);
}
}
export default withStyles(styles)(Nextpage);