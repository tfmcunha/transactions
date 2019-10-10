import React from 'react';

export default function Bar({getTransactions, setAction,setCurrencyCode}){
	return(
		<div className="d-flex justify-content-end">
			<select className="filters" onChange={(e) => setAction(e.target.value)}>
				<option value ="">Transaction Type</option>
				<option value="payment">Payment</option>
				<option value="credit">Credit</option>
			</select>
			<select className="filters" onChange={(e) => setCurrencyCode(e.target.value)}>
				<option value ="">Currency</option>
				<option value="EUR">EUR</option>
				<option value="JPY">JPY</option>
				<option value="USD">USD</option>
			</select>
			<button className="search" onClick={getTransactions}>Search</button>
		</div>
	);
}