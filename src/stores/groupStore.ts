import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Group, Filter } from '../utils/interfaces.ts';

type Store = {
	isLoading: boolean;
	data: Group[];
	queryParams: string;
	selectedFilters: Filter;
	setQueryParams: (query: string) => void;
	setFilters: (filter: string, group: string) => void;
	setColorFilter: (filter: string) => void;
	clearFilters: () => void;
	setGroups: (fetched: Group[]) => void;
	setIsLoading: (loading: boolean) => void;
};

const initialFilters = {
	closed: undefined,
	friends: undefined,
	avatar_color: [],
};

const useGroupStore = create<Store>()(
	immer(
		devtools(set => ({
			isLoading: false,
			data: [],
			selectedFilters: initialFilters,
			queryParams: '',
			setQueryParams: query => set({ queryParams: query }),
			setFilters: (filter, group) => {
				set(state => {
					if (group === 'closed') {
						state.selectedFilters['closed'] = filter;
					} else {
						state.selectedFilters['friends'] = filter;
					}
				});
			},
			setColorFilter: filter => {
				set(state => {
					if (filter === 'all') {
						state.selectedFilters.avatar_color = [filter];
					} else if (!state.selectedFilters.avatar_color?.some(i => i === filter)) {
						state.selectedFilters.avatar_color = state.selectedFilters.avatar_color?.filter(
							i => i !== 'all',
						);
						state.selectedFilters.avatar_color?.push(filter);
					} else {
						state.selectedFilters.avatar_color = state.selectedFilters.avatar_color?.filter(
							i => i !== filter,
						);
					}
				});
			},
			clearFilters: () => set({ selectedFilters: initialFilters, queryParams: '' }),
			setGroups: fetched =>
				set({
					data: fetched,
				}),
			setIsLoading: loading => set({ isLoading: loading }),
		})),
	),
);

export const setGroups = () => useGroupStore(state => state.setGroups);
export const useGroups = () => useGroupStore(state => state.data);
export const setFilters = () => useGroupStore(state => state.setFilters);
export const setColorFilter = () => useGroupStore(state => state.setColorFilter);
export const clearFilters = () => useGroupStore(state => state.clearFilters);
export const selectedFilters = () => useGroupStore(state => state.selectedFilters);
export const setQueryParams = () => useGroupStore(state => state.setQueryParams);
export const queryParams = () => useGroupStore(state => state.queryParams);
export const setIsLoading = () => useGroupStore(state => state.setIsLoading);
export const isLoading = () => useGroupStore(state => state.isLoading);

export default useGroupStore;
