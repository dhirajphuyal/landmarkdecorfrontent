import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import __HomePage__ from '../Components/index';
import Menu from '../Components/Menu';
import HomePage from '../Components/HomePage';
import AboutPage from '../Components/AboutPage';
import Events from '../Components/Events';
import Events_1 from '../Components/Events_1';
import Themes from '../Components/Themes';
import Gallery from '../Components/Gallery';
import MehendiDesign from '../Components/MehendiDesign';
import MehendiDesign_1 from '../Components/MehendiDesign_1';
import ContactUs from '../Components/ContactUs';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><__HomePage__ /></Route>
				<Route exact path="/menu"><Menu /></Route>
				<Route exact path="/homepage"><HomePage /></Route>
				<Route exact path="/aboutpage"><AboutPage /></Route>
				<Route exact path="/events"><Events /></Route>
				<Route exact path="/events_1"><Events_1 /></Route>
				<Route exact path="/themes"><Themes /></Route>
				<Route exact path="/gallery"><Gallery /></Route>
				<Route exact path="/mehendidesign"><MehendiDesign /></Route>
				<Route exact path="/mehendidesign_1"><MehendiDesign_1 /></Route>
				<Route exact path="/contactus"><ContactUs /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;