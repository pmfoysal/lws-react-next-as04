import Footer from '@/components/footer';
import Header from '@/components/header';
import useNewsQuery from '@/hooks/useNewsQuery';
import Contents from '@/components/home/contents';
import { Fragment, useEffect, useRef, useState } from 'react';

export default function Home() {
	const catRef = useRef('general');
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState(catRef.current);

	const { data } = useNewsQuery({ category, search });

	useEffect(() => {
		if (search) {
			catRef.current = category;
			setCategory('');
		} else setCategory(catRef.current);
	}, [search]);

	return (
		<Fragment>
			<Header category={category} setSearch={setSearch} setCategory={setCategory} />
			<Contents data={data} />
			<Footer />
		</Fragment>
	);
}
