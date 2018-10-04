import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import {style} from 'typestyle'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge';
const theme=createMuiTheme();
const styles = {
  
  
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
const yrt=style({
	marginLeft: 200,
})
const yt=style({
	marginLeft: 24,

})
const root=style({
	flexGrow: 1,
})
const grow=style({
	flexGrow: 1,
})



class Aftersignin extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			notification:0,
		}
	}
render()
{
	const noti=this.state;
	const { classes } = this.state;
	return(
			<div >
			<div className={root}>
				<AppBar>
					<Toolbar variant="dense">
					<IconButton  color="inherit" aria-label="Menu">
						<MenuIcon/>
					</IconButton> 
						<Badge className={yrt} badgeContent={noti.notification} color="secondary">
						 	<MailIcon/>
						</Badge>
						
						 <AccountCircle className={yt}/>
						

					</Toolbar>
				</AppBar>
			</div>
			</div>
	);
}

}


export default withStyles(styles)(Aftersignin);