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
import { Chip, IconButton } from '@material-ui/core';
import FontAwesome from 'react-fontawesome';

const styles = theme => ({
	hash: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		maxWidth: 60,
		letterSpacing: '2px'
	}
});

export class Accounts extends Component {
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
			Header: 'Account ID',
			accessor: 'id',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['id'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'State',
			accessor: 'state',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['state'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			Cell: row => (
				<div>
					<Chip
						label={row.original.state}
						style={{ backgroundColor: '#58C5C2', color: '#fff' }}
					/>
				</div>
			),
			filterAll: true
		},
		{
			Header: 'Type',
			accessor: 'type',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['type'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Level',
			accessor: 'level',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['level'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Action',
			Cell: row => (
				<div>
					<IconButton>
						<FontAwesome style={{ color: '#58C5C2' }} name="info" />
					</IconButton>
					<IconButton style={{ color: '#2375E6' }}>
						<FontAwesome name="edit" />
					</IconButton>
					<IconButton style={{ color: '#FF6360' }}>
						<FontAwesome name="trash" />
					</IconButton>
				</div>
			)
		}
	];

	render() {
		const data = [
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '01',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			},
			{
				id: '02',
				state: 'ACTIVE',
				type: 'NETWORK',
				level: '1'
			}
		];
		const { chaincodeList, classes } = this.props;
		const { dialogOpen, sourceDialog, chaincode } = this.state;
		return (
			<div style={{ padding: 20 }}>
				<ReactTable
					data={data}
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

Accounts.propTypes = {
	chaincodeList: chaincodeListType.isRequired
};

export default withStyles(styles)(Accounts);
