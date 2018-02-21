/*
 * Ticker component
 * Uses Yahoo Stocks API
 */

import jsonp from 'jsonp'
import fetch from 'isomorphic-unfetch'

import { colors } from '../styles'
import Card from '../Card'

const getJson = ( url ) => {

 	const proxy = 'https://peacecors.herokuapp.com/'
 	return fetch( proxy + url ).then( res => res.json() ).catch( console.log )

}
const lookup = ( symbol ) => new Promise( ( resolve, reject ) => {

	 Promise.all( [
					 getJson( `https://autoc.finance.yahoo.com/autoc?query=${symbol}&region=1&lang=en` ),
					 getJson( `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?&modules=summaryProfile,financialData` )
			 ] )
			 .then( ( responses ) => {

					 console.log( responses )
					 if ( !responses[0].ResultSet.Result.length ) {

							 reject( true )
							 return

			}
					 const financialData = responses[1].quoteSummary.result[0].financialData
					 resolve( {
							 symbol,
							 name: responses[0].ResultSet.Result[0].name,
							 exchange: responses[0].ResultSet.Result[0].exchDisp,
							 currentPrice: financialData.currentPrice.raw,
							 highPrice: financialData.targetHighPrice.raw,
							 lowPrice: financialData.targetLowPrice.raw,
							 meanPrice: financialData.targetMeanPrice.raw,
							 medianPrice: financialData.targetMedianPrice.raw
					 } )

		} )
			 .catch( reject )

} )

class Ticker extends React.Component {

	constructor ( props ) {

		super( props )
		this.state = {
			currentTime: new Date(),
			symbol: props.symbol || 'AAPL',
			ticker: {}
		}

	}
	componentDidMount () {

		lookup( this.state.symbol )
			.then( ( res ) => {

				console.log( 'final: ', res )
				this.setState( {ticker: res} )

			} )

		this.setState( {
			currentTime: new Date()
		}, this.updateTime )

	}
	componentWillUnmount () {

		if ( this.timerId ) {

			clearTimeout( this.timerId )

		}
		typeof this.fetchRequest === 'function' && this.fetchRequest.cancel()

	}

	updateTime ( e ) {

		this.timerId = setTimeout( () => {

			this.setState( {
				currentTime: new Date()
			}, this.updateTime )

		}, 3600000 )

	}

	render () {

		const { currentTime, symbol, ticker } = this.state

		return (
			<Card
				className='ticker'
				title={this.state.ticker.symbol}
				text={this.state.ticker.currentPrice}
				subtext={this.state.ticker.exchange}
				{...this.props} />
		)

	}

}

export default Ticker
