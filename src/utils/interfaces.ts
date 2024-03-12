export interface User {
	first_name: string;
	last_name: string;
}

export interface Group {
	id: number;
	name: string;
	closed: boolean;
	avatar_color?: string;
	members_count: number;
	friends?: User[];
}

export interface GetGroupsResponse {
	result: 1 | 0;
	data?: Group[];
}

export interface Filter {
	closed?: string | undefined;
	friends?: string | undefined;
	avatar_color?: string[];
}

export interface IFilter {
	filters?: { text: string; value: string }[];
	filter?: { text: string; value: string };
	group?: string;
	filtersLabel?: string;
	text?: string;
	action?: string;
	value?: string;
}
