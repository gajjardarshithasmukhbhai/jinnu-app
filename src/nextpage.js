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
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Signup from './signup.js'
import {style} from 'typestyle'
import Typography from '@material-ui/core/Typography';
import {lightBlue,pink,grey,lime} from '@material-ui/core/colors/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
const appbar=style({
    flexGrow: 1,
    backgroundColor: lightBlue[700],
})
const usericon=style({
    marginLeft:theme.spacing.unit * 30,
})
class Nextpage extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			username:"",
      		password:"",
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleClickShowPassword=this.handleClickShowPassword.bind(this);
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
	return(
			<div>
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
					<Card>
						 <CardContent>
							<br/>
							
						 <TextField
          className={margin}
          label="Username"
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
					
							  <Button variant="contained" color="primary" className={classes.button}>
						        <HowToRegRoundedIcon/>
						        Login
						      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						      <Button spacing={5} color="secondary" variant="contained" className={classes.button}>
						        <KeyboardArrowLeftIcon/>
						        Back
						      </Button><br/><br/>
						      &nbsp;&nbsp;&nbsp;&nbsp;<Link exact to="/sign-up" class="text text-center mk" label="password" color="primary">you have no account?Signup</Link>
						 </CardContent>
					</Card>
				</div>
			</div>
	);
}
}
export default withStyles(styles)(Nextpage);