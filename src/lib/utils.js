export function formatDate(date, dateStyle = 'medium', locales = 'fr') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });

	return formatter.format(new Date(date));
}
