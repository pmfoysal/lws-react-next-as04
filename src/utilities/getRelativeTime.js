export default function getRelativeTime(date) {
	const diff = Math.round((new Date().getTime() - new Date(date).getTime()) / 1000);
	const diffAbs = Math.abs(diff);
	const rtf = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });

	switch (true) {
		case diffAbs < 60:
			return rtf.format(-diff, 'second');
		case diffAbs < 3600:
			return rtf.format(-Math.round(diff / 60), 'minute');
		case diffAbs < 86400:
			return rtf.format(-Math.round(diff / 3600), 'hour');
		case diffAbs < 2592000:
			return rtf.format(-Math.round(diff / 86400), 'day');
		case diffAbs < 31104000:
			return rtf.format(-Math.round(diff / 2592000), 'month');
		default:
			return rtf.format(-Math.round(diff / 31104000), 'year');
	}
}
