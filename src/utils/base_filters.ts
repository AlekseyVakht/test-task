import data from '../../public/groups.json';
import colorPicker from './colorPicker.ts';

const BASE_FILTERS = {
	closed: [
		{ text: 'все', value: 'all' },
		{ text: 'закрытые', value: 'closed' },
		{ text: 'открытые', value: 'opened' },
	],
	friends: [
		{ text: 'все', value: 'all' },
		{ text: 'есть друзья', value: 'hasfriends' },
	],
	avatar_color: [{ text: 'любой', value: 'all' }].concat(colorPicker(data.data)),
};

export default BASE_FILTERS;
