/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';
import Main from '../layout/Main/Main';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import LandingPage from '../components/View/LandingPage';
import ErrorMessage from '../components/ErrorMessage';
import { chartSelectors } from '../state/redux/charts';
import { themeSelectors, themeActions } from '../state/redux/theme';
import { authSelectors } from '../state/redux/auth';

import Login from '../pages/Login';

import Private from '../pages/Route';

/* istanbul ignore next */
const styles = theme => {
	const { type } = theme.palette;
	const dark = type === 'dark';
	return {
		app: {
			backgroundColor: dark ? 'rgb(36, 32, 54)' : 'rgb(240, 245, 249)',
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			'& ol, & ul': {
				listStyle: 'none'
			}
		}
	};
};

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	/* istanbul ignore next */
	updateLoadStatus = () => {
		this.setState({ loading: false });
	};

	/* istanbul ignore next */
	refreshComponent = mode => {
		this.props.changeTheme(mode);
	};

	/* istanbul ignore next */
	render() {
		const { auth } = this.props;
		const { loading } = this.state;
		if (auth && loading) {
			return <LandingPage updateLoadStatus={this.updateLoadStatus} />;
		}
		const { classes, mode, error } = this.props;
		const className = classnames(mode === 'dark' && 'dark-theme', classes.app);
		return (
			<div className={className}>
				{auth && <Header refresh={this.refreshComponent} />}
				{error && <ErrorMessage message={error} />}
				<Router>
					<Switch>
						<Route
							exact
							path="/login"
							render={routeprops => <Login {...routeprops} />}
						/>
						<Private path="/" render={routeprops => <Main {...routeprops} />} />
					</Switch>
				</Router>
				{auth && <Footer />}
			</div>
		);
	}
}

const { modeSelector } = themeSelectors;
const { changeTheme } = themeActions;
const { errorMessageSelector } = chartSelectors;
const { authSelector } = authSelectors;

/* istanbul ignore next */
export default compose(
	withStyles(styles),
	connect(
		state => ({
			error: errorMessageSelector(state),
			mode: modeSelector(state),
			auth: authSelector(state)
		}),
		{ changeTheme }
	)
)(App);
