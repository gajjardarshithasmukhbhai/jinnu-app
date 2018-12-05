import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import jin from './image/jinu.png'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Forward from '@material-ui/icons/Forward';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom'
import Nextpage from './nextpage.js'
import Signup from './signup.js'
import Aftersignin from './aftersignin.js'
import Inbox from './inbox.js'
import Newspaper from './newspaper.js'
import {style} from 'typestyle'
import Taksanalysis from './taskanalysis.js'
import {IoIosArrowDropright} from 'react-icons/io';
import {IoMdRose} from 'react-icons/io';
const right=style({
        width:25,
        height:30,
      })
class Darshit extends React.Component{
render()
{
	return(
			<div class="col-sm-12 background">
				<div class="col-sm-3">
				</div>
				<div class="col-sm-6">
					<img src={jin} class="img-fluid mb-4 kl"/>	
				</div>
				<div class="col-sm-3">
				</div>
				<h1 class="text text-center font">JINU</h1>
					<h3 class="font2 text-center">Daily task reminder</h3>
					<Link exact to="/next-page"><Button variant="contained" color="lk" class="btn text-white next">
						 Next      <IoIosArrowDropright className={right}/>
					</Button>&nbsp;&nbsp;&nbsp;
					
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/>
					<IoMdRose/></Link>
			</div>
	);
}
}
ReactDOM.render(
<Router>
<div>
	<Route exact path="/" component={Darshit}/>
	<Route exact path="/next-page" component={Nextpage}/>
	<Route exact path="/sign-up" component={Signup}/>
	<Route exact path="/inbox" component={Inbox}/>
	<Route exact path="/after-signin" component={Aftersignin}/>
	<Route exact path="/newspaper" component={Newspaper}/>
	<Route exact path="/taskanalysis" component={Taksanalysis}/>
</div>
</Router>
	,document.getElementById("root"));