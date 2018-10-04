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
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
const yrt=style({
	marginLeft: 232,
})
const yt=style({
	marginLeft: 16,
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
	return(
			<div>
				<AppBar>
					<Toolbar>
						<MenuIcon/>
						<Badge className={yrt} badgeContent={noti.notification} color="secondary">
						 	<MailIcon/>
						</Badge>
						 <AccountCircle className={yt}/>
					</Toolbar>
				</AppBar>
			</div>
	);
}

}


export default withStyles(styles)(Aftersignin);