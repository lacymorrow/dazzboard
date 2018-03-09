/*
 * Ticker component
 * Uses Yahoo Stocks API
 */

import jsonp from 'jsonp'
import fetch from 'isomorphic-unfetch'

import { colors } from '../styles'
import Card from '../Card'

const lookup = ( symbol ) => new Promise( ( resolve, reject ) => {

	 const proxy = 'https://peacecors.herokuapp.com/'
	 fetch( proxy + `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?&modules=summaryProfile,financialData` )
	 .then( res => res.json() )
	 .then( res => {
	 	console.log(res)
		const financialData = res.quoteSummary.result[0].financialData
		  if ( !financialData ) {

		 		 reject( {} )

		}
		 resolve( {
				 symbol,
				 currentPrice: financialData.currentPrice.fmt, // || raw for numbers
				 highPrice: financialData.targetHighPrice.fmt,
				 lowPrice: financialData.targetLowPrice.fmt,
				 meanPrice: financialData.targetMeanPrice.fmt,
				 medianPrice: financialData.targetMedianPrice.fmt,
				 recommendation: '(' + financialData.recommendationKey + ')'
		 } )

		} )
		 .catch( reject )

} )

class Ticker extends React.Component {

	constructor ( props ) {

		super( props )
		this.state = {
			symbol: props.symbol || 'AAPL',
			ticker: {
				currentPrice: '--',
				meanPrice: '--',
				recommendation: ''
			}
		}

	}
	componentDidMount () {

		this.fetchRequest = lookup( this.state.symbol )
			.then( ( res ) => {
				this.setState( {ticker: res} )
			} )

	}
	componentWillUnmount () {

		typeof this.fetchRequest.cancel === 'function' && this.fetchRequest.cancel()

	}

	render () {

		const { symbol, ticker } = this.state

		return (
			<Card
				className='ticker'
				title={this.state.symbol}
				text={this.state.ticker.currentPrice}
				subtext={'AVG: ' + this.state.ticker.meanPrice + '  ' + this.state.ticker.recommendation}
				{...this.props} />
		)

	}

}

export default Ticker
