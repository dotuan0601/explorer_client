import React, { Component } from 'react';
import View from '../Styled/View';
import { Row, Col } from 'reactstrap';
import { Accounts } from '../Lists/Account';
import Phone from '../Phone';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
	Tabs,
	Tab
} from '@material-ui/core';
import AccountTransaction from '../Lists/AccountTransaction';
import AccountForm from '../Forms/AccountForm';

class AccountManager extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogOpen: false,
			tab: 'accounts'
		};
	}
	handleDialogOpen = () => {
		this.setState({ dialogOpen: true });
	};

	handleDialogClose = () => {
		this.setState({ dialogOpen: false });
	};
	handleChange = (e, val) => {
		this.setState({
			tab: val
		});
	};
	render() {
		return (
			<div>
				<Row>
					<Col sm="9">
						<View>
							<Tabs value={this.state.tab} onChange={this.handleChange}>
								<Tab value="accounts" label="Accounts"></Tab>
								<Tab value="transactions" label="Transactions"></Tab>
							</Tabs>
							{this.state.tab === 'accounts' ? (
								<div>
									<Button
										variant="contained"
										color="primary"
										onClick={this.handleDialogOpen}
									>
										New
									</Button>

									<Accounts />
								</div>
							) : (
								<AccountTransaction />
							)}
						</View>
					</Col>
					<Col sm="3">
						<Phone />
					</Col>
				</Row>

				<Dialog open={this.state.dialogOpen} onClose={this.handleDialogClose}>
					<DialogTitle>Create a new account </DialogTitle>
					<DialogContent>
						<AccountForm />
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleDialogClose}>Cancel</Button>
						<Button color="primary">Create</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
export default AccountManager;
