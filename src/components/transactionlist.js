import React from "react";

export default function TransactionList({ transactions }) {
	const headers = [
		"Name",
		"Brand",
		"Last 4 Digits",
		"Transaction Type",
		"Amount",
		"Currency"
	];

	return (
		<div>
			<ul className="list-group list-group-flush">
				<li className="row list-group-item d-flex">
					{headers.map(head => (
						<div className="col-2">
							<b>{head}</b>
						</div>
					))}
				</li>
				{transactions.map((transaction, index) => {
					const {
						card: {
							holderName,
							lastFourDigits,
							firstSixDigits,
							expiryMonth,
							expiryYear
						},
						action,
						brandId,
						currencyCode,
						amount,
						id,
						trackingCode
					} = transaction;

					return (
						<>
							<li
							className="row list-group-item d-flex"
							data-toggle="collapse"
							data-target={`#collapse${index}`}
							>
								<div className="col-2">{holderName}</div>
								<div className="col-2">{brandId}</div>
								<div className="col-2">XXXX {lastFourDigits}</div>
								<div className="col-2">{action}</div>
								<div className="col-2">{amount}</div>
								<div className="col-2">{currencyCode}</div>
							</li>
							<div id={`collapse${index}`} className="row sub collapse">
								<div className="col-sm-6 offset-sm-1">
									<div className="row">
										<div className="col-3">ID:</div>
										<div className="col-9">{id}</div>
										<div className="col-3">Tracking Code:</div>
										<div className="col-9">{trackingCode}</div>
										<div className="col-3">Brand ID:</div>
										<div className="col-9">{brandId}</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="row">
										<div className="col-5">First 6 Digits:</div>
										<div className="col-7">{firstSixDigits} XXXX</div>
										<div className="col-5">Expiry Month:</div>
										<div className="col-7">{expiryMonth}</div>
										<div className="col-5">Expiry Year: </div>
										<div className="col-7">{expiryYear}</div>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</ul>
		</div>
	);
}
