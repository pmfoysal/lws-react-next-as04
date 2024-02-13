import Card from '../card';

export default function Contents({ data }) {
	const init = 6;
	const column1 = [];
	const column2 = [];

	for (let i = init; i < data.length; i++) {
		if ((i - init) % 5 === 3 || (i - init) % 5 === 4) column2.push(data[i]);
		else column1.push(data[i]);
	}

	return (
		<main className='my-10 lg:my-14'>
			{data.length ? (
				<div className='container mx-auto grid grid-cols-12 gap-8'>
					<div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
						<Card type='hero' data={data[0]} />
						<Card type='sub' data={data[2]} />
						<Card data={data[3]} />
						{column1.map((item, index) => (
							<Card key={index} data={item} />
						))}
					</div>
					<div className='col-span-12 self-start xl:col-span-4'>
						<div className='space-y-4 divide-y-[1px] divide-black divide-opacity-25'>
							<Card type='main' data={data[1]} />
							<Card type='side' data={data[4]} />
							<Card type='side' data={data[5]} />
							{column2.map((item, index) => (
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
