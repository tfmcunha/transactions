import React, { useState } from "react";
import TransactionList from'./transactionlist';
import Bar from './bar';

export default function Main() {
	const [action, setAction] = useState("");
	const [currencyCode, setCurrencyCode] = useState("");
	const [transactions, setTransactions] = useState([]);

	async function getTransactions() {
		const Username = "code-challenge";
		const Password = "payvisioner";
		const header = new Headers();
		header.set("Authorization", "Basic " + btoa(Username + ":" + Password));

		const res = await fetch(`https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions${filter()}`,{
				method: "GET",
				headers: header
				}
			);
		const data = await res.json();

		console.log(data)
		setTransactions(data)
	}

	function filter() {
		if (action && currencyCode) {
			return `?action=${action}&currencyCode=${currencyCode}`;
		} else if (action && !currencyCode) {
			return `?action=${action}`;
		} else if (!action && currencyCode) {
			return `?currencyCode=${currencyCode}`;
		} else {
			return "";
		}
	}

	return (
		<>
			<Bar getTransactions={getTransactions} setAction={setAction} setCurrencyCode={setCurrencyCode} />
			<TransactionList transactions={transactions}/>
		</>
	);
}