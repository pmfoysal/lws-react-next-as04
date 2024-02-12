import Card from '../card';

export default function Contents() {
	return (
		<main className='my-10 lg:my-14'>
			<div className='container mx-auto grid grid-cols-12 gap-8'>
				<div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
					<Card type='hero' />
					<Card type='sub' />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className='col-span-12 self-start xl:col-span-4'>
					<div className='space-y-4 divide-y-2 divide-[#D5D1C9]'>
						<Card type='main' />
						<Card type='side' />
						<Card type='side' />
						<Card type='side' />
						<Card type='side' />
						<Card type='side' />
					</div>
				</div>
			</div>
		</main>
	);
}
