import Card from '../card';

export default function Contents({ data }) {
	return (
		<main className='my-10 lg:my-14'>
			{data.length ? (
				<div className='container mx-auto grid grid-cols-12 gap-8'>
					<div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
						<Card type='hero' data={data[0]} />
						<Card type='sub' data={data[2]} />
						{data.slice(3, 22).map((item, index) => (
							<Card key={index} data={item} />
						))}
					</div>
					<div className='col-span-12 self-start xl:col-span-4'>
						<div className='space-y-4 divide-y-2 divide-[#D5D1C9]'>
							<Card type='main' data={data[1]} />
							{data.slice(23).map((item, index) => (
								<Card key={index} type='side' data={item} />
							))}
						</div>
					</div>
				</div>
			) : (
				<h1 className='text-center text-3xl opacity-50'>No News Available!</h1>
			)}
		</main>
	);
}
