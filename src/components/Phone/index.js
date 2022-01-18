import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhoneDashboard from './Dashboard';
import PointTransfer from './PointTransfer';
import { phoneSelectors, viewActions } from '../../state/redux/phone';
import './index.css';

export class Phone extends Component {
	constructor(props) {
		super(props);
	}

	renderView = view => {
		switch (view) {
			case 'dashboard':
				return <PhoneDashboard setView={this.props.setView} />;
			default:
				return <PointTransfer setView={this.props.setView} type={view} />;
		}
	};
	render() {
		const { view } = this.props;
		console.log(this.props.view);
		return (
			<div className="container">
				<div className="smartphone">{this.renderView(view)}</div>
			</div>
		);
	}
}

const { viewSelector } = phoneSelectors;
const { setView } = viewActions;

export default connect(
	state => ({
		state: state,
		view: viewSelector(state)
	}),
	{
		setView
	}
)(Phone);
