/*
 * Ticker component
 * Uses Yahoo Stocks API
 */

import jsonp from 'jsonp'
import fetch from 'isomorphic-unfetch'

 const getJson = (url) => {
 	return fetch(url, {  method: 'GET',
  credentials: 'include'})
 }
 const lookup = (symbol) => new Promise((resolve, reject) => {
	 Promise.all([
					 getJson(`https://autoc.finance.yahoo.com/autoc?query=${symbol}&region=1&lang=en`),
					 getJson(`https://query1.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?&modules=summaryProfile,financialData`),
			 ])
			 .then(res => res)
			 .then((responses) => {
					 console.log(responses)
					 // if (!responses[0].ResultSet.Result.length) {
						// 	 reject(true);
						// 	 return;
					 // }
					 // const financialData = responses[1].quoteSummary.result[0].financialData;
					 // resolve({
						// 	 symbol,
						// 	 name: responses[0].ResultSet.Result[0].name,
						// 	 exchange: responses[0].ResultSet.Result[0].exchDisp,
						// 	 currentPrice: financialData.currentPrice.raw,
						// 	 highPrice: financialData.targetHighPrice.raw,
						// 	 lowPrice: financialData.targetLowPrice.raw,
						// 	 meanPrice: financialData.targetMeanPrice.raw,
						// 	 medianPrice: financialData.targetMedianPrice.raw,
					 // });
			 })
			 .catch(reject);
});



class Ticker extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			currentTime: new Date(),
			symbol: 'AAPL',
			ticker: {} 
		}
	}
	componentDidMount() {
		lookup(this.state.symbol)
		.then((res) => { setState({ticker: res}) })

		this.setState({
			currentTime: new Date()
		}, this.updateTime);
	}
	componentWillUnmount() {
		if (this.timerId) {
			clearTimeout(this.timerId)
		}
	}

	updateTime = e => {
		this.timerId = setTimeout(() => {
			this.setState({
				currentTime: new Date()
			}, this.updateTime);
		})
	}

	render() {
		const { currentTime, symbol, ticker } = this.state

		const sx = {
			fontSize: '48px',
			width: '100%',
			textAlign: 'center'
		}

		return (
			<div className='ticker' style={sx}>
				{this.state.ticker.currentPrice}
			</div>
		)
	}
}

export default Ticker