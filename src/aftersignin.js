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
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { mailFolderListItems} from './tileData';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
const theme=createMuiTheme();
const styles = {
  
  
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

};
const appbar=style({
    flexGrow: 1,
    backgroundColor: "#5535CC",
})
const list=style({
    width: 230,
})

const yrt=style({
	marginLeft: 154,
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
  componentWillMount()
  {
   let ert="zxcvWERTYUIobnm<asdfghjklpoiuytrewq1234567890";
   let lp="";
   for(let i=0;i<=4;i++)
   {
     lp=lp+ert.charAt(Math.floor(Math.random()*ert.length))
   }
   this.setState({
     password:lp,
   }) 
  }
	constructor(props)
	{
		super(props);
		this.state={
			notification:0,
      left:false,
      title_name:"Gajjar Darshit",
      password:""
		};
		this.toggleDrawer=this.toggleDrawer.bind(this);
	}
 toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  }

render()
{
	const noti=this.state;
	const { classes } = this.state;
  const sideList = (
      <div className={list}>
      <ListItem>
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.title_name}
      </ListItem>
      <Divider/>
        <List>{mailFolderListItems}</List>
      </div>
    );
	return(
			<div>
    {/* sidebar open karva mate thay che */}
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

			<div className={root}>
				<AppBar  className={appbar}>
					<Toolbar variant="dense">
					<IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">

						<MenuIcon/>
					
          </IconButton> 
          <Typography variant="title" color="inherit">
            Jinu
          </Typography>
						<Badge className={yrt} badgeContent={noti.notification} color="secondary">
						 	<MailIcon/>
						</Badge>
						
						 <AccountCircle className={yt}/>
						

					</Toolbar>
				</AppBar>
				<Drawer open={this.state.draweropened} docked={false} onRequestChange={()=>this.toggleDrawer}/>
        <br/><br/><br/>
        <div class="container">
            <div class="alert alert-primary"><span aria-hidden="true" data-dismiss="alert" class="close">&times;</span>
            <b>welcome user in Darshit jinu app</b><br/>your username is:&nbsp;&nbsp;<b>{this.state.title_name}</b><br/>your password is:&nbsp;&nbsp;<b>{this.state.password}</b>
            </div>
        </div>
			</div>
			</div>
	);
}
}


export default withStyles(styles)(Aftersignin);