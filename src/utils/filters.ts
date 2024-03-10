import data from '../../public/groups.json';
import { Group } from './interfaces.ts';

const colorPicker = (colors: Group[]) => {
	const colorArr = colors.map(item =>
		item.avatar_color === undefined
			? { text: 'без аватарки', value: null }
			: { text: item.avatar_color, value: item.avatar_color },
	);
	const colorSet = new Set(colorArr.map(item => JSON.stringify(item)));
	const uniqueData = Array.from(colorSet).map(item => JSON.parse(item));
	return uniqueData;
};

const FILTERS = {
	privacyFilters: {
		filterGroup: 'closed',
		filterOptions: [
			{ text: 'все', value: '' },
			{ text: 'закрытые', value: true },
			{ text: 'открытые', value: false },
		],
	},
	friendsFilters: {
		filterGroup: 'friends',
		filterOptions: [
			{ text: 'есть друзья', value: true },
			{ text: 'нет друзей', value: false },
		],
	},
	colorsFilters: {
		filterGroup: 'avatar_color',
		filterOptions: colorPicker(data.data),
	},
};

export default FILTERS;
