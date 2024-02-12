import getRelativeTime from '@/utilities/getRelativeTime';

export default function Card({ type, data }) {
	if (!data) return null;

	const { title, description, url, urlToImage, publishedAt, source } = data;

	if (type === 'hero') {
		return (
			<div className='col-span-12 grid grid-cols-12 gap-4'>
				<div className='col-span-12 lg:col-span-4'>
					<a href={url} target='_blank' rel='noreferrer'>
						<h3 className='mb-2 text-2xl font-bold lg:text-[28px]'>{title}</h3>
					</a>
					<p className='text-base text-[#5C5955]'>{description}</p>
					<p className='mt-2 text-base text-[#5C5955]'>{getRelativeTime(publishedAt)}</p>
				</div>
				<div className='col-span-12 lg:col-span-8'>
					<img className='w-full' src={urlToImage || '/assets/thumb_lg.png'} alt={title} />
					<p className='mt-2 text-base text-[#5C5955]'>Illustration: {source?.name}</p>
				</div>
			</div>
		);
	} else if (type === 'main') {
		return (
			<div className='col-span-12 mb-0 md:col-span-8'>
				<img className='w-full' src={urlToImage || '/assets/thumb.png'} alt={title} />
				<div className='col-span-12 mt-4 md:col-span-4'>
					<a href={url} target='_blank' rel='noreferrer'>
						<h3 className='mb-2 text-xl font-bold lg:text-[20px]'>{title}</h3>
					</a>
					<p className='text-base text-[#292219]'>{description}</p>
					<p className='mt-2 text-base text-[#94908C]'>{getRelativeTime(publishedAt)}</p>
				</div>
			</div>
		);
	} else if (type === 'sub') {
		return (
			<div className='col-span-12 grid grid-cols-12 gap-4 lg:col-span-8'>
				<div className='col-span-12 md:col-span-6'>
					<a href={url} target='_blank' rel='noreferrer'>
						<h3 className='mb-2.5 text-xl font-bold lg:text-2xl'>{title}</h3>
					</a>
					<p className='text-base text-[#292219]'>{description}</p>
					<p className='mt-5 text-base text-[#5C5955]'>{getRelativeTime(publishedAt)}</p>
				</div>
				<div className='col-span-12 md:col-span-6'>
					<img className='w-full' src={urlToImage || '/assets/thumb.png'} alt={title} />
				</div>
			</div>
		);
	} else if (type === 'side') {
		return (
			<div className='col-span-12 md:col-span-8 pt-4'>
				<div className='col-span-12 md:col-span-4'>
					<a href={url} target='_blank' rel='noreferrer'>
						<h3 className='mb-2 text-xl font-bold lg:text-[20px]'>{title}</h3>
					</a>
					<p className='text-base text-[#292219]'>{description}</p>
					<p className='mt-2 text-base text-[#94908C]'>{getRelativeTime(publishedAt)}</p>
				</div>
			</div>
		);
	}
	return (
		<div className='col-span-12 md:col-span-6 lg:col-span-4'>
			<div className='col-span-12 md:col-span-4'>
				<a href={url} target='_blank' rel='noreferrer'>
					<h3 className='mb-2 text-xl font-bold lg:text-2xl'>{title}</h3>
				</a>
				<p className='text-base text-[#292219]'>{description}</p>
				<p className='mt-2 text-base text-[#94908C]'>{getRelativeTime(publishedAt)}</p>
			</div>
		</div>
	);
}
