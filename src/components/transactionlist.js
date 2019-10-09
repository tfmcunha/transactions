import React from "react";

export default function TransactionList({ transactions }) {
  	return (
    	<table className="table table-hover accordion">
		  	<thead>
		    	<tr>
			      	<th style={{width: '20%'}} scope="col">Name</th>
			      	<th style={{width: '20%'}} scope="col">Brand</th>
			      	<th style={{width: '20%'}} scope="col">Last 4 Digits</th>
			      	<th style={{width: '20%'}} scope="col">Transaction Type</th>
			      	<th style={{width: '10%'}} scope="col">Amount</th>
			      	<th style={{width: '10%'}} scope="col">Currency</th>
		    	</tr>
		  	</thead>		  	
		  		{transactions.map((transaction,index) => (	
		  			<tbody>
						<tr key={transaction.id} data-toggle="collapse" data-target={`#collapse${index}`}>
							<td>{transaction.card.holderName}</td>
							<td>{}</td>
							<td>XXXX {transaction.card.lastFourDigits}</td>
							<td>{transaction.action.charAt(0).toUpperCase() + transaction.action.slice(1) }</td>
							<td className="text-right">{transaction.amount}.00</td>
							<td>{transaction.currencyCode}</td>							
					   	</tr>    
					   	<tr className="collapse" id={`collapse${index}`}>
					   		<div>{transaction.id}</div>
					   		<div>{transaction.card.brandId}</div>
					   	</div>    					
					</tbody>
				))}	  	   		  	
		</table>
  	);
}