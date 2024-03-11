import { Group, Filter } from './interfaces.ts';

export const filter = (params: Filter, data: Group[]) => {
	const filteredData = data.filter(data => {
		const filteredByPrivacy =
			!params.closed ||
			(params.closed === 'opened' && data.closed === false) ||
			(params.closed === 'closed' && data.closed === true) ||
			(params.closed === 'all' && data);
		const filteredByFriends =
			!params.friends ||
			(params.friends === 'all' && data) ||
			(params.friends.includes('hasfriends') && data.friends);
		const filteredByColor =
			!params.avatar_color ||
			params.avatar_color.includes(data.avatar_color!) ||
			(params.avatar_color.includes('noimage') && !data.hasOwnProperty('avatar_color'));

		return filteredByFriends && filteredByPrivacy && filteredByColor;
	});

	return filteredData;
};

export default filter;
