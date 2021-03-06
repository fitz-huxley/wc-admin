/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';
import Header from 'header';
import StorePerformance from './store-performance';
import TopSellingProducts from './top-selling-products';

export default class Dashboard extends Component {
	render() {
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'wc-admin' ) ] } />
				<StorePerformance />
				<div className="woocommerce-dashboard__columns">
					<div>
						<TopSellingProducts />
					</div>
				</div>
			</Fragment>
		);
	}
}
