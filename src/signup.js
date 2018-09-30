import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './signup.css'
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
const theme = createMuiTheme();
const appbar=style({
    flexGrow: 1,
    backgroundColor: "#5535CC",
})
console.log(theme);
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
    marginLeft:theme.spacing.unit * 14,
})
const button=style({
    marginLeft: -36,
    width:288
})

class Signup extends React.Component{
render()
{
	const {classes}=this.props;
	return(
			<div>	
				<AppBar className={appbar}>
					<Toolbar>
						<h3 class="appheading">Signup in JINU</h3>
						<div>
							<AccountCircleIcon className={usericon}/>
						</div>
					</Toolbar>
				</AppBar>
			<br/>
			<br/><br/>
			<br/>
			<div class="col-sm-12">
				<Card>
					<CardContent>
						<div className={classes.margin}>
							        <Grid container alignItems="flex-end">
							          <Grid item>
							          		<Button variant="contained" className={button} color="secondary">
          										<i class="fa fa-google-plus fa-2x pl" aria-hidden="true"></i>signup with Google
        									</Button>  
							          </Grid>
							        </Grid>
							  </div>
						<div className={classes.margin}>
							        <Grid container alignItems="flex-end">
							          <Grid item>
							          		<Button variant="contained" className={button} color="primary">
          										<i class="fa fa-facebook-square fa-2x pl1" aria-hidden="true"></i>signup with facebook
        									</Button>  
							          </Grid>
							        </Grid>
							        <br/>
							        <p class="text text-muted">Mr.Darshit Gajjar(Designer,Frontend Devloper,backend Devloper and MERN stack Devloper)</p>
							  </div>
					</CardContent>
				</Card>
			</div>
			</div>

	);
}
}
export default withStyles(styles)(Signup);