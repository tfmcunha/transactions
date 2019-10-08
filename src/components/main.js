import React, {useState, useEffect} from 'react';


export default function Main(){	

	const [action, setAction] = useState("")
	const [currencyCode, setCurrencyCode] = useState("")

	async function getTransactions(){
		const Username = "code-challenge"
		const Password = "payvisioner"
		const header = new Headers()	
		header.set('Authorization', 'Basic ' + btoa(Username + ":" + Password)) 

		const res = await fetch(`https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions${action+currencyCode}`,{
			method: "GET",
			headers: header
		})
		const data = await res.json()
	}
	
	return(		
		<>
			<div class="dropdown">
			  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
			    Transaction Type
			  </button>
			  <div class="dropdown-menu" >
			    <button class="dropdown-item">Payment</button>
			    <button class="dropdown-item">Credit</button>
			    <button class="dropdown-item">Authorize</button>
			  </div>
			</div>

			<button onClick={getTransactions}>Search</button>
		</>
	);
}