import Icons from './icons';
import { flushSync } from 'react-dom';
import { useRef, useState } from 'react';
import debounce from '@/utilities/debounce';
import categories from '@/data/categories.json';

export default function Header({ setSearch, category, setCategory }) {
	const inputRef = useRef(null);
	const [isSearch, setIsSearch] = useState(false);

	function handleSearchOpen() {
		setSearch('');
		flushSync(() => setIsSearch(prev => !prev));
		inputRef.current.focus();
		inputRef.current.value = '';
	}

	const handleSearchInput = debounce(event => {
		setSearch(event.target.value);
	});

	function handleCategory(value) {
		return () => {
			setSearch('');
			setCategory(value);
			inputRef.current.value = '';
		};
	}

	return (
		<nav className='border-b border-black border-opacity-25 py-6 md:py-8'>
			<div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
				<div className='flex items-center space-x-4'>
					<Icons name='web' />
					<span>{new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}</span>
				</div>
				<a href='/'>
					<img className='max-w-[100px] md:max-w-[165px]' src='/assets/logo.png' alt='Lws' />
				</a>
				<div className='flex items-center space-x-2 lg:space-x-4'>
					<input
						type='search'
						ref={inputRef}
						placeholder='Search...'
						onInput={handleSearchInput}
						className={`h-10 w-[200px] border border-black  rounded-lg px-4 box-border outline-none shadow-none ring-0 ${isSearch || 'invisible'}`}
					/>
					<img src='/assets/icons/search.svg' className='cursor-pointer' onClick={handleSearchOpen} />
				</div>
			</div>
			<div className='container mx-auto mt-6'>
				<ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
					{categories.map(item => (
						<li key={item.id}>
							<a
								className={`cursor-pointer ${category === item.value && 'text-[#00d991]'}`}
								onClick={handleCategory(item.value)}>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
