import { useEffect, useState } from 'react';

const API = 'http://localhost:8000/v2';

export default function useNewsQuery({ category, search }) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setError(null);
		setIsError(false);
		setIsLoading(true);
		if (search) {
			fetch(`${API}/search?q=${search}`)
				.then(res => res.json())
				.then(res => {
					setData(res.result);
				})
				.catch(err => {
					setIsError(true);
					setError(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			fetch(`${API}/top-headlines?category=${category}`)
				.then(res => res.json())
				.then(res => {
					setData(res.articles);
				})
				.catch(err => {
					setIsError(true);
					setError(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [category, search]);

	return { data, error, isError, isLoading };
}
