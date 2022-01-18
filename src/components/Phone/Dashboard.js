import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './index.css';

class PhoneDashboard extends Component {
	render() {
		return (
			<>
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
						<p>ID: 0123456789</p>
					</div>
				</div>
				<div style={{ marginTop: -80 }} className="app-area">
					<div style={{ padding: 10, height: 55, color: '#1B2662' }}>
						<p style={{ fontSize: 10, fontWeight: 'bold' }}>Balance:</p>
						<p style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
							{new Intl.NumberFormat('vi-VN', {
								style: 'currency',
								currency: 'VND'
							}).format(50000000)}
						</p>
					</div>
					<hr />
					<div>
						<Row
							style={{
								margin: 'auto',
								color: '#229CBC',
								fontSize: 12,
								textAlign: 'center'
							}}
						>
							<Col>
								<FontAwesome
									size="2x"
									name="send"
									onClick={() => this.props.setView('transfer')}
								/>
								<p>Transfer</p>
							</Col>
							<Col>
								<FontAwesome
									onClick={() => this.props.setView('credit')}
									size="2x"
									name="download"
								/>
								<p>Credit</p>
							</Col>
							<Col>
								<FontAwesome
									onClick={() => this.props.setView('debit')}
									size="2x"
									name="upload"
								/>
								<p>Debit</p>
							</Col>
						</Row>
					</div>
				</div>
				<div
					style={{
						margin: 'auto',
						padding: 5,
						paddingTop: 20,
						marginTop: 40,
						color: '#2384D6',
						fontSize: 12,
						textAlign: 'center'
					}}
					className="app-area"
				>
					<Row>
						<Col>
							<FontAwesome size="2x" name="mobile" />
							<p>Card</p>
						</Col>
						<Col>
							<FontAwesome size="2x" name="tint" />
							<p>Water</p>
						</Col>
						<Col>
							<FontAwesome size="2x" name="bolt" />
							<p>Electric</p>
						</Col>
						<Col>
							<FontAwesome size="2x" name="bus" />
							<p>Bus</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<FontAwesome size="2x" name="gamepad" />
							<p>Game</p>
						</Col>
						<Col>
							<FontAwesome size="2x" name="tv" />
							<p>TV</p>
						</Col>
						<Col>
							<FontAwesome size="2x" name="plane" />
							<p>Plane</p>
						</Col>
						<Col>
							<FontAwesome size="2x" name="angle-double-right" />
							<p>More</p>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}
export default PhoneDashboard;
