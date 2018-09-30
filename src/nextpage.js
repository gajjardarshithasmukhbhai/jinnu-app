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
const theme = createMuiTheme({
	palatte:indigo[400],
});

class Nextpage extends React.Component{
render()
{
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
						 	<Grid continer alignItems="flex-end" style={{flex:1}}>
						 		
						        <Grid item class="text text-center email">
						            <TextField  label="E-mail darshit Adress" />
						            <br/>
						            <br/>
						            <TextField  label="Jinu-Password" />
						            <br/>
						            <br/>
						            <br/>
						        	<Button>
          								click me
        							</Button>
						        </Grid>
						 	</Grid>
						 </CardContent>
					</Card>
				</div>
			</div>
	);
}
}
export default Nextpage;