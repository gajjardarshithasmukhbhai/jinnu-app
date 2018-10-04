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
						 Next <Forward/>
					</Button>
					</Link>
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
	<Route exact path="/after-signin" component={Aftersignin}/>
</div>
</Router>
	,document.getElementById("root"));