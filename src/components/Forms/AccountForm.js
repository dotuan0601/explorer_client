import React, { Component } from 'react';

import { TextField, Select, MenuItem } from '@material-ui/core';
import { Row, Col } from 'reactstrap';

class AccountForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			state: ''
		};
	}
	setType = e => {
		this.setState({
			type: e.target.value
		});
	};
	setAccountState = e => {
		this.setState({
			state: e.target.value
		});
	};
	render() {
		return (
			<div style={{ width: 500 }}>
				<Row>
					<Col sm="3">ID:</Col>
					<Col sm="9">
						<TextField style={{ width: '100%' }} />
					</Col>
				</Row>

				<Row style={{ marginTop: 20 }}>
					<Col sm="3">Type:</Col>
					<Col sm="9">
						<Select
							value={this.state.type}
							style={{ width: '100%' }}
							onChange={e => this.setType(e)}
						>
							<MenuItem value="UNDEFINED">UNDEFINED</MenuItem>
							<MenuItem value="MEMBER">MEMBER</MenuItem>
							<MenuItem value="MERCHANT">MERCHANT</MenuItem>
							<MenuItem value="NETWORK">NETWORK</MenuItem>
						</Select>
					</Col>
				</Row>

				<Row style={{ marginTop: 20 }}>
					<Col sm="3">State:</Col>
					<Col sm="9">
						<Select
							value={this.state.state}
							onChange={e => this.setAccountState(e)}
							style={{ width: '100%' }}
						>
							<MenuItem value="INACTIVE">INACTIVE</MenuItem>
							<MenuItem value="ACTIVE">ACTIVE</MenuItem>
							<MenuItem value="LOCKED">LOCKED</MenuItem>
							<MenuItem value="DISABLE">DISABLE</MenuItem>
						</Select>
					</Col>
				</Row>
			</div>
		);
	}
}
export default AccountForm;
