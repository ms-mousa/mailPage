// import App from 'next/app'
import MailContext from './mail/MailContext';
import { useState } from 'react';
import { MailContextProvider } from './mail/MailContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const [mailCtxt, setMailCtxt] = useState({
		userID: 'ie124c',
		companyOpen: false,
		userOpen: false,
		emailOpen: false,
		mailIndexOpen: [],
	});
	return (
		<>
			<Head>
				<title>The Mail page</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
			</Head>
			<MailContextProvider value={{ mailCtxt, setMailCtxt }}>
				<Component {...pageProps} />
			</MailContextProvider>
		</>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
