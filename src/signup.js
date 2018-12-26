import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './signup.css'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {style} from 'typestyle'
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Aftersignin from './aftersignin.js'
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import {lightBlue,pink,grey,lime} from '@material-ui/core/colors/';
var firebase=require("firebase");
var config = {
    apiKey: "AIzaSyAuyVZN2Sfzs_I-KFg8OekpJ0dHJ7Sd_H8",
    authDomain: "gajjar-great.firebaseapp.com",
    databaseURL: "https://gajjar-great.firebaseio.com",
    projectId: "gajjar-great",
    storageBucket: "",
    messagingSenderId: "562657144875"
  };
  firebase.initializeApp(config);


const theme = createMuiTheme();
const appbar=style({
    flexGrow: 1,
    backgroundColor: lightBlue[700],
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
  }
});
const usericon=style({
    marginLeft:theme.spacing.unit * 30,
})
const button=style({
    marginLeft: -36,
    width:288
})



class Signup extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			der:"",
			redirect: false,
			passingvalue:"darshit genius",
			 password:"",
			 catch:false,
		};
		this.signin=this.signin.bind(this);
		this.facebook=this.facebook.bind(this);
		this.renderRedirect=this.renderRedirect.bind(this);
	}




	renderRedirect = () => {
   				 if (this.state.redirect) {
      					return <Redirect to='/after-signin' />
    			}
  			}


	signin()
	{
		console.log("gajjar darshit ja");
		var provider=new firebase.auth.GoogleAuthProvider();
		console.log(provider);
		var promise=firebase.auth().signInWithPopup(provider);
  		var qwe=this.state.password;

		promise.then(result=>{
			var user=result.user;
			var token = user.refreshToken/*result.credential.accessToken*/;
			console.log("my accessToken ->"+token)

			var ert=user.displayName;
			console.log("emadjjjjjjjjjjjjjjjjjjjddjd->"+user.email);
			this.setState({
				der:"Welcome "+user+"in Jinu App",
			})
			
			firebase.database().ref("users/"+user.uid).child("username").set({
				name:user.displayName,	
							
			});
						firebase.database().ref("users/"+user.uid).child("Token").set({
				Token:"Google",
			});
			

			firebase.auth().onAuthStateChanged(user => {
			  if(user) {
			      	
			  	
			  	this.setState({
			  		der:"i am another page",
			  		redirect:true
			  	})

			  }
			});

		})


		
		promise.catch(err=>{
			var errorcode=err.code;
			var errmessage=err.message;
			console.log("gajjar darshit hasks");
			this.setState({
				der:errmessage,
				catch:true
			})
		})
	}
	facebook()
	{
		console.log("gajjar darshit ja");
		var provider=new firebase.auth.FacebookAuthProvider();
		var promise=firebase.auth().signInWithPopup(provider);
		promise.then(result=>{
			var user=result.user;
			var ert=user.displayName;

			this.setState({
				der:"Welcome "+user+"in Jinu App",
			})
			
			firebase.database().ref("users/"+user.uid).child("username").set({
				name:user.displayName,	
			});
			firebase.database().ref("users/"+user.uid).child("Token").set({
				Token:"facebook",
			});

			firebase.auth().onAuthStateChanged(user => {
			  if(user) {
			      	
			  	
			  	this.setState({
			  		der:"i am another page",
			  		redirect:true
			  	})

			  }
			});

		})
		
		promise.catch(err=>{
			var errorcode=err.code;
			var errmessage=err.message;
			console.log("gajjar darshit hasks");
			this.setState({
				der:errmessage,
				catch:true
			})
		})	
	}
render()
{
	const {classes}=this.props;
	var ddr;
	if(this.state.catch)
	{
				ddr=<div class="alert alert-primary">
						<span class="close" data-dismiss="alert">&times;</span>
						{this.state.der}
				</div>
	}
	return(
			<div>
				<AppBar className={appbar}>
					<Toolbar>
						<Typography variant="title" color="inherit">
            				Jinu
          				</Typography>
						<div>
							<AccountCircleIcon className={usericon}/>
						</div>
					</Toolbar>				
				</AppBar>
			<br/>
			<br/><br/>
			<br/>
			{ddr}	
			<div class="col-sm-12">

				<Card>
					<CardContent>
						<div className={classes.margin}>
							        <Grid container alignItems="flex-end">
							          <Grid item>
							          		<Button variant="contained" onClick={this.signin} className={button} color="secondary">
          										<i class="fa fa-google-plus fa-2x pl" aria-hidden="true"></i>signup with Google
        									</Button>  
							          </Grid>
							        </Grid>
							  </div>
						<div className={classes.margin}>
							        <Grid container alignItems="flex-end">
							          <Grid item>
							          		<Button variant="contained" onClick={this.facebook}className={button} color="primary">
          										<i class="fa fa-facebook-square fa-2x pl1" aria-hidden="true"></i>signup with facebook
        									</Button>  
							          </Grid>
							        </Grid>
							        <br/>
							        <p class="text text-muted">Mr.Darshit Gajjar(Designer,Frontend Devloper,backend Devloper and MERN stack Devloper)</p>
							  </div>
							  {this.renderRedirect()}
					</CardContent>
				</Card>
			</div>
			</div>

	);
}
}

	
export default withStyles(styles)(Signup);