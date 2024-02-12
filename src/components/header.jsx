import categories from '@/data/categories.json';

export default function Header({ search, setSearch, category, setCategory }) {
	return (
		<nav className='border-b border-black py-6 md:py-8'>
			<div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
				<div className='flex items-center space-x-4'>
					<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8 0.5C12.1421 0.499999 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.499999 3.85786 3.85786 0.5 8 0.5Z'
							stroke='#00D991'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path d='M8 15.4286L8 0.571507' stroke='#00D991' strokeLinecap='round' strokeLinejoin='round' />
						<path
							d='M10.4995 14.9999C10.4995 14.9999 12.5715 12.6429 12.5715 8.00008C12.5715 3.35722 10.4995 0.999939 10.4995 0.999939'
							stroke='#00D991'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M5.50049 1.00006C5.50049 1.00006 3.4285 3.35706 3.4285 7.99992C3.4285 12.6428 5.50049 15.0001 5.50049 15.0001'
							stroke='#00D991'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path d='M15.4282 8L0.499512 8' stroke='#00D991' strokeLinecap='round' strokeLinejoin='round' />
						<path
							d='M1.5 5C1.5 5 3.5 5 8 5C12.5 5 14.5 5 14.5 5'
							stroke='#00D991'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M1.5 11C1.5 11 3.5 11 8 11C12.5 11 14.5 11 14.5 11'
							stroke='#00D991'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<span>{new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}</span>
				</div>
				<a href='/'>
					<img className='max-w-[100px] md:max-w-[165px]' src='/assets/logo.png' alt='Lws' />
				</a>
				<div className='flex items-center space-x-3 lg:space-x-8'>
					<img src='/assets/icons/search.svg' />
				</div>
			</div>
			<div className='container mx-auto mt-6'>
				<ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
					{categories.map(item => (
						<li key={item.id}>
							<a
								className={`cursor-pointer ${category === item.value && 'text-[#00d991]'}`}
								onClick={() => setCategory(item.value)}>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
