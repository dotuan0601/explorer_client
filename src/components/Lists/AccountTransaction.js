/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import matchSorter from 'match-sorter';
import Dialog from '@material-ui/core/Dialog';
import ReactTable from '../Styled/Table';
import ChaincodeForm from '../Forms/ChaincodeForm';
import ChaincodeModal from '../View/ChaincodeModal';
import { chaincodeListType } from '../../consts/types';
import { Button } from 'reactstrap';
import DatePicker from '../Styled/DatePicker';
import MultiSelect from '../Styled/MultiSelect';

const styles = theme => ({
	hash: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		maxWidth: 60,
		letterSpacing: '2px'
	},
	partialHash: {
		textAlign: 'center',
		position: 'relative !important',
		'&:hover $lastFullHash': {
			marginLeft: -400
		},
		'&:hover $fullHash': {
			display: 'block',
			position: 'absolute !important',
			padding: '4px 4px',
			backgroundColor: '#000000',
			marginTop: -30,
			marginLeft: -215,
			borderRadius: 8,
			color: '#ffffff',
			opacity: undefined
		}
	},
	fullHash: {
		display: 'none'
	},
	lastFullHash: {},
	filter: {
		width: '100%',
		textAlign: 'center',
		margin: '0px !important'
	},
	filterButton: {
		opacity: 0.8,
		margin: 'auto',
		width: '100% !important',
		'margin-bottom': '4px'
	},
	searchButton: {
		opacity: 0.8,
		margin: 'auto',
		width: '100% !important',
		backgroundColor: '#086108',
		'margin-bottom': '4px'
	},
	filterElement: {
		textAlign: 'center',
		display: 'flex',
		padding: '0px !important',
		'& > div': {
			width: '100% !important',
			marginTop: 20
		},
		'& .label': {
			margin: '25px 10px 0px 10px'
		}
	}
});

export class AccountTransaction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogOpen: false,
			sourceDialog: false,
			chaincode: {}
		};
	}

	handleDialogOpen = () => {
		this.setState({ dialogOpen: true });
	};

	handleDialogClose = () => {
		this.setState({ dialogOpen: false });
	};

	sourceDialogOpen = chaincode => {
		this.setState({ chaincode });
		this.setState({ sourceDialog: true });
	};

	sourceDialogClose = () => {
		this.setState({ sourceDialog: false });
	};

	reactTableSetup = classes => [
		{
			Header: 'Trace_No',
			accessor: 'chaincodename',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['chaincodename'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Type',
			accessor: 'channelName',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['channelName'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Sender',
			accessor: 'path',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['path'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Receiver',
			accessor: 'txCount',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['txCount'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Amount',
			accessor: 'txCount',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['txCount'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Time',
			accessor: 'txCount',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['txCount'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Action',
			Cell: row => <Button>Edit</Button>
		}
	];

	render() {
		const { chaincodeList, classes } = this.props;
		const { dialogOpen, sourceDialog, chaincode } = this.state;
		return (
			<div style={{ padding: 20 }}>
				<div className={`${classes.filter} row searchRow`}>
					<div className={`${classes.filterElement} col-md-3`}>
						<label className="label">From</label>
						<DatePicker
							id="from"
							selected={this.state.from}
							showTimeSelect
							timeIntervals={5}
							dateFormat="LLL"
							onChange={date => {
								if (date > this.state.to) {
									// this.setState({ err: true, from: date });
								} else {
									// this.setState({ from: date, err: false });
								}
							}}
						/>
					</div>
					<div className={`${classes.filterElement} col-md-3`}>
						<label className="label">To</label>
						<DatePicker
							id="to"
							selected={this.state.to}
							showTimeSelect
							timeIntervals={5}
							dateFormat="LLL"
							onChange={date => {
								if (date > this.state.from) {
									// this.setState({ to: date, err: false });
								} else {
									// this.setState({ err: true, to: date });
								}
							}}
						>
							<div className="validator ">
								{this.state.err && (
									<span className=" label border-red">
										{' '}
										From date should be less than To date
									</span>
								)}
							</div>
						</DatePicker>
					</div>
					<div className="col-md-2">
						{/* <MultiSelect
							hasSelectAll
							// valueRenderer={this.handleCustomRender}
							shouldToggleOnHover={false}
							selected={this.state.orgs}
							options={this.state.options}
							selectAllLabel="All Orgs"
							onSelectedChanged={value => {
								// this.handleMultiSelect(value);
							}}
						/> */}
					</div>
					<div className="col-md-2">
						<Button
							className={classes.searchButton}
							color="success"
							disabled={this.state.err}
							onClick={async () => {
								// await this.handleSearch();
							}}
						>
							Search
						</Button>
					</div>
					<div className="col-md-1">
						<Button
							className={classes.filterButton}
							color="primary"
							onClick={() => {
								// this.handleClearSearch();
							}}
						>
							Reset
						</Button>
					</div>
					<div className="col-md-1">
						<Button
							className={classes.filterButton}
							color="secondary"
							// onClick={() => this.setState({ filtered: [], sorted: [] })}
						>
							Clear
						</Button>
					</div>
				</div>
				<ReactTable
					data={chaincodeList}
					columns={this.reactTableSetup(classes)}
					defaultPageSize={5}
					filterable
					minRows={0}
					// showPagination={chaincodeList.length >= 5}
				/>
				<Dialog
					open={dialogOpen}
					onClose={this.handleDialogClose}
					fullWidth
					maxWidth="md"
				>
					<ChaincodeForm />
				</Dialog>
				<Dialog
					open={sourceDialog}
					onClose={this.sourceDialogClose}
					fullWidth
					maxWidth="md"
				>
					<ChaincodeModal
						chaincode={chaincode}
						classes={classes}
						onClose={this.sourceDialogClose}
					/>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(AccountTransaction);
