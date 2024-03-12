import axios from 'axios';
import queryString from 'query-string';
import { GetGroupsResponse, Filter } from './interfaces.ts';
import filterByParams from './filterByParams.ts';

type FetchFn = (params: string) => Promise<GetGroupsResponse>;

const fetchGroups: FetchFn = async (params: string) => {
	await new Promise(resolve => setTimeout(resolve, 1000));
	return axios
		.get(`groups.json?${params}`, {
			headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
		})
		.then(res => {
			if (!res.data.data || res.data.result !== 1 || res.data.data.length === 0) {
				return Promise.reject(new Error(`Ошибка загрузки данных`));
			}
			if (params) {
				const filterParam: Filter = queryString.parse(params);
				res.data.data = filterByParams(filterParam, res.data.data);
			}

			return res.data;
		})
		.catch(err => {
			return console.log(err);
		});
};

export default fetchGroups;
