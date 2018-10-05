import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';

import Divider from '@material-ui/core/Divider';
import 'font-awesome/css/font-awesome.min.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {style} from 'typestyle'
library.add(faNewspaper )
library.add(faSignOutAlt)
let full_name=()=>
{
  this.state={
    der:"gajjar",
  }
}
export const mailFolderListItems = ( 

  <div>
  
    <ListItem button>
      <ListItemIcon>
        <FontAwesomeIcon icon="newspaper" size={190}/>
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItem>
    <Divider/>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <Divider/>
    <ListItem button>
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