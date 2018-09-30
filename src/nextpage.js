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
import VisibilityIcon from '@material-ui/icons/Visibility';
import { withStyles } from '@material-ui/core/styles';
const theme = createMuiTheme({
	palatte:indigo[400],
	width:10
});
console.log(theme);
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit*5,
  },
});
class Nextpage extends React.Component{
render()
{
	 const { classes } = this.props;
	return(
			<div>
				<AppBar class="appbar">
					<Toolbar >
					</Toolbar>
				</AppBar>
				<br/>
				<br/>
				<div class="col-sm-12">
					<Card>
						 <CardContent>
							 <div className={classes.margin}>
							        <Grid container spacing={8} alignItems="flex-end">
							          <Grid item>
							            <AccountCircle />
							          </Grid>
							          <Grid item>
							            <TextField id="input-with-icon-grid" label="E-mail adress" />
							          </Grid>
							        </Grid>
							  </div>
							  <div className={classes.margin}>
							        <Grid container spacing={8} alignItems="flex-end">
							          <Grid item>
							            <VisibilityIcon/>
							          </Grid>
							          <Grid item>
							            <TextField id="input-with-icon-grid" label="password" />
							          </Grid>
							        </Grid>
							  </div>

						 </CardContent>
					</Card>
				</div>
			</div>
	);
}
}
export default withStyles(styles)(Nextpage);