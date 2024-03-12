import { Group } from './interfaces.ts';

function colorPicker(colors: Group[]) {
	if (!colors) {
		return [];
	}
	const colorArr = colors.map(item =>
		!item.avatar_color
			? { text: 'без аватарки', value: 'noimage' }
			: { text: item.avatar_color, value: item.avatar_color },
	);
	const colorSet = new Set(colorArr.map(item => JSON.stringify(item)));
	const uniqueData = Array.from(colorSet).map(item => JSON.parse(item));
	return uniqueData;
}

export default colorPicker;
