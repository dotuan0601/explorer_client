import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, Input, Row, Col } from 'reactstrap';
import './index.css';

class PointTransfer extends Component {
	render() {
		return (
			<div style={{ height: '100%' }}>
				<div className="header">
					<div
						style={{
							color: 'white',
							paddingTop: 20,
							width: '80%',
							margin: 'auto',
							fontWeight: 'bold',
							fontSize: 12
						}}
					>
						<Row>
							<Col>
								<p>ID: 0123456789</p>
							</Col>
							<Col>
								<FontAwesome
									onClick={() => this.props.setView('dashboard')}
									name="home"
									style={{ float: 'right', fontSize: 20 }}
								/>
							</Col>
						</Row>

						<p style={{ fontWeight: 'bold' }}>Balance:</p>
						<p style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
							{new Intl.NumberFormat('vi-VN', {
								style: 'currency',
								currency: 'VND'
							}).format(50000000)}
						</p>
					</div>
				</div>

				<div style={{ width: '80%', margin: 'auto', paddingTop: 20 }}>
					{this.props.type === 'transfer' ? <Input placeholder="To" /> : ''}
					<Input placeholder="Amount" type="number" />
					<Button
						style={{
							position: 'absolute',
							bottom: 20,
							width: '80%',
							textTransform: 'capitalize'
						}}
					>
						{this.props.type}
					</Button>
				</div>
			</div>
		);
	}
}
export default PointTransfer;
