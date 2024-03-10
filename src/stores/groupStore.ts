import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Group } from '../utils/interfaces.ts';

const initialFilters = { closed: [], friends: [], avatar_color: [] };

type Store = {
	data: Group[];
	queryParams: string;
	selectedFilters: { [key: string]: string[] };
	setQueryParams: (query: string) => void;
	setFilters: (filter: string, type: string) => void;
	clearFilters: () => void;
	setGroups: (fetched: Group[]) => void;
};

const useGroupStore = create<Store>()(
	immer(
		devtools(set => ({
			data: [],
			selectedFilters: initialFilters,
			queryParams: '',
			setQueryParams: query => set({ queryParams: query }),
			setFilters: (filter, type) => {
				set(state => {
					if (!state.selectedFilters[type].some((i: string) => i === filter)) {
						state.selectedFilters[type].push(filter);
					} else {
						state.selectedFilters[type] = state.selectedFilters[type].filter(
							(i: string) => i !== filter,
						);
					}
				});
			},
			clearFilters: () => set({ selectedFilters: initialFilters, queryParams: '' }),
			setGroups: fetched =>
				set({
					data: fetched,
				}),
		})),
	),
);

export const setGroups = () => useGroupStore(state => state.setGroups);
export const useGroups = () => useGroupStore(state => state.data);
export const setFilters = () => useGroupStore(state => state.setFilters);
export const clearFilters = () => useGroupStore(state => state.clearFilters);
export const selectedFilters = () => useGroupStore(state => state.selectedFilters);
export const setQueryParams = () => useGroupStore(state => state.setQueryParams);
export const queryParams = () => useGroupStore(state => state.queryParams);

export default useGroupStore;
