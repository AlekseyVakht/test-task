import axios from 'axios';
import queryString from 'query-string';

const fetchGroups = async params => {
	await new Promise(resolve => setTimeout(resolve, 1000));
	return axios
		.get(`/groups.json?${params}`, {
			headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
		})
		.then(res => {
			if (!res.data.data || res.data.result !== 1 || res.data.data.length === 0) {
				return Promise.reject(new Error(`Ошибка загрузки данных`));
			}
			const filter = queryString.parse(params);
			console.log(
				res.data.data.filter(
					item =>
						filter.closed?.includes(item.closed) &&
						filter.avatar_color?.includes(item.avatar_color),
				),
			);
			return res.data;
		})
		.catch(err => {
			return console.log(err);
		});
};

export default fetchGroups;
