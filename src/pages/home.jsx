import Footer from '@/components/footer';
import Header from '@/components/header';
import { Fragment, useState } from 'react';
import useNewsQuery from '@/hooks/useNewsQuery';
import Contents from '@/components/home/contents';

export default function Home() {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');

	const { data } = useNewsQuery({ category, search });

	return (
		<Fragment>
			<Header search={search} category={category} setSearch={setSearch} setCategory={setCategory} />
			<Contents data={data} />
			<Footer />
		</Fragment>
	);
}
