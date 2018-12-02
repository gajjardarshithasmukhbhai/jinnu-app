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
import {Bar,Line,Doughnut,Pie} from 'react-chartjs-2';
const appbar=style({
    flexGrow: 1,
    backgroundColor: "#5535CC",

})
const list=style({
    width: 230,
})

const menuicon=style({
  outline:"0 !important;",
})
class Taksanalysis extends React.Component{
	
	constructor(props)
	{
		super(props);
		this.state={
			title_name:"",
			left:false,
			back:false,
			logout:false,
			name:"",
			chartData:{
				labels:["monday","tuesday","wendesday","thursday","friday","saturday","sunday"],
				datasets:[{
					label:"Productivity Graph",
					data:[900,549,827,927,656,825,88],
					backgroundColor:[
						'rgba(5, 112, 194, 0.9)',
						'rgba(5, 184, 194, 0.97)',
						'rgba(194, 181, 5, 0.94)',
						'rgba(222, 69, 110, 0.95)',
						'rgba(223, 114, 214, 0.95)',
						'rgba(238, 176, 62,.6)',
						'rgba(87, 255, 36, 0.95)',

					]
				}],
			}
		};
  	    this.toggleDrawer=this.toggleDrawer.bind(this);
  	    this.back=this.back.bind(this);
    	this.backing=this.backing.bind(this);
    	this.logout=this.logout.bind(this);
    	this.logouting=this.logouting.bind(this);
	}
	toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
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
	
	    const sideList = (
      <div className={list}>
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
    	</ListItem>
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
        	<Paper>
        	<div >
        		<Pie
					data={this.state.chartData}
					width={100}
					height={130}
					
				/>
        	</div>
        	</Paper>
        	</div>
    	</div>
			</div>
	);
}
}


export default Taksanalysis;