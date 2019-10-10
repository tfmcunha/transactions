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
				<li className="row list-group-item d-flex list-header">
					{headers.map((head, index) => (
						<div key={index} className="col-2">
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
						<div key={id}>
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
										<div className="col-3 sub-titles">
											<div>ID:</div>
											<div>Tracking Code:</div>
											<div>Brand ID:</div>
										</div>
										<div className="col-9">
											<div>{id}</div>
											<div>{trackingCode}</div>
											<div>{brandId}</div>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="row">
										<div className="col-5 sub-titles">
											<div>First 6 Digits:</div>
											<div>Expiry Month:</div>
											<div>Expiry Year: </div>
										</div>
										<div className="col-7">
											<div>{firstSixDigits} XXXX</div>											
											<div>{expiryMonth}</div>											
											<div>{expiryYear}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
