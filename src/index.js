import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import jin from './image/jinu.png'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Forward from '@material-ui/icons/Forward';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import Nextpage from './nextpage.js'
class Darshit extends React.Component{
render()
{
	return(
			<div class="background">
			<div class="circle">
			</div>
				<img src={jin} class="img-fluid kl"/>
				<h1 class="text font">JINU</h1>
				<h3 class="font2">Daily task reminder</h3>
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
</div>
</Router>
	,document.getElementById("root"));