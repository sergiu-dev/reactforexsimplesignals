import React from 'react';

class TradesWidget extends React.PureComponent {
	constructor(props) {
		super(props);
		this._ref = React.createRef();
	}
	render() {
		return(
			<div className='tradingview-widget-container' ref={this._ref}>
				<div className='tradingview-widget-container__widget'>

				</div>
			</div>
		);
	}
	componentDidMount() {
		const script = document.createElement('script');
		script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
		script.async = true;
		script.innerHTML = JSON.stringify({ "symbols":
			[
				{"title": "EUR/USD", "proName": "OANDA:EURUSD"},
				{"description": "GBP/USD", "proName": "OANDA:GBPUSD"},
				{"description": "USD/CAD", "proName": "OANDA:USDCAD"},
				{"description": "USD/JPY", "proName": "FX:USDJPY"},
				{"description": "AUD/USD", "proName": "FX_IDC:AUDUSD"},
				{"description": "NZD/USD", "proName": "OANDA:NZDUSD"},
				{"description": "EUR/AUD", "proName": "OANDA:EURAUD"},
				{"description": "EUR/JPY", "proName": "FX:EURJPY"}
			],
			"colorTheme": "dark", "isTransparent": false, "locale": "en"
		});
		this._ref.current.appendChild(script);
	}
}

export default TradesWidget;