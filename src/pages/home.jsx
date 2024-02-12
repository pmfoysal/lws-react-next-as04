import { Fragment } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Contents from '@/components/home/contents';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<Contents />
			<Footer />
		</Fragment>
	);
}
