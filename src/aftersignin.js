import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import './after-signin.css'
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Inbox from './inbox.js'
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import Newspaper from './newspaper.js'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
var firebase=require("firebase");
var config = {
    apiKey: "AIzaSyAuyVZN2Sfzs_I-KFg8OekpJ0dHJ7Sd_H8",
    authDomain: "gajjar-great.firebaseapp.com",
    databaseURL: "https://gajjar-great.firebaseio.com",
    projectId: "gajjar-great",
    storageBucket: "",
    messagingSenderId: "562657144875"
  };

const theme=createMuiTheme();
const styles = {
  
  
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

};
const fab=style({
  marginLeft: theme.spacing.unit*34,
  outline:"0 !important;",
})
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

const textyu=style({
  width:"100%",
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
const menuicon=style({
  outline:"0 !important;",
})
class Aftersignin extends React.Component{
  componentWillMount()
  {
   let ert="zxcvWERTYUIobnmasdfghjklpoiuytrewq1234567890";
   let lp="";
   for(let i=0;i<=4;i++)
   {
     lp=lp+ert.charAt(Math.floor(Math.random()*ert.length))
   }
   this.setState({
     password:lp,
   }) 
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
        var ert=user.displayName;
          this.setState({
              function:true,
              title_name:ert,
              inbox:"welcome user in jinu app our company make the webapp,mobile app and ios app",
              inbox_number:1
          })          
          
        }
      });


  }
  constructor(props)
  {
    super(props);
    this.state={
      left:false,
      title_name:"",
      password:"",
      function:false,
      inbox:"",
      inbox_number:0,
      inb_page:false,
      logout:false,
      newspaper:false,
      floaticon:false,
    };
    this.toggleDrawer=this.toggleDrawer.bind(this);
    this.inbox=this.inbox.bind(this);
    this.inboxy=this.inboxy.bind(this);
    this.inbox_pages=this.inbox_pages.bind(this);
    this.logout=this.logout.bind(this);
    this.logouting=this.logouting.bind(this);
    this.newspaper=this.newspaper.bind(this);
    this.floaticon=this.floaticon.bind(this);
    this.flo=this.flo.bind(this);
    this.newspaper_open=this.newspaper_open.bind(this);
  }

 toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  }
  inbox_pages=()=>{
    if(this.state.inb_page)
    {
      return <Redirect to="/inbox"/>
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
  inbox()
  {
    this.setState({
        inb_page:true,
    })
  }
  inboxy(newValue)
  {
    newValue.preventDefault();
    this.setState({
        inb_page:true,
        inbox_number:0

    })
  }
  floaticon()
  {
    this.setState({
      floaticon:true,
    })
  }
  flo()
  {
    this.setState({
      floaticon:false,
    }) 
  }
function(){
      var firebaseRef=firebase.database().ref("users");

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
       var wer=user.uid;
        var ert=user.displayName;
        var photourl=user.photoURL;
        var phonenumb=user.phoneNumber;
        var database=firebase.database();
        var ref=database.ref("users");

          firebaseRef.child(`${wer}`).child("password").set({
                  password:this.state.password,
                });
          firebaseRef.child(`${wer}`).child("photo").set({
                  photo:photourl,

          });  
        ref.on("value",gotdata,errdata);

      }
    });
  
  function gotdata(data)
  {
    var scores=data.val();
    var keys=Object.keys(scores);
    for(var i=0;i<keys.length;i++)
    {
      var k=keys[i];
      var initials=scores[k].initials;
      var scor=scores[k].name;

      console.log(initials,scor);
    }
  }
  function errdata(err)
  {

  }
}
newspaper()
  {
    this.setState({
      newspaper:true,
    })
  }
  newspaper_open()
  {
    if(this.state.newspaper)
    {
      return <Redirect exact to="/newspaper"/>
    }
  }
render()
{
  const noti=this.state;
  const { classes } = this.state;
  let floaticon;
  if(this.state.floaticon)
  {
    floaticon=(
      <div class="fab-container">
                    <ul class="fab-options">
                      <li>
                          <span class="fab-label">change password</span>

                        <div class="fab-icon-holder">
                         <i class="fa fa-unlock-alt fa-2x" aria-hidden="true"></i>
                        </div>
                      <br/>

                      </li>
                      <li>
                            <span class="fab-label">task analysis</span>

                        <div class="fab-icon-holder">
                            <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
                        </div>
                      <br/>

                      </li>
                      <li>
                            <span class="fab-label">review</span>  

                        <div class="fab-icon-holder">
                            <i class="fa fa-commenting-o fa-2x" aria-hidden="true"></i>
                        </div>
                      </li>
                    </ul>
              </div>)
    }
    const sideList = (
      <div className={list}>
      <ListItem>
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.title_name}
      </ListItem>
      <Divider/>
      <ListItem button onClick={this.newspaper}>
      <ListItemIcon>
        <FontAwesomeIcon icon="newspaper" size={190}/>
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItem>
    <Divider/>
    <ListItem button onClick={this.inbox}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
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
    <Divider/>
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="company details" />
    </ListItem>
    <ListItem button>
        <p class="text text-muted">Mr.Darshit Gajjar(Devloper)</p>
    </ListItem> 
      </div>
    );
  return(
      <div>
      {this.function()}
      {Inbox}
      {this.logouting()}
      {this.newspaper_open()}

      {this.inbox_pages()}
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
          <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu" className={menuicon}>

            <MenuIcon/>
          
          </IconButton> 
          <Typography variant="title" color="inherit">
            Jinu
          </Typography>
            <Badge className={yrt} badgeContent={this.state.inbox_number} color="secondary" onClick={this.inboxy}>
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
{/* form khulse crud operaton by user*/} 
       <div class="container-fluid">
          <Card>
             <CardContent>
                <TextField
                  id="outlined-email-input"
                  label="Daily Task reminder"
                  className={textyu}
                  type="text"
                  name="text"
                  autoComplete=""
                  margin="normal"
                  variant="outlined"
                  />
                  <button class="btn btn-outline-primary">ADD</button>&nbsp;
                  <button type="cancel"class="btn btn-outline-danger">Cancel</button>
                  <br/><br/>
                  
                  
                   <List disableRipple>
            <ListItem button>{/* button thi ribbel effect ave*/}
                <IconButton aria-label="Comments">
                          
                        </IconButton>
              <ListItemText primary="welcome user in our webapp "/>
                
            </ListItem>
          </List>
             </CardContent>
          </Card>
           {floaticon}

          <div class="fixed-bottom lol">
           <Fab color="primary" aria-label="Add" onMouseOver={this.floaticon} onMouseOut={this.flo} className={fab}>
              <AddIcon/>
           </Fab>
           </div>
               
       </div>
      </div>
      </div>
  );
}
}


export default withStyles(styles)(Aftersignin);