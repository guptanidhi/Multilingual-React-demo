import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import arLocalData from 'react-intl/locale-data/ar';
import esLocalData from 'react-intl/locale-data/es';
import translations from './i18n/locales';

import App from './App';

addLocaleData(arLocalData);
addLocaleData(esLocalData);

export default class AppWrapper extends Component {
	render() {
		// Get Locale from url
		const locale = window.location.search.replace('?locale=', '') || 'en';
		const messages = translations[locale];
		return (
			<IntlProvider locale={locale} key={locale} messages={messages}>
				< App />
			</IntlProvider>
		);
	}
}