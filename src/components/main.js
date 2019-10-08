import React, {useEffect} from 'react';


export default function Main(){

	const Username = "code-challenge"
	const Password = "payvisioner"
	const header = new Headers()	
	header.set('Authorization', 'Basic ' + btoa(Username + ":" + Password)) 

	useEffect(() => {
		async function getTransactions(){
			const res = await fetch('https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions',{
				method: "GET",
				headers: header
			})
			const data = await res.json()
			console.log(data)
		}
		getTransactions()
	}, [])
	return(
		<div>Hello</div>
	);
}