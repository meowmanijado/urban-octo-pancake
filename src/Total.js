import React from 'react';

export class Total extends React.Component {

	render() {
		return (
			<div>
				<p>Total Basic Pay: {this.props.totalBasicPay}</p>
				<p>Total Deductions: {this.props.totalDeduction} </p>
				<p>Taxable Income: </p>
				<p>Withholding Tax: </p>
				<p>Net Income: </p>
			</div>
		)
	}
}

export default Total;